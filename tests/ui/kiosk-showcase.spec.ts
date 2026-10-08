import { expect, test } from "@playwright/test";
import { KIOSK_STEPS } from "../../src/lib/kiosk-demo";

for (const viewport of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "phone", width: 430, height: 932 },
  { name: "small-phone", width: 320, height: 800 },
]) {
  test(`kiosk screens and hardware fit ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/#kiosko");
    await page.locator("#kiosko").scrollIntoViewIfNeeded();
    await expect(page.locator(".kiosk-device")).toHaveAttribute("data-render", "webgl");
    await expect(page.locator(".kiosk-capture-image")).toBeVisible();
    await expect.poll(() => page.locator(".kiosk-capture-image").evaluate((img) => (img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    const hardware = await page.locator(".kiosk-device canvas").screenshot();
    const pixels = await page.evaluate(async (base64) => {
      const img = new window.Image();
      img.src = `data:image/png;base64,${base64}`;
      await img.decode();
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      // Sample below the display so a loaded screenshot cannot hide a blank 3D model.
      const { data } = ctx.getImageData(img.width * .4, img.height * .6, img.width * .2, img.height * .32);
      let dark = 0;
      for (let i = 0; i < data.length; i += 4) if (data[i] < 80 && data[i + 1] < 100 && data[i + 2] < 140 && data[i + 3] > 0) dark++;
      return dark;
    }, hardware.toString("base64"));
    expect(pixels).toBeGreaterThan(1000);

    for (const [index, step] of KIOSK_STEPS.entries()) {
      await page.getByRole("button", { name: `Paso ${index + 1}: ${step.title}`, exact: true }).click();
      const image = page.locator(".kiosk-capture-image");
      await expect(image).toHaveAttribute("alt", `Kiosko Arepa Builder: ${step.title}`);
      await expect.poll(() => image.evaluate((img) => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0)).toBe(true);
      await page.locator(".kiosk-capture").evaluate((element) => Promise.all(element.getAnimations().map((animation) => animation.finished)));
      await expect(page.getByRole("button", { name: `Paso ${index + 1}: ${step.title}`, exact: true })).toHaveAttribute("aria-current", "step");
      const screenBounds = await page.locator(".kiosk-display").boundingBox();
      const imageBounds = await image.boundingBox();
      expect(imageBounds!.x).toBeGreaterThanOrEqual(screenBounds!.x - 1);
      expect(imageBounds!.y).toBeGreaterThanOrEqual(screenBounds!.y - 1);
      expect(imageBounds!.x + imageBounds!.width).toBeLessThanOrEqual(screenBounds!.x + screenBounds!.width + 1);
      expect(imageBounds!.y + imageBounds!.height).toBeLessThanOrEqual(screenBounds!.y + screenBounds!.height + 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.getByRole("button", { name: "Paso 1: Bienvenida", exact: true }).click();
    await page.locator("#kiosko").screenshot({ path: `test-results/kiosk-${viewport.name}.png`, style: "header.fixed, nextjs-portal, button[aria-label='Volver arriba'] { visibility: hidden; }" });
  });
}

test("touch flow, autoplay, enlarged screen, and keyboard dismissal never send orders", async ({ page }) => {
  const writes: string[] = [];
  page.on("request", (request) => {
    if (/\/api\//.test(request.url()) && request.method() !== "GET") writes.push(request.url());
  });
  await page.goto("/#kiosko");
  await page.locator("#kiosko").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Toca para comenzar", exact: true }).click();
  await page.getByRole("button", { name: "Seleccionar Español", exact: true }).click();
  await page.getByRole("button", { name: "Elegir para llevar", exact: true }).click();
  await page.getByRole("button", { name: "Ver todo el menú", exact: true }).click();
  await page.getByRole("button", { name: "Añadir productos al pedido", exact: true }).click();
  await page.getByRole("button", { name: "Pedido añadido", exact: false }).click();
  await page.getByRole("button", { name: "Continuar pedido", exact: true }).click();
  await page.getByRole("button", { name: "Simular pago", exact: true }).click();
  await page.getByRole("button", { name: "Hacer otro pedido", exact: true }).click();
  await expect(page.locator(".kiosk-capture-image")).toHaveAttribute("alt", "Kiosko Arepa Builder: Bienvenida");
  await page.getByRole("button", { name: "Reproducir recorrido", exact: true }).click();
  await expect(page.locator(".kiosk-capture-image")).toHaveAttribute("alt", "Kiosko Arepa Builder: Idioma", { timeout: 10000 });
  await page.getByRole("button", { name: "Pausar recorrido", exact: true }).click();
  await page.getByRole("button", { name: "Ampliar pantalla", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("dialog").getByRole("button", { name: "Seleccionar Español", exact: true }).click();
  await expect(page.getByRole("dialog").getByRole("img")).toHaveAttribute("alt", "Kiosko Arepa Builder: Tipo de pedido");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page.getByRole("button", { name: "Ampliar pantalla", exact: true })).toBeFocused();
  expect(writes).toEqual([]);
});

test("CSS hardware preserves the display when WebGL is unavailable", async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, type, ...args) {
      if (String(type).includes("webgl")) return null;
      return Reflect.apply(original, this, [type, ...args]);
    } as typeof original;
  });
  await page.goto("/#kiosko");
  await page.locator("#kiosko").scrollIntoViewIfNeeded();
  await expect(page.locator(".kiosk-device")).toHaveAttribute("data-render", "fallback");
  await expect(page.locator(".kiosk-hardware-fallback")).toBeVisible();
  await page.getByRole("button", { name: "Toca para comenzar", exact: true }).click();
  await expect(page.locator(".kiosk-capture-image")).toHaveAttribute("alt", "Kiosko Arepa Builder: Idioma");
});

test("enlarged payment fits a touch phone with reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#kiosko");
  await page.getByRole("button", { name: "Paso 7: Pago", exact: true }).click();
  await page.getByRole("button", { name: "Ampliar pantalla", exact: true }).click();
  const modal = page.getByRole("dialog");
  const image = modal.getByRole("img");
  await expect.poll(() => image.evaluate((img) => (img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  const screen = await page.locator(".kiosk-dialog-screen").boundingBox();
  const capture = await image.boundingBox();
  expect(capture!.y + capture!.height).toBeLessThanOrEqual(screen!.y + screen!.height + 1);
  expect(await page.locator(".kiosk-dialog-inner").evaluate((element) => element.scrollHeight <= element.clientHeight)).toBe(true);
  await page.screenshot({ path: "test-results/kiosk-payment-phone.png" });
  await modal.getByRole("button", { name: "Simular pago", exact: true }).click();
  await expect(modal.getByRole("img")).toHaveAttribute("alt", "Kiosko Arepa Builder: Confirmación");
  await page.locator(".kiosk-dialog-screen").getByRole("button", { name: "Hacer otro pedido", exact: true }).click();
  await expect(modal.getByRole("img")).toHaveAttribute("alt", "Kiosko Arepa Builder: Bienvenida");
});
