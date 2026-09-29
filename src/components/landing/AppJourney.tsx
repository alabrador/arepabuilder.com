import Phone from "@/components/brand/Phone";
import { STEPS } from "@/lib/content";
import SectionTitle from "./SectionTitle";

/** "Tus clientes piden así de fácil": recorrido en 4 pantallas reales. */
export default function AppJourney() {
  return (
    <section id="app" className="on-navy relative overflow-hidden bg-navy pb-24 pt-20 md:pb-[140px] md:pt-[120px]">
      <div
        aria-hidden="true"
        className="absolute -left-[120px] -top-[140px] size-[420px] rounded-full border-[3px] border-dashed border-blue"
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-12 md:gap-[70px]">
        <div className="flex flex-col gap-6 px-4 sm:px-8 xl:flex-row xl:items-end xl:justify-between xl:gap-16 xl:px-16">
          <SectionTitle title="Tus clientes piden" brush="así de fácil" brushColor="gold" underline="red" tone="white" />
          <p className="max-w-[400px] text-lg leading-[1.55] text-line md:text-xl xl:mb-[18px]">
            Pantallas reales de la app: de la carta al pedido listo para recoger, en cuatro toques.
          </p>
        </div>

        <div className="relative">
          {/* Camino que une los pasos (solo escritorio) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1312 240"
            fill="none"
            className="absolute left-16 right-16 top-[220px] hidden h-auto w-[calc(100%-128px)] xl:block"
          >
            <path
              d="M 20 140 C 180 20, 300 20, 460 150 S 780 260, 960 120 S 1200 40, 1300 110"
              stroke="var(--color-gold)"
              strokeWidth={5}
              strokeLinecap="round"
              strokeDasharray="2 16"
            />
          </svg>

          <ol className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-4 sm:px-8 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-16 md:overflow-visible md:pb-0 xl:grid-cols-4 xl:px-16">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className={`relative flex w-[248px] shrink-0 snap-center flex-col items-center gap-[30px] md:w-auto ${
                  i % 2 === 1 ? "xl:mt-[110px]" : ""
                }`}
              >
                <Phone
                  src={step.image}
                  alt={step.alt}
                  sizes="272px"
                  className="relative w-[248px] md:w-[272px] [filter:drop-shadow(0_30px_40px_rgba(0,0,0,0.45))]"
                />
                <div className="flex w-full items-start gap-3.5 md:w-[272px]">
                  <span className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-gold font-display text-[28px] font-black text-navy">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-[26px] font-extrabold uppercase leading-none text-white md:text-[30px]">
                      {step.title}
                    </h3>
                    <p className="text-base leading-normal text-line">{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
