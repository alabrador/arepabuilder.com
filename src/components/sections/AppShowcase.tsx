import Image from "next/image";

const screens = [
  {
    title: "Inicio",
    desc: "Catálogo de categorías y productos con fotos premium.",
    img: "/images/arepa-inicio.png",
    rotate: "-6deg",
    translateY: "0px",
  },
  {
    title: "Tu pedido",
    desc: "Personaliza ingredientes con un diseño intuitivo.",
    img: "/images/arepa-pabellon.png",
    rotate: "0deg",
    translateY: "-24px",
  },
  {
    title: "Tracking",
    desc: "Sigue el estado en tiempo real con push notifications.",
    img: "/images/arepa-reina.png",
    rotate: "6deg",
    translateY: "0px",
  },
];

const perks = [
  "Splash screen con precarga de imágenes",
  "Modo offline con reintentos automáticos",
  "Carrito persistente entre sesiones",
  "Registro y login de clientes",
  "Historial completo de pedidos",
  "Código QR en cada recibo",
  "Soporte para iOS y Android",
  "Notificaciones push nativas",
];

export default function AppShowcase() {
  return (
    <section
      id="app"
      className="py-24 bg-[#1C0E00] overflow-hidden relative"
      aria-labelledby="app-heading"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#C05010]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — phones */}
          <div className="relative h-[480px] flex items-end justify-center">
            {screens.map((s, i) => (
              <div
                key={s.title}
                className="absolute w-[170px] h-[340px]"
                style={{
                  transform: `rotate(${s.rotate}) translateY(${s.translateY})`,
                  left: `${i * 32}%`,
                  zIndex: i === 1 ? 10 : 1,
                }}
              >
                {/* Mini phone */}
                <div
                  className="w-full h-full rounded-[28px] overflow-hidden border-2"
                  style={{
                    background: "#111",
                    borderColor: i === 1 ? "#E8A820" : "rgba(255,255,255,0.12)",
                    boxShadow:
                      i === 1
                        ? "0 24px 60px rgba(232,168,32,0.25), 0 0 0 1px rgba(232,168,32,0.1)"
                        : "0 16px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src={s.img}
                    alt={`Arepa Builder app — pantalla de ${s.title}`}
                    fill
                    className="object-cover"
                    sizes="170px"
                  />
                </div>
                {/* Label */}
                {i === 1 && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
                    <span className="text-[#E8A820] text-xs font-semibold">{s.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right — copy */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-4">
              App Móvil
            </span>
            <h2
              id="app-heading"
              className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-white mb-6 leading-tight"
            >
              Una experiencia de{" "}
              <span className="text-gradient-gold">restaurante premium</span>{" "}
              en tu bolsillo.
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Diseñada con React Native para iOS y Android. Rápida, fluida y con
              animaciones nativas que hacen que pedir sea un placer, no una tarea.
            </p>

            {/* Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-white/60">
                  <span className="w-5 h-5 rounded-full bg-[#E8A820]/15 border border-[#E8A820]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#E8A820]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-4">
              <a
                href="#download"
                className="flex items-center gap-2 bg-[#E8A820] hover:bg-[#F5C842] text-[#2E1600] font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-gold"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Descargar en iOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
