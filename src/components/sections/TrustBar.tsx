const stats = [
  { value: "1.000+", label: "Pedidos completados", icon: "🫓" },
  { value: "4.8★", label: "Valoración en App Store", icon: "⭐" },
  { value: "< 20 min", label: "Tiempo medio de entrega", icon: "⚡" },
  { value: "0%", label: "Comisiones sobre pedidos", icon: "💚" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#FFF8EE] border-y border-[#DEC070]/40 py-10" aria-label="Estadísticas Arepa Builder">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl mb-1" role="img" aria-label={s.label}>
                {s.icon}
              </span>
              <span className="text-2xl md:text-3xl font-black text-[#2E1600] font-[var(--font-playfair)]">
                {s.value}
              </span>
              <span className="text-xs md:text-sm text-[#9A6B20] font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
