const steps = [
  {
    number: "01",
    title: "Sube tu menú en minutos",
    description:
      "Accede al panel admin, crea tus categorías, sube fotos y fija precios. Tu carta digital queda activa al instante, editable en tiempo real desde cualquier dispositivo.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m3 10l-3 3m0 0l-3-3m3 3V10" />
      </svg>
    ),
    color: "#C05010",
    bg: "rgba(192,80,16,0.08)",
    border: "rgba(192,80,16,0.2)",
  },
  {
    number: "02",
    title: "Tus clientes piden y pagan",
    description:
      "Descargan la app, exploran tu menú, eligen, personalizan y pagan con tarjeta vía Stripe. El pedido entra directamente en tu panel de cocina. Sin que toques nada.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "#635BFF",
    bg: "rgba(99,91,255,0.08)",
    border: "rgba(99,91,255,0.2)",
  },
  {
    number: "03",
    title: "Gestiona, notifica, crece",
    description:
      "Tu equipo avanza el pedido con un clic desde el kanban de cocina. El cliente recibe notificaciones push en cada paso. Tú ves los ingresos del día en el dashboard.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
            Implementa en horas.{" "}
            <span className="text-gradient-warm">Vende desde el primer pedido.</span>
          </h2>
          <p className="text-lg text-[#9A6B20] max-w-xl mx-auto">
            Sin equipos de IT, sin infraestructura. Tú configuras el menú, tus
            clientes descargan la app y los pedidos entran solos.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

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
            Implementa Arepa Builder hoy — gratis
            <svg className="w-5 h-5 text-[#E8A820]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
