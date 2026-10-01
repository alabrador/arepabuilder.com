import Image from "next/image";
import Button from "@/components/brand/Button";
import { Check } from "@/components/brand/Icons";
import { ADMIN_FEATURES, DEMO_HREF } from "@/lib/content";
import SectionTitle from "./SectionTitle";

export default function AdminPanel() {
  return (
    <section id="gestion" className="bg-bg px-4 py-20 sm:px-8 md:py-[120px] xl:px-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <p className="mb-6 rounded-full border-2 border-navy px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-navy">
            Tu panel de gestión
          </p>
          <SectionTitle title="Tú pones el sabor." brush="Tú tienes el control." align="center" />
          <p className="mt-7 max-w-[640px] text-lg leading-relaxed text-muted md:text-xl">
            Del primer pedido al cierre del día. Pedidos, cocina y ventas en un mismo lugar,
            para dedicar más tiempo a tus clientes y a lo que mejor sabes hacer.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {ADMIN_FEATURES.map((feature, index) => (
            <article key={feature.title} className={`grid min-w-0 items-center gap-8 lg:gap-14 ${index === 1 ? "lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]" : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)]"}`}>
              <div className={index === 1 ? "lg:col-start-2 lg:row-start-1" : ""}>
                <span className="font-script text-4xl text-red">0{index + 1}</span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[2px] text-muted">{feature.label}</p>
                <h3 className="mt-3 font-display text-[40px] font-extrabold uppercase leading-none text-navy md:text-[52px]">
                  {feature.title}
                </h3>
                <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-muted">{feature.description}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-base font-semibold text-navy">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold"><Check size={14} /></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <figure className={`min-w-0 ${index === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="overflow-hidden rounded-2xl border-[3px] border-navy bg-white shadow-[6px_8px_0_var(--color-gold)]">
                  <div aria-hidden="true" className="flex items-center gap-1.5 border-b-[3px] border-navy bg-navy px-4 py-3">
                    <span className="size-2 rounded-full bg-red" />
                    <span className="size-2 rounded-full bg-gold" />
                    <span className="size-2 rounded-full bg-white/60" />
                    <span className="ml-3 text-xs font-semibold tracking-wide text-white">Arepa Builder · {feature.label}</span>
                  </div>
                  <Image src={feature.image} alt={feature.alt} width={2880} height={feature.height} sizes="(min-width: 1440px) 800px, (min-width: 1024px) 60vw, 100vw" className="block h-auto w-full" />
                </div>
                <figcaption className="mt-4 text-center text-sm text-muted">Captura real del panel</figcaption>
              </figure>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border-[3px] border-navy bg-gold p-7 text-center md:mt-24 lg:flex-row md:p-10 lg:text-left">
          <div>
            <p className="font-display text-3xl font-extrabold uppercase text-navy md:text-4xl">Tu próxima hora punta, bajo control.</p>
            <p className="mt-2 text-lg text-navy">Descubre cómo encaja el sistema en el día a día de tu local.</p>
          </div>
          <Button href={DEMO_HREF} arrow className="shrink-0">Quiero ver el panel</Button>
        </div>
      </div>
    </section>
  );
}
