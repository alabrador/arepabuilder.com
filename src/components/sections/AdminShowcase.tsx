const adminFeatures = [
  {
    icon: "📋",
    title: "Tablero Kanban",
    desc: "Todos los pedidos organizados por estado: recibido, preparando, listo, entregado. Arrastra para actualizar.",
  },
  {
    icon: "🔔",
    title: "Push automáticas",
    desc: "Cada cambio de estado dispara una notificación push al cliente. Sin intervención manual.",
  },
  {
    icon: "📊",
    title: "Estadísticas",
    desc: "Dashboard con ventas del día, platos más pedidos y horarios de mayor demanda.",
  },
  {
    icon: "🏷️",
    title: "Gestión de menú",
    desc: "Añade, edita o desactiva productos e ingredientes en tiempo real desde el panel.",
  },
  {
    icon: "👥",
    title: "Roles de equipo",
    desc: "Administrador, cajera y cocina con vistas y permisos diferenciados para cada uno.",
  },
  {
    icon: "🚚",
    title: "Control de delivery",
    desc: "Zonas de cobertura configurables, tarifas por distancia y gestión de horarios de apertura.",
  },
];

const orders = [
  { id: "#0042", item: "Arepa Pabellón × 2", status: "preparando", time: "hace 4 min", color: "#E8A820" },
  { id: "#0041", item: "Empanada de queso × 3", status: "listo", time: "hace 8 min", color: "#4DB374" },
  { id: "#0040", item: "Arepa Reina Pepiada × 1", status: "entregado", time: "hace 15 min", color: "#9A6B20" },
  { id: "#0043", item: "Arepa Dominó × 2, Bebida × 1", status: "recibido", time: "ahora", color: "#C05010" },
];

export default function AdminShowcase() {
  return (
    <section
      id="admin"
      className="py-24 bg-white"
      aria-labelledby="admin-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C05010] mb-4">
            Para el equipo
          </span>
          <h2
            id="admin-heading"
            className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#2E1600] mb-5"
          >
            Panel de cocina{" "}
            <span className="text-gradient-warm">que sí funciona.</span>
          </h2>
          <p className="text-lg text-[#9A6B20] max-w-2xl mx-auto">
            El equipo de cocina gestiona cada pedido desde un tablero en tiempo
            real. Sin papel, sin confusiones, sin llamadas al cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — browser mockup */}
          <div className="browser-mockup">
            {/* Browser top bar */}
            <div className="browser-bar">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                arepa-builder-admin.vercel.app
              </div>
            </div>

            {/* Admin UI simulation */}
            <div className="bg-gray-50 p-4">
              {/* Admin header */}
              <div className="bg-[#2E1600] rounded-xl px-5 py-3 flex items-center justify-between mb-4">
                <span className="text-white font-semibold text-sm">🫓 Arepa Builder — Panel Admin</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4DB374] animate-pulse" />
                  <span className="text-white/60 text-xs">En vivo</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Hoy", value: "24 pedidos" },
                  { label: "Pendientes", value: "3 activos" },
                  { label: "Total hoy", value: "€ 380" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-3 border border-gray-100 text-center">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">{stat.label}</p>
                    <p className="text-sm font-bold text-[#2E1600]">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Orders list */}
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Pedidos activos</span>
                  <span className="text-xs text-gray-400">Actualizado ahora</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {orders.map((order) => (
                    <div key={order.id} className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-gray-400">{order.id}</span>
                        <div>
                          <p className="text-xs font-medium text-gray-800">{order.item}</p>
                          <p className="text-[10px] text-gray-400">{order.time}</p>
                        </div>
                      </div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: order.color }}
                      >
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — features grid */}
          <div>
            <div className="grid sm:grid-cols-2 gap-5">
              {adminFeatures.map((f) => (
                <div
                  key={f.title}
                  className="bg-[#FEFAF3] rounded-2xl p-5 border border-[#DEC070]/30 hover:border-[#DEC070]/60 transition-all duration-200"
                >
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h3 className="font-bold text-[#2E1600] text-sm mb-1.5">{f.title}</h3>
                  <p className="text-xs text-[#9A6B20] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#2E1600] rounded-2xl p-6 text-white">
              <p className="text-xs uppercase tracking-widest text-[#E8A820] font-semibold mb-2">Stack técnico</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Next.js 15 + Prisma + PostgreSQL desplegado en Vercel. Panel
                protegido con NextAuth. API REST consumida por la app móvil.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Next.js 15", "Prisma", "PostgreSQL", "Vercel", "Stripe"].map((t) => (
                  <span key={t} className="text-[10px] font-semibold uppercase tracking-wider bg-white/8 border border-white/10 text-white/60 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
