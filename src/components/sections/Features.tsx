const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Menú Digital Siempre Actualizado",
    description:
      "Crea categorías, sube fotos, fija precios e ingredientes desde el panel admin. Cualquier cambio se refleja al instante en la app de tus clientes. Sin reimprimir cartas, sin llamadas.",
    accent: "#C05010",
    bg: "rgba(192,80,16,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Notificaciones Push Automáticas",
    description:
      "Tu cocina avanza el estado del pedido con un clic y el cliente recibe una push al instante: recibido, preparando, listo. Cero llamadas. Cero esperas en mostrador.",
    accent: "#E8A820",
    bg: "rgba(232,168,32,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Cobros con Stripe, Sin Intermediarios",
    description:
      "Tus clientes pagan con tarjeta directamente en la app. Los fondos van a tu cuenta sin pasar por nosotros. Sin comisiones adicionales. Recibo digital con QR incluido.",
    accent: "#635BFF",
    bg: "rgba(99,91,255,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Tres Modalidades de Entrega",
    description:
      "Mesa, para llevar o domicilio con dirección. Cada pedido llega etiquetado a cocina con modalidad, datos del cliente y notas especiales. Nada se pierde, nada se confunde.",
    accent: "#4DB374",
    bg: "rgba(77,179,116,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: "Cocina Kanban en Tiempo Real",
    description:
      "Vista exclusiva para tu equipo de cocina: pedidos activos agrupados por estado. Un clic para avanzar. Alerta visual y sonora al entrar un nuevo pedido. Sin papel, sin confusiones.",
    accent: "#C05010",
    bg: "rgba(192,80,16,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Dashboard de Ventas y Analytics",
    description:
      "Ingresos del día, ticket medio, pedidos activos y gráfico histórico configurable. Toma decisiones con datos reales de tu negocio, no con suposiciones.",
    accent: "#E8A820",
    bg: "rgba(232,168,32,0.08)",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-[#FEFAF3]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C05010] mb-4">
            Características
          </span>
          <h2
            id="features-heading"
            className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#2E1600] mb-5"
          >
            Todo lo que necesita tu restaurante,{" "}
            <span className="text-gradient-warm">en una plataforma.</span>
          </h2>
          <p className="text-lg text-[#9A6B20] max-w-2xl mx-auto">
            App premium para tus clientes y panel de gestión completo para tu equipo.
            Todo conectado, todo en tiempo real, cero comisiones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="group bg-white rounded-2xl p-7 border border-[#DEC070]/30 hover:border-[#DEC070]/70 hover:shadow-[0_8px_40px_rgba(192,80,16,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: f.bg, color: f.accent }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2E1600] mb-2">{f.title}</h3>
              <p className="text-sm text-[#9A6B20] leading-relaxed">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
