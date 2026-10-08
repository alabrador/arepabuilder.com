"use client";

import { useEffect, useRef } from "react";

type Props = { children: React.ReactNode };

/** Keep the HTML display aligned with the orthographic model for crisp, accessible captures. */
export default function KioskDevice({ children }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const display = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = host.current;
    const screen = display.current;
    if (!container || !screen) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;

    const visibility = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return;
      visibility.disconnect();
      const modules = await Promise.all([
        import("three"),
        import("three/addons/geometries/RoundedBoxGeometry.js"),
      ]).catch(() => null);
      if (disposed || !modules) return;
      const [THREE, { RoundedBoxGeometry }] = modules;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        container.dataset.render = "fallback";
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.setAttribute("aria-hidden", "true");
      container.prepend(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-2, 2, 3.4, -3.4, 0.1, 30);
      camera.position.set(0, 3.8, 12);
      camera.lookAt(0, 3.05, 0);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x627084, 2.6));
      const key = new THREE.DirectionalLight(0xffffff, 4);
      key.position.set(-3, 7, 6);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xe1e9f3, 2);
      rim.position.set(4, 4, 2);
      scene.add(rim);
      const metal = new THREE.MeshStandardMaterial({ color: 0xaab2bd, metalness: 0.78, roughness: 0.3 });
      const black = new THREE.MeshStandardMaterial({ color: 0x161b23, metalness: 0.35, roughness: 0.3 });
      const blue = new THREE.MeshStandardMaterial({ color: 0x063477, metalness: 0.2, roughness: 0.32 });
      const yellow = new THREE.MeshStandardMaterial({ color: 0xffc400, metalness: 0.18, roughness: 0.4 });
      const dark = new THREE.MeshStandardMaterial({ color: 0x03070c, roughness: 0.65 });
      const box = (w: number, h: number, d: number, x: number, y: number, z: number, material: InstanceType<typeof THREE.MeshStandardMaterial>, radius = 0.035) => {
        const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, radius), material);
        mesh.position.set(x, y, z);
        scene.add(mesh);
        return mesh;
      };

      // Two steel uprights, a weighted floor base, and a commercial portrait enclosure.
      box(2.55, 0.13, 1.3, 0, 0.065, -0.08, metal, 0.06);
      box(2.35, 0.045, 1.1, 0, 0.15, -0.08, black, 0.02);
      for (const x of [-0.61, 0.61]) {
        box(0.16, 1.53, 0.27, x, 0.89, -0.08, metal);
        box(0.025, 1.5, 0.02, x - 0.045, 0.9, 0.062, black, 0.006);
      }
      box(1.96, 4.02, 0.3, 0, 4.25, 0, metal, 0.095);
      box(1.87, 3.94, 0.1, 0, 4.25, 0.18, black, 0.07);
      box(1.69, 3.64, 0.025, 0, 4.25, 0.244, dark, 0.018);
      box(1.91, 0.73, 0.32, 0, 1.885, 0, blue, 0.045);
      box(0.92, 0.025, 0.016, 0, 2.19, 0.175, yellow, 0.009);
      box(0.55, 0.048, 0.02, -0.4, 1.79, 0.175, dark, 0.01);
      box(0.59, 0.095, 0.045, -0.4, 1.79, 0.16, metal, 0.01);
      box(0.55, 0.036, 0.02, -0.4, 1.795, 0.189, dark, 0.009);
      box(0.47, 0.83, 0.16, 0.75, 1.89, 0.31, black, 0.055);
      box(0.35, 0.31, 0.015, 0.75, 2.055, 0.399, blue, 0.015);
      box(0.23, 0.025, 0.015, 0.75, 2.065, 0.411, yellow, 0.004);
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
          box(0.078, 0.052, 0.02, 0.645 + col * 0.105, 1.84 - row * 0.072, 0.405, row === 3 && col === 2 ? yellow : metal, 0.012);
        }
      }
      const logoTexture = new THREE.TextureLoader().load("/images/logo-horizontal.png", () => {
        if (!disposed) renderer.render(scene, camera);
      });
      logoTexture.colorSpace = THREE.SRGBColorSpace;
      const logo = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.245), new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true }));
      logo.position.set(-0.2, 1.965, 0.169);
      scene.add(logo);
      const status = new THREE.Mesh(new THREE.CircleGeometry(0.016, 12), new THREE.MeshBasicMaterial({ color: 0x30d580 }));
      status.position.set(0.76, 2.345, 0.239);
      scene.add(status);

      const resize = () => {
        const { width, height } = container.getBoundingClientRect();
        if (!width || !height) return;
        const worldHeight = Math.max(6.8, 3.1 * height / width);
        const worldWidth = worldHeight * width / height;
        camera.left = -worldWidth / 2;
        camera.right = worldWidth / 2;
        camera.top = worldHeight / 2;
        camera.bottom = -worldHeight / 2;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        const topLeft = new THREE.Vector3(-1.657 / 2, 6.05, 0.26).project(camera);
        const bottomRight = new THREE.Vector3(1.657 / 2, 2.45, 0.26).project(camera);
        Object.assign(screen.style, {
          left: `${(topLeft.x + 1) * 50}%`,
          top: `${(1 - topLeft.y) * 50}%`,
          width: `${(bottomRight.x - topLeft.x) * 50}%`,
          height: `${(topLeft.y - bottomRight.y) * 50}%`,
        });
        container.dataset.render = "webgl";
        renderer.render(scene, camera);
      };
      const observer = new ResizeObserver(resize);
      observer.observe(container);
      resize();
      const onContextLost = (event: Event) => {
        event.preventDefault();
        container.dataset.render = "fallback";
      };
      renderer.domElement.addEventListener("webglcontextlost", onContextLost);
      const onContextRestored = () => resize();
      renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);
      cleanup = () => {
        observer.disconnect();
        renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
        renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => material.dispose());
          }
        });
        logoTexture.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }, { rootMargin: "250px" });
    visibility.observe(container);
    return () => { disposed = true; visibility.disconnect(); cleanup?.(); };
  }, []);

  return (
    <div ref={host} className="kiosk-device" data-render="fallback">
      <div aria-hidden="true" className="kiosk-device-shadow" />
      <div aria-hidden="true" className="kiosk-hardware-fallback"><span /><span /></div>
      <div ref={display} className="kiosk-display">{children}</div>
    </div>
  );
}
