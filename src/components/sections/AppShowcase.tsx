import Image from "next/image";
import AppFlow from "./AppFlow";

/* ── Phone wrapper ──────────────────────────────────────────────────── */
function Phone({
  src,
  alt,
  width = 220,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  priority?: boolean;
}) {
  const height = Math.round(width * 2.16); // iPhone 16 Pro ratio
  return (
    <div
      className={`relative flex-shrink-0 overflow-hidden ring-[3px] ring-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.6)] ${className}`}
      style={{ width, height, borderRadius: Math.round(width * 0.14) }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes={`${width}px`}
        priority={priority}
      />
    </div>
  );
}

/* ── Feature pill ───────────────────────────────────────────────────── */
function Pill({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-white/65">
      <span className="w-6 h-6 rounded-lg bg-[#E8A820]/15 border border-[#E8A820]/25 flex items-center justify-center flex-shrink-0 text-sm">
        {icon}
      </span>
      {text}
    </li>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export default function AppShowcase() {
  return (
    <section
      id="app"
      className="bg-[#1C0E00] overflow-hidden"
      aria-labelledby="app-heading"
    >
      {/* ── Part 1: Hero trio ─────────────────────────────────────── */}
      <div className="relative py-16 md:py-24">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] rounded-full bg-[#C05010]/12 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Copy — left */}
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-5">
                App Móvil · La experiencia de tus clientes
              </span>
              <h2
                id="app-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-black text-white leading-tight mb-5 sm:mb-6"
              >
                La app que tus clientes{" "}
                <span className="text-gradient-gold">van a adorar.</span>
              </h2>
              <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-8 sm:mb-10">
                Construida con React Native para iOS y Android. Una experiencia
                premium de principio a fin: exploran tu menú, personalizan su
                pedido, pagan en segundos y reciben notificaciones en cada paso.
              </p>
              <ul className="flex flex-col gap-2.5 sm:gap-3 mb-8 sm:mb-10">
                <Pill icon="🏠" text="Catálogo visual con categorías y destacados" />
                <Pill icon="🛒" text="Personalización de productos e ingredientes" />
                <Pill icon="💳" text="Pago con tarjeta integrado vía Stripe" />
                <Pill icon="📋" text="Ticket QR digital instantáneo al pagar" />
                <Pill icon="🔔" text="Push notifications en cada cambio de estado" />
                <Pill icon="👤" text="Historial de pedidos y cuenta personal" />
              </ul>
              <a
                href="#download"
                className="inline-flex items-center gap-3 bg-[#E8A820] hover:bg-[#F5C842] text-[#2E1600] font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-gold"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Probar la demo
              </a>
            </div>

            {/* Phones — responsive */}
            <div className="flex justify-center items-center relative mt-8 lg:mt-0">

              {/* Mobile: single centered phone */}
              <div className="flex lg:hidden justify-center">
                <div className="relative">
                  <Phone
                    src="/images/app/app1.png"
                    alt="Pantalla de inicio de Arepa Builder"
                    width={210}
                    priority
                    className="ring-[#E8A820]/40 shadow-gold"
                  />
                  {/* Mini badge */}
                  <div className="absolute -top-3 -right-3 bg-[#E8A820] text-[#2E1600] text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg">
                    App Demo
                  </div>
                </div>
              </div>

              {/* Desktop: three phones */}
              <div className="hidden lg:flex justify-center items-end gap-4 h-[540px]">
                {/* Left phone — catalogue */}
                <Phone
                  src="/images/app/app2.png"
                  alt="Catálogo de arepas en Arepa Builder"
                  width={180}
                  className="mb-12 opacity-70"
                />
                {/* Center phone — home (featured) */}
                <Phone
                  src="/images/app/app1.png"
                  alt="Pantalla de inicio de Arepa Builder"
                  width={230}
                  priority
                  className="ring-[#E8A820]/40 shadow-gold"
                />
                {/* Right phone — cart */}
                <Phone
                  src="/images/app/app3.png"
                  alt="Carrito de Arepa Builder"
                  width={180}
                  className="mb-12 opacity-70"
                />
              </div>

            </div>

          </div>
        </div>
      </div>

      <AppFlow />
    </section>
  );
}
