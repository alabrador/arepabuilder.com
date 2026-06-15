const stats = [
  {
    icon: "📦",
    value: "500+",
    label: "Pedidos gestionados",
    color: "#C05010",
    bg: "rgba(192,80,16,0.08)",
    border: "rgba(192,80,16,0.2)",
    glow: "rgba(192,80,16,0.15)",
  },
  {
    icon: "⭐",
    value: "4.8★",
    label: "Valoración en App Store",
    color: "#E8A820",
    bg: "rgba(232,168,32,0.08)",
    border: "rgba(232,168,32,0.2)",
    glow: "rgba(232,168,32,0.15)",
  },
  {
    icon: "⚡",
    value: "24h",
    label: "Tiempo de implementación",
    color: "#635BFF",
    bg: "rgba(99,91,255,0.08)",
    border: "rgba(99,91,255,0.2)",
    glow: "rgba(99,91,255,0.15)",
  },
  {
    icon: "🚫",
    value: "0%",
    label: "Comisión por pedido",
    color: "#4DB374",
    bg: "rgba(77,179,116,0.08)",
    border: "rgba(77,179,116,0.2)",
    glow: "rgba(77,179,116,0.15)",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#FEFAF3] py-14" aria-label="Estadísticas Arepa Builder">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.value}
              className="group relative bg-white rounded-2xl p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(46,22,0,0.1)] overflow-hidden"
              style={{ borderColor: s.border }}
            >
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${s.glow} 0%, transparent 70%)` }}
              />

              {/* Accent line top */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                style={{ backgroundColor: s.color, opacity: 0.6 }}
              />

              <div className="relative flex flex-col items-start gap-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: s.bg }}
                >
                  {s.icon}
                </div>

                {/* Number */}
                <div>
                  <p
                    className="text-3xl md:text-4xl font-black font-[var(--font-playfair)] leading-none mb-1.5 transition-colors duration-300"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs md:text-sm text-[#9A6B20] font-medium leading-snug">
                    {s.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
