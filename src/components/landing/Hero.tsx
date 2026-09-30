import BrushWord from "@/components/brand/BrushWord";
import Button from "@/components/brand/Button";
import { Check } from "@/components/brand/Icons";
import Phone from "@/components/brand/Phone";
import StoreBadges from "@/components/brand/StoreBadges";
import Sticker from "@/components/brand/Sticker";
import SunRays from "@/components/brand/SunRays";
import { IMAGES } from "@/lib/content";
import SiteNav from "./SiteNav";

/**
 * Composición del hero dibujada en un lienzo fijo de 757×850 (coordenadas del
 * diseño a 1440px). En escritorio va a la derecha del texto; en anchos menores
 * se escala y se coloca debajo.
 */
function HeroArt() {
  return (
    <div className="relative h-[850px] w-[757px]">
      {/* Mesa navy */}
      <div aria-hidden="true" className="absolute left-[-203px] top-[630px] h-[720px] w-[1400px] rounded-[50%] bg-navy" />

      <SunRays radius={305} disc="cream" discSize={470} className="left-[377px] top-[380px]" />

      <Phone
        realistic
        src={IMAGES.carta}
        alt="Pantalla de la carta por categorías"
        sizes="250px"
        className="absolute left-[57px] top-[160px] w-[250px] -rotate-9 [filter:drop-shadow(0_30px_40px_rgba(3,38,91,0.45))]"
      />
      <Phone
        realistic
        src={IMAGES.inicio}
        alt="Pantalla de inicio de la app con la arepa del día"
        sizes="330px"
        preload
        className="absolute left-[212px] top-[50px] w-[330px] [filter:drop-shadow(0_40px_50px_rgba(3,38,91,0.5))]"
      />

      {/* Tarjeta flotante */}
      <div className="absolute left-[499px] top-[160px] flex w-[226px] rotate-5 items-center gap-3 rounded-[18px] border-[3px] border-navy bg-white px-[18px] py-4 shadow-[6px_8px_0_var(--color-navy)]">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-navy bg-gold text-navy">
          <Check size={18} />
        </span>
        <span className="flex flex-col leading-[1.15]">
          <span className="font-display text-xl font-extrabold uppercase text-navy">Pedido listo</span>
          <span className="text-sm text-muted">Pasa a recogerlo</span>
        </span>
      </div>

      <Sticker big="0%" small="COMISIÓN" className="absolute left-[549px] top-[510px]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gold">
      <SiteNav />

      <div className="relative mx-auto mt-8 max-w-[1440px] md:mt-12 xl:min-h-[850px]">
        {/* Texto */}
        <div className="relative z-10 flex flex-col items-start px-4 pt-6 sm:px-8 md:pt-10 xl:w-[724px] xl:pl-16 xl:pr-0 xl:pt-14">
          <p className="flex min-h-9 items-center rounded-full bg-navy px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-gold sm:text-sm">
            App de pedidos · Android e iOS
          </p>

          <h1 className="mt-[26px] font-display text-[clamp(64px,11vw,114px)] font-black uppercase leading-[0.86] tracking-[-1px] text-navy">
            Tu arepería.
            <br />
            Tu app.
            <br />
            <BrushWord underline="navy" rotate={-5} className="ml-1.5 mt-1 text-[clamp(50px,8.6vw,88px)] tracking-normal">
              sin comisiones
            </BrushWord>
          </h1>

          <p className="mt-[26px] max-w-[540px] text-lg font-medium leading-normal text-navy sm:text-[21px]">
            Arepa Builder le da a tu restaurante su propia app de pedidos, con tu marca. Tus clientes piden directo y
            cada euro se queda en tu caja.
          </p>

          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <Button href="#demo" arrow>
              Quiero mi app
            </Button>
            <Button href="#app" variant="outline">
              Ver la app
            </Button>
          </div>

          <StoreBadges className="mt-[30px]" />
        </div>

        {/* Ilustración: debajo del texto (<1280) o a la derecha (≥1280) */}
        <div className="relative mt-10 h-[383px] min-[420px]:h-[442px] sm:h-[595px] md:h-[680px] lg:h-[765px] xl:absolute xl:right-0 xl:top-0 xl:mt-0 xl:h-[850px] xl:w-[757px]">
          <div className="absolute left-1/2 top-0 origin-top -translate-x-1/2 scale-[0.45] min-[420px]:scale-[0.52] sm:scale-70 md:scale-80 lg:scale-90 xl:left-auto xl:right-0 xl:translate-x-0 xl:origin-top-right xl:scale-[0.85] min-[1440px]:scale-100">
            <HeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}
