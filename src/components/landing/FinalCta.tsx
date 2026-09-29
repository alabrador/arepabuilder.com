import BrushWord from "@/components/brand/BrushWord";
import Button from "@/components/brand/Button";
import SunRays from "@/components/brand/SunRays";
import { DEMO_HREF, PRICE } from "@/lib/content";

/** CTA final con el sol-arepa que amanece desde el borde inferior. */
export default function FinalCta() {
  return (
    <section id="demo" className="relative h-[760px] overflow-hidden bg-gold sm:h-[860px] lg:h-[980px]">
      {/* Sol que amanece: centro en el borde inferior */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 origin-bottom scale-[0.6] sm:scale-80 lg:scale-100">
        <SunRays radius={310} rayWidth={50} rayHeight={152} disc="grilled" discSize={420} />
      </div>

      <div className="relative flex flex-col items-center px-4 pt-20 text-center sm:px-8 lg:pt-[110px]">
        <h2 className="font-display text-[clamp(52px,8.6vw,112px)] font-black uppercase leading-[0.88] text-navy">
          ¿Tu arepería quiere
          <br />
          su propia app?
        </h2>
        <BrushWord underline="navy" className="mt-1.5 text-[clamp(60px,7.4vw,92px)]">
          ¡Hablemos!
        </BrushWord>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={DEMO_HREF} size="lg" arrow>
            Pide tu demo gratis
          </Button>
          <p className="flex h-16 items-center whitespace-nowrap rounded-[18px] border-[3px] border-navy px-[26px] text-[19px] font-semibold text-navy sm:h-[70px]">
            Desde&nbsp;<strong className="font-display text-[28px] font-extrabold">{PRICE}</strong>&nbsp;/ mes
          </p>
        </div>
      </div>
    </section>
  );
}
