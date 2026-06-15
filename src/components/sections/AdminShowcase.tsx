import Image from "next/image";

const panels = [
  {
    src: "/images/backend/backend2.png",
    label: "Panel de Cocina",
    desc: "Kanban en vivo: Recibido → Preparando → Listo. Un clic para avanzar el estado y disparar la push al cliente.",
    accent: "#E8A820",
  },
  {
    src: "/images/backend/backend3.png",
    label: "Gestión de Pedidos",
    desc: "54 pedidos filtrados por estado, modalidad y cliente. Paginación, búsqueda y acceso rápido a cada detalle.",
    accent: "#C05010",
  },
  {
    src: "/images/backend/backend4.png",
    label: "Detalle de Pedido",
    desc: "Productos, precios, dirección de domicilio con enlace a mapa, estado de pago y factura formal con un clic.",
    accent: "#4DB374",
  },
];

export default function AdminShowcase() {
  return (
    <section
      id="admin"
      className="py-24 bg-[#FEFAF3] overflow-hidden"
      aria-labelledby="admin-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C05010] mb-4">
            Panel de administración
          </span>
          <h2
            id="admin-heading"
            className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#2E1600] mb-5"
          >
            El backend que mantiene{" "}
            <span className="text-gradient-warm">todo bajo control.</span>
          </h2>
          <p className="text-lg text-[#9A6B20] max-w-2xl mx-auto">
            Next.js 15 · PostgreSQL · Vercel. Acceso para administrador, cajera y
            cocina con roles diferenciados. Datos en tiempo real, sin recargar.
          </p>
        </div>

        {/* Dashboard — hero screenshot */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(46,22,0,0.15)] border border-[#DEC070]/30">
          {/* Fake browser bar */}
          <div className="bg-[#F0EDE8] px-4 py-2.5 flex items-center gap-2 border-b border-[#DEC070]/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 flex items-center gap-1.5">
              <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              arepa-builder-admin.vercel.app/dashboard
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#4DB374]" />
              En vivo
            </div>
          </div>
          {/* Screenshot */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <Image
              src="/images/backend/backend1.png"
              alt="Dashboard de Arepa Builder Admin — ingresos, pedidos y evolución"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>

        {/* Caption for dashboard */}
        <p className="text-center text-sm text-[#9A6B20] mb-14">
          <strong className="text-[#2E1600]">Dashboard principal</strong> — ingresos del día, pedidos activos, ticket medio, tasa de entrega y gráfico de evolución de ventas en 7 / 30 / 365 días.
        </p>

        {/* 3 secondary screenshots */}
        <div className="grid md:grid-cols-3 gap-6">
          {panels.map((p) => (
            <div
              key={p.label}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#DEC070]/30 bg-white hover:border-[#DEC070]/70 hover:shadow-[0_12px_40px_rgba(192,80,16,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Screenshot */}
              <div className="relative w-full bg-[#F8F6F2]" style={{ paddingBottom: "62%" }}>
                <Image
                  src={p.src}
                  alt={`${p.label} — Arepa Builder Admin`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Label badge on top */}
                <span
                  className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: p.accent }}
                >
                  {p.label}
                </span>
              </div>
              {/* Description */}
              <div className="p-5 flex-1">
                <h3 className="font-bold text-[#2E1600] mb-2">{p.label}</h3>
                <p className="text-sm text-[#9A6B20] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack strip */}
        <div className="mt-12 bg-[#2E1600] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E8A820] font-semibold mb-1">Stack técnico del admin</p>
            <p className="text-white/60 text-sm max-w-md">
              Panel desplegado en Vercel con Next.js 15, Prisma ORM, PostgreSQL, NextAuth y API REST consumida por la app móvil.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            {["Next.js 15", "Prisma", "PostgreSQL", "NextAuth", "Vercel", "Stripe", "Expo Push"].map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold uppercase tracking-wider bg-white/8 border border-white/10 text-white/55 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
