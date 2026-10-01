import Image from "next/image";
import { LAYERS } from "@/lib/content";
import SectionTitle from "./SectionTitle";

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
            <div className="arepa-scene w-full max-w-[400px]">
              <Image
                src="/images/arepa-pabellon-ilustrada.png"
                alt="Ilustración de una arepa venezolana de pabellón con carne mechada, caraotas, plátano y queso blanco"
                width={1448}
                height={1086}
                sizes="(max-width: 432px) calc(100vw - 32px), 400px"
                className="arepa-illustration block h-auto w-full"
              />
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
