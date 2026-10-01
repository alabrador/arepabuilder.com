import BrushWord from "@/components/brand/BrushWord";
import Button from "@/components/brand/Button";
import { DEMO_HREF, PRICE } from "@/lib/content";

/** Invitación final a solicitar una demo. */
export default function FinalCta() {
  return (
    <section id="demo" className="bg-gold">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-4 py-14 text-center sm:px-8 lg:py-20">
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
