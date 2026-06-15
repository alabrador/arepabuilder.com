import Image from "next/image";

const items = [
  {
    name: "Arepa Pabellón",
    desc: "Carne mechada, caraotas negras, tajadas y queso blanco",
    img: "/images/arepa-pabellon.png",
    tag: "Clásica",
    tagColor: "#C05010",
  },
  {
    name: "Arepa Reina Pepiada",
    desc: "Pollo desmechado, aguacate fresco, mayonesa y cilantro",
    img: "/images/arepa-reina.png",
    tag: "Popular",
    tagColor: "#E8A820",
  },
  {
    name: "Arepa Dominó",
    desc: "Caraotas negras y queso blanco. El sabor más venezolano.",
    img: "/images/arepa-domino.png",
    tag: "Vegetariana",
    tagColor: "#4DB374",
  },
  {
    name: "Arepa de Carne",
    desc: "Carne mechada con todos los condimentos de la casa",
    img: "/images/arepa-carne.png",
    tag: "Bestseller",
    tagColor: "#C05010",
  },
  {
    name: "Arepa Pelúa",
    desc: "Carne mechada y queso amarillo derretido. Indulgente.",
    img: "/images/arepa-pelua.png",
    tag: "Favorita",
    tagColor: "#E8A820",
  },
  {
    name: "Empanadas",
    desc: "Maíz crujiente relleno de queso, carne o pollo al gusto",
    img: "/images/cat-empanadas.png",
    tag: "Snack",
    tagColor: "#9A6B20",
  },
];

export default function MenuGrid() {
  return (
    <section
      id="menu"
      className="py-24 bg-[#FEFAF3]"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C05010] mb-4">
              Nuestro menú
            </span>
            <h2
              id="menu-heading"
              className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#2E1600]"
            >
              Sabor venezolano{" "}
              <span className="text-gradient-warm">de verdad.</span>
            </h2>
          </div>
          <p className="text-[#9A6B20] max-w-xs text-sm leading-relaxed">
            Cada receta preparada con ingredientes frescos. Personaliza cualquier
            arepa a tu gusto desde la app.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <article
              key={item.name}
              className="group bg-white rounded-2xl overflow-hidden border border-[#DEC070]/30 hover:border-[#DEC070]/60 hover:shadow-[0_12px_40px_rgba(192,80,16,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#FFF8EE]">
                <Image
                  src={item.img}
                  alt={`${item.name} — Arepa Builder`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Tag */}
                <span
                  className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: item.tagColor }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-[#2E1600] text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-[#9A6B20] leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-[#DEC070] font-medium">Personalizable ✦</span>
                  <a
                    href="#download"
                    className="text-xs font-semibold text-[#C05010] hover:text-[#983C08] transition-colors"
                  >
                    Pedir en la app →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA under grid */}
        <div className="mt-10 text-center">
          <p className="text-[#9A6B20] text-sm mb-5">
            + arepas especiales, bebidas, cachapas y extras disponibles en la app
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 border-2 border-[#C05010] text-[#C05010] hover:bg-[#C05010] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
          >
            Ver menú completo en la app
          </a>
        </div>
      </div>
    </section>
  );
}
