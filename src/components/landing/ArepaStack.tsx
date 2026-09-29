import type { LayerKind } from "@/lib/content";
import { LAYERS } from "@/lib/content";
import SectionTitle from "./SectionTitle";

const LAYER_STYLES: Record<LayerKind, { className: string; background: string }> = {
  top: {
    className:
      "w-[92.3%] h-[94px] lg:h-[150px] [border-radius:50%_50%_7.5%_7.5%/100%_100%_24%_24%]",
    background:
      "repeating-linear-gradient(-32deg, var(--color-masa) 0 44px, var(--color-masa-dark) 44px 58px)",
  },
  aguacate: {
    className: "w-[96%] h-9 lg:h-[58px] rounded-full",
    background: "var(--color-aguacate)",
  },
  carne: {
    className: "w-[98.5%] h-10 lg:h-16 rounded-full",
    background:
      "repeating-linear-gradient(78deg, var(--color-carne) 0 6px, var(--color-carne-dark) 6px 10px)",
  },
  queso: {
    className: "w-[94%] h-8 lg:h-[50px] rounded-[14px_30px_14px_30px]",
    background: "var(--color-queso)",
  },
  caraotas: {
    className: "w-[96%] h-9 lg:h-14 rounded-full",
    background:
      "radial-gradient(circle, var(--color-caraota-light) 0 6px, transparent 7px) 0 0 / 24px 20px, var(--color-caraota)",
  },
  bottom: {
    className:
      "w-[92.3%] h-[70px] lg:h-[112px] [border-radius:7.5%_7.5%_50%_50%/32%_32%_100%_100%]",
    background: "var(--color-masa)",
  },
};

/** "Una app se arma como una arepa": arepa despiezada con una etiqueta por capa. */
export default function ArepaStack() {
  return (
    <section id="como" className="flex flex-col items-center gap-14 px-4 pb-24 pt-16 sm:px-5 md:gap-20 md:pb-[140px] md:pt-[90px]">
      <div className="flex flex-col items-center text-center">
        <SectionTitle title="Una app se arma" brush="como una arepa" align="center" />
        <p className="mt-[22px] max-w-[560px] text-lg leading-[1.55] text-muted md:text-xl">
          Capa a capa, todo lo que tu restaurante necesita para vender directo. Tú pones la receta; nosotros, el resto.
        </p>
      </div>

      <ol className="arepa-stack flex w-full max-w-[300px] flex-col gap-9 md:max-w-none md:w-auto md:gap-[var(--gap)]">
        {LAYERS.map((layer, i) => {
          const leftOnDesktop = i % 2 === 0;
          const style = LAYER_STYLES[layer.kind];
          return (
            <li
              key={layer.kind}
              className="flex flex-col items-center gap-3 md:grid md:grid-cols-[340px_60px_minmax(0,300px)] md:items-center md:gap-0 lg:grid-cols-[520px_70px_370px] xl:grid-cols-[370px_70px_520px_70px_370px]"
            >
              {/* Capa (decorativa) */}
              <div
                aria-hidden="true"
                className="flex w-full justify-center md:col-start-1 md:row-start-1 xl:col-start-3"
              >
                <div
                  className={`box-border border-[5px] border-navy ${style.className}`}
                  style={{ background: style.background }}
                />
              </div>

              {/* Conector */}
              <div
                aria-hidden="true"
                className={`hidden items-center px-1.5 md:col-start-2 md:row-start-1 md:flex ${
                  leftOnDesktop ? "xl:col-start-2 xl:flex-row-reverse" : "xl:col-start-4"
                }`}
              >
                <span className="size-2.5 shrink-0 rounded-full bg-navy" />
                <span className="grow border-t-2 border-dashed border-navy" />
              </div>

              {/* Etiqueta */}
              <div
                className={`flex flex-col items-center gap-1.5 text-center md:col-start-3 md:row-start-1 md:items-start md:text-left ${
                  leftOnDesktop ? "xl:col-start-1 xl:items-end xl:text-right" : "xl:col-start-5"
                }`}
              >
                <span className="font-script text-[30px] leading-none text-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[30px] font-extrabold uppercase leading-none text-navy md:text-4xl">
                  {layer.title}
                </h3>
                <p className="max-w-[330px] text-[17px] leading-normal text-muted">{layer.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
