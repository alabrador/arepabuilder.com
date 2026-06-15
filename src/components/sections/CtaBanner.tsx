export default function CtaBanner() {
  return (
    <section
      id="download"
      className="py-24 bg-hero-gradient relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8A820]/6 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C05010]/10 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-cta" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#E8A820" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-cta)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon accent */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E8A820]/15 border border-[#E8A820]/25 mb-6">
          <svg className="w-8 h-8 text-[#E8A820]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h2
          id="cta-heading"
          className="text-4xl md:text-6xl font-[var(--font-playfair)] font-black text-white leading-tight mb-6"
        >
          ¿Listo para transformar{" "}
          <span className="text-gradient-gold">tu restaurante?</span>
        </h2>

        <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto">
          Descarga la app, prueba la experiencia que recibirán tus clientes e
          implementa el sistema completo en tu negocio. Sin comisiones. Sin
          contratos. Sin excusas.
        </p>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* App Store */}
          <a
            href="https://apps.apple.com"
            className="group flex items-center gap-4 bg-white hover:bg-white/90 text-[#2E1600] px-7 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Arepa Builder en App Store"
          >
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-medium text-[#2E1600]/50 uppercase tracking-wider">Prueba la demo en</p>
              <p className="text-lg font-bold leading-tight">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com"
            className="group flex items-center gap-4 bg-white/8 hover:bg-white/12 border border-white/15 text-white px-7 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Arepa Builder en Google Play"
          >
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.27.15.57.19.87.12l12.44-7.08-2.67-2.67L3.18 23.76zM.46 1.71C.17 2.03 0 2.5 0 3.07v17.86c0 .57.17 1.04.47 1.36l.07.07 10-10v-.23L.53 1.64l-.07.07zm20.1 9.14l-2.85-1.62-2.97 2.97 2.97 2.97 2.86-1.63c.82-.47.82-1.22-.01-1.69zM3.18.24l10.64 6.63-2.67 2.67L3.18.36c-.29-.17-.6-.16-.88.01L3.18.24z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">Prueba la demo en</p>
              <p className="text-lg font-bold leading-tight">Google Play</p>
            </div>
          </a>
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/30 text-xs">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#4DB374]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sin comisiones por pedido
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#4DB374]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Panel admin incluido
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#4DB374]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            iOS y Android
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#4DB374]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Operativo en 24h
          </span>
        </div>
      </div>
    </section>
  );
}
