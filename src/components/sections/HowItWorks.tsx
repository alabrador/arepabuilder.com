const steps = [
  {
    number: "01",
    title: "Personaliza tu arepa",
    description:
      "Elige entre arepas, empanadas, bebidas y extras. Selecciona tus ingredientes favoritos, indica la modalidad de entrega y añade notas especiales.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: "#C05010",
    bg: "rgba(192,80,16,0.08)",
    border: "rgba(192,80,16,0.2)",
  },
  {
    number: "02",
    title: "Paga con tarjeta",
    description:
      "Pago seguro a través de Stripe con tarjeta de débito o crédito. Procesado con cifrado bancario. Recibe tu recibo digital con código QR al instante.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    color: "#635BFF",
    bg: "rgba(99,91,255,0.08)",
    border: "rgba(99,91,255,0.2)",
  },
  {
    number: "03",
    title: "Sigue tu pedido",
    description:
      "Recibe notificaciones push en cada cambio de estado: recibido, en preparación, listo para recoger o en camino. Siempre sabes dónde está tu comida.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    color: "#4DB374",
    bg: "rgba(77,179,116,0.08)",
    border: "rgba(77,179,116,0.2)",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C05010] mb-4">
            Cómo funciona
          </span>
          <h2
            id="how-heading"
            className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#2E1600] mb-5"
          >
            Tres pasos.{" "}
            <span className="text-gradient-warm">Cero complicaciones.</span>
          </h2>
          <p className="text-lg text-[#9A6B20] max-w-xl mx-auto">
            Pedir tu arepa venezolana nunca fue tan fácil ni tan rápido.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-16 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px"
            style={{ background: "linear-gradient(90deg, rgba(192,80,16,0.3), rgba(99,91,255,0.3), rgba(77,179,116,0.3))" }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((s, i) => (
              <article key={s.number} className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative mb-8">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-0 relative z-10"
                    style={{
                      backgroundColor: s.bg,
                      border: `2px solid ${s.border}`,
                      color: s.color,
                    }}
                  >
                    {s.icon}
                  </div>
                  {/* Number badge */}
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-black flex items-center justify-center z-20"
                    style={{ backgroundColor: s.color }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-[#2E1600] mb-3 font-[var(--font-playfair)]"
                >
                  {s.title}
                </h3>
                <p className="text-[#9A6B20] text-sm leading-relaxed max-w-xs">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#download"
            className="inline-flex items-center gap-3 bg-[#2E1600] hover:bg-[#1C0E00] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(46,22,0,0.3)]"
          >
            Empieza ahora — gratis
            <svg className="w-5 h-5 text-[#E8A820]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
