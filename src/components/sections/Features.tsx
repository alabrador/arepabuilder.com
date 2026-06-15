const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Constructor Interactivo",
    description:
      "Elige tu base, agrega o quita ingredientes uno a uno. Visualiza tu arepa mientras la construyes y añade notas especiales por producto.",
    accent: "#C05010",
    bg: "rgba(192,80,16,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Notificaciones Push",
    description:
      "Recibe una push en cada cambio de estado: recibido, en preparación, listo. Incluso con la app cerrada. Sin necesidad de preguntar.",
    accent: "#E8A820",
    bg: "rgba(232,168,32,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Pago Seguro con Stripe",
    description:
      "Tarjeta de débito o crédito. Los datos bancarios nunca tocan nuestros servidores. Cifrado de extremo a extremo. Recibo digital con QR.",
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
    title: "Delivery a Domicilio",
    description:
      "Indica tu dirección, detectamos tu ubicación y calculamos el coste de envío antes de confirmar. O recoge en mostrador si lo prefieres.",
    accent: "#4DB374",
    bg: "rgba(77,179,116,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: "Panel de Cocina Admin",
    description:
      "El equipo gestiona todos los pedidos desde un tablero kanban en tiempo real. Sin papel, sin confusiones. Cada cambio dispara una push al cliente.",
    accent: "#C05010",
    bg: "rgba(192,80,16,0.08)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Historial de Pedidos",
    description:
      "Accede a todos tus pedidos anteriores, consulta el estado en cualquier momento y repite tu favorito con un solo tap. Tu cuenta, tu historial.",
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
            Todo lo que necesitas,{" "}
            <span className="text-gradient-warm">en una sola app.</span>
          </h2>
          <p className="text-lg text-[#9A6B20] max-w-2xl mx-auto">
            Diseñada para clientes que quieren velocidad y para restaurantes que
            quieren control. Sin complicaciones.
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
