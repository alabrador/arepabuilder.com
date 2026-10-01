import type { CSSProperties } from "react";
import type { LayerKind } from "@/lib/content";
import { LAYERS } from "@/lib/content";
import SectionTitle from "./SectionTitle";

// Cortes finos de masa de maíz: caras planas, cantos suaves y tostado de budare.
const MASA_BACKGROUND = [
  "radial-gradient(ellipse at 16% 42%, #bd813c80 0 2%, transparent 4%)",
  "radial-gradient(ellipse at 38% 65%, #b8753380 0 3%, transparent 6%)",
  "radial-gradient(ellipse at 63% 32%, #c38a4380 0 4%, transparent 7%)",
  "radial-gradient(ellipse at 84% 60%, #b8753370 0 2%, transparent 5%)",
  "radial-gradient(circle, #bd813c45 0 1px, transparent 1.5px) 0 0 / 13px 11px",
  "linear-gradient(180deg, #fff0c9 0%, #f2d08a 65%, #dda85c 100%)",
].join(", ");

const LAYER_STYLES: Record<LayerKind, { className: string; background: string }> = {
  top: {
    className:
      "w-[92.3%] h-[42px] rounded-[16px]",
    background: MASA_BACKGROUND,
  },
  aguacate: {
    className: "w-[96%] h-[18px] rounded-full",
    background: "var(--color-aguacate)",
  },
  carne: {
    className: "w-[98.5%] h-[24px] rounded-full",
    background:
      "repeating-linear-gradient(78deg, var(--color-carne) 0 6px, var(--color-carne-dark) 6px 10px)",
  },
  queso: {
    className: "w-[94%] h-[12px] rounded-[14px_30px_14px_30px]",
    background: "var(--color-queso)",
  },
  caraotas: {
    className: "w-[96%] h-[20px] rounded-full",
    background:
      "radial-gradient(circle, var(--color-caraota-light) 0 6px, transparent 7px) 0 0 / 24px 20px, var(--color-caraota)",
  },
  bottom: {
    className:
      "w-[92.3%] h-[42px] rounded-[16px]",
    background: MASA_BACKGROUND,
  },
};

/** Una arepa completa acompaña las seis piezas del sistema. */
export default function ArepaStack() {
  return (
    <section id="como" className="px-4 py-12 sm:px-8 md:py-16 xl:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <SectionTitle title="Una app se arma" brush="como una arepa" align="center" />
          <p className="mt-5 max-w-[620px] text-base leading-relaxed text-muted md:text-lg">
            Capa a capa, todo lo que tu restaurante necesita para vender directo. Tú pones la receta; nosotros, el resto.
          </p>
        </div>

        <div className="mt-8 grid items-center gap-6 lg:mt-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-12">
          <div className="flex flex-col items-center gap-3">
            <div aria-hidden="true" className="arepa-scene relative flex h-[240px] w-full max-w-[400px] items-center justify-center sm:h-[260px]">
              <div className="absolute inset-x-5 inset-y-2 rounded-[50%] bg-gold/20" />
              <div className="absolute bottom-7 h-5 w-[75%] rounded-[50%] bg-navy/15 blur-md" />
              <div className="relative flex w-[88%] flex-col items-center">
                {LAYERS.map((layer, i) => (
                  <div
                    key={layer.kind}
                    className={`arepa-ingredient relative -mt-[3px] border-[3px] border-navy first:mt-0 ${LAYER_STYLES[layer.kind].className}`}
                    style={{ background: LAYER_STYLES[layer.kind].background, zIndex: LAYERS.length - i, "--layer-offset": `${(i - 2.5) * 14}px` } as CSSProperties}
                  />
                ))}
              </div>
            </div>
            <p className="font-script text-2xl text-red sm:text-3xl">Todo junto sabe mejor.</p>
          </div>

          <ol className="grid min-w-0 grid-cols-1 gap-x-6 sm:grid-cols-2">
            {LAYERS.map((layer, i) => (
              <li key={layer.kind} className="flex min-w-0 items-start gap-3 border-b border-navy/10 py-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-lg font-bold text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-extrabold uppercase leading-none text-navy">{layer.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{layer.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
