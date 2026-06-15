import Image from "next/image";

const cols = [
  {
    title: "Producto",
    links: [
      { label: "Características", href: "#features" },
      { label: "Cómo funciona", href: "#how-it-works" },
      { label: "App Móvil", href: "#app" },
      { label: "Panel Admin", href: "#admin" },
    ],
  },
  {
    title: "Para restaurantes",
    links: [
      { label: "Sin comisiones", href: "#features" },
      { label: "Operativo en 24h", href: "#how-it-works" },
      { label: "Cocina en tiempo real", href: "#admin" },
      { label: "Analytics de ventas", href: "#admin" },
    ],
  },
  {
    title: "Descargar",
    links: [
      { label: "Demo en App Store", href: "#download" },
      { label: "Demo en Google Play", href: "#download" },
      { label: "Panel de administración", href: "#admin" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#1C0E00] text-white/70 pt-16 pb-8 border-t border-white/5"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-header.png"
              alt="Arepa Builder"
              width={160}
              height={40}
              className="h-9 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed max-w-xs text-white/50">
              Sistema completo de pedidos digitales para restaurantes. App móvil
              para tus clientes y panel admin para tu equipo. Todo en tiempo real,
              sin comisiones.
            </p>
            {/* Badges */}
            <div className="flex gap-3 mt-6">
              <a
                href="#download"
                className="flex items-center gap-2 bg-white/8 hover:bg-white/12 transition-colors border border-white/10 rounded-xl px-4 py-2.5 text-xs font-medium text-white"
                aria-label="Demo en App Store"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#download"
                className="flex items-center gap-2 bg-white/8 hover:bg-white/12 transition-colors border border-white/10 rounded-xl px-4 py-2.5 text-xs font-medium text-white"
                aria-label="Demo en Google Play"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.27.15.57.19.87.12l12.44-7.08-2.67-2.67L3.18 23.76zM.46 1.71C.17 2.03 0 2.5 0 3.07v17.86c0 .57.17 1.04.47 1.36l.07.07 10-10v-.23L.53 1.64l-.07.07zm20.1 9.14l-2.85-1.62-2.97 2.97 2.97 2.97 2.86-1.63c.82-.47.82-1.22-.01-1.69zM3.18.24l10.64 6.63-2.67 2.67L3.18.36c-.29-.17-.6-.16-.88.01L3.18.24z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Links cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E8A820] mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Arepa Builder. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="/privacidad" className="hover:text-white/60 transition-colors">Privacidad</a>
            <a href="/terminos" className="hover:text-white/60 transition-colors">Términos</a>
            <a href="/#contacto" className="hover:text-white/60 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
