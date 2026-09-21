import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar solid />
      <main className="relative min-h-screen bg-[#03265B] flex items-center justify-center overflow-hidden pt-20 md:pt-24">

        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FFC400]/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#164F96]/12 blur-3xl" />
          {/* Dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-404" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#FFC400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-404)" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

          {/* Big 404 */}
          <div className="relative inline-block mb-6">
            <span
              className="block text-[160px] md:text-[220px] font-[var(--font-playfair)] font-black leading-none select-none"
              style={{
                background: "linear-gradient(135deg, #FFD95A 0%, #FFC400 50%, #E9A900 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 60px rgba(255,196,0,0.3))",
              }}
            >
              404
            </span>
            {/* Glow behind number */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30"
              style={{ background: "radial-gradient(ellipse, #FFC400 0%, transparent 70%)" }}
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-white/15" />
            <span className="text-[#FFC400] text-xs font-bold uppercase tracking-[0.3em]">Página no encontrada</span>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-white/15" />
          </div>

          {/* Text */}
          <h1 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-white mb-4">
            Esta página no existe.
          </h1>
          <p className="text-white/45 leading-relaxed mb-12 max-w-md mx-auto">
            La URL que buscas no está disponible. Puede que haya sido eliminada,
            movida o simplemente nunca existió.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 bg-gradient-to-br from-[#FFD95A] via-[#FFC400] to-[#E9A900] hover:brightness-[1.05] text-[#03265B] font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-[0_8px_30px_rgba(233,169,0,0.4)] hover:shadow-[0_8px_40px_rgba(233,169,0,0.55)] hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Volver al inicio
            </Link>
            <Link
              href="/#contacto"
              className="flex items-center gap-3 text-white/60 hover:text-white border border-white/15 hover:border-white/30 font-medium px-8 py-4 rounded-2xl transition-all duration-200"
            >
              Contactar soporte
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-14 pt-10 border-t border-white/8">
            <p className="text-xs text-white/25 uppercase tracking-widest mb-5 font-medium">O ve directamente a</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Características", href: "/#features" },
                { label: "La App", href: "/#app" },
                { label: "Demo", href: "/#demo" },
                { label: "Panel Admin", href: "/#admin" },
                { label: "Contacto", href: "/#contacto" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-white/40 hover:text-white/80 border border-white/10 hover:border-white/20 px-4 py-2 rounded-full transition-all duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
