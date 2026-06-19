const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    number: "01",
    title: "Menú Digital Siempre Actualizado",
    description: "Crea categorías, sube fotos y precios desde el panel admin. Cualquier cambio se refleja al instante en la app de tus clientes. Sin reimprimir cartas.",
    accent: "#C05010",
    glow: "rgba(192,80,16,0.35)",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    number: "02",
    title: "Notificaciones Push Automáticas",
    description: "Tu cocina avanza el pedido con un clic y el cliente recibe una push al instante. Recibido, preparando, listo. Cero llamadas. Cero esperas.",
    accent: "#E8A820",
    glow: "rgba(232,168,32,0.35)",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    number: "03",
    title: "Cobros con Stripe, Sin Intermediarios",
    description: "Tus clientes pagan con tarjeta directamente en la app. Los fondos van a tu cuenta. Sin comisiones adicionales. Recibo digital con QR incluido.",
    accent: "#635BFF",
    glow: "rgba(99,91,255,0.35)",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    number: "04",
    title: "Tres Modalidades de Entrega",
    description: "Mesa, para llevar o domicilio con dirección. Cada pedido llega etiquetado a cocina con modalidad, datos del cliente y notas especiales.",
    accent: "#4DB374",
    glow: "rgba(77,179,116,0.35)",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    number: "05",
    title: "Cocina Kanban en Tiempo Real",
    description: "Vista exclusiva para tu equipo de cocina. Un clic avanza el estado y notifica al cliente. Alerta visual y sonora al entrar un nuevo pedido.",
    accent: "#C05010",
    glow: "rgba(192,80,16,0.35)",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    number: "06",
    title: "Dashboard de Ventas y Analytics",
    description: "Ingresos del día, ticket medio, pedidos activos y gráfico histórico configurable. Toma decisiones con datos reales, no con suposiciones.",
    accent: "#E8A820",
    glow: "rgba(232,168,32,0.35)",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 md:py-28 bg-[#FEFAF3] relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C05010]/4 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#E8A820]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C05010] mb-4">
            Características
          </span>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#2E1600] mb-4 sm:mb-5"
          >
            Todo lo que necesita tu restaurante,{" "}
            <span className="text-gradient-warm">en una plataforma.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9A6B20] max-w-2xl mx-auto">
            App premium para tus clientes y panel de gestión completo para tu equipo.
            Todo conectado, todo en tiempo real, cero comisiones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <article
              key={f.number}
              className="group relative rounded-3xl p-5 sm:p-7 border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(46,22,0,0.1)]"
              style={{ borderColor: `${f.accent}28` }}
            >
              {/* Glow orb — appears on hover */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: `${f.accent}22` }}
              />

              {/* Number badge */}
              <div
                className="absolute top-6 right-6 text-[11px] font-black tracking-widest tabular-nums transition-colors duration-300"
                style={{ color: `${f.accent}40` }}
              >
                {f.number}
              </div>

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${f.accent}12`,
                  color: f.accent,
                  boxShadow: `0 0 0 1px ${f.accent}25`,
                }}
              >
                {f.icon}
              </div>

              {/* Text */}
              <h3 className="text-base font-bold text-[#2E1600] mb-3 leading-snug pr-8">
                {f.title}
              </h3>
              <p className="text-sm text-[#9A6B20] leading-relaxed">
                {f.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: f.accent }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
