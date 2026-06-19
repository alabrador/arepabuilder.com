import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
      aria-label="Arepa Builder — Hero"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#E8A820]/5 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full bg-[#C05010]/8 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#E8A820" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#E8A820]/15 border border-[#E8A820]/25 text-[#E8A820] text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 sm:px-4 py-1.5 rounded-full">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
                <span className="hidden sm:inline">Software para restaurantes · App + Panel Admin</span>
                <span className="sm:hidden">App móvil + Panel Admin</span>
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-[var(--font-playfair)] font-black text-white leading-[1.05] tracking-tight mb-5 sm:mb-6"
            >
              Tu restaurante,{" "}
              <span className="text-gradient-gold">en el bolsillo de tus clientes.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mb-8 sm:mb-10">
              Arepa Builder es el sistema completo que digitaliza tu negocio: app
              móvil para que tus clientes pidan y paguen, más panel admin para
              gestionarlo todo en tiempo real. Sin comisiones. Sin papeles. Sin llamadas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 w-full xs:w-auto">
              <a
                href="#download"
                className="group flex items-center justify-center gap-3 bg-[#C05010] hover:bg-[#983C08] text-white font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl transition-all duration-200 shadow-[0_8px_30px_rgba(192,80,16,0.5)] hover:shadow-[0_8px_36px_rgba(192,80,16,0.7)] hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Solicitar acceso gratuito
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 text-white/70 hover:text-white font-medium px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                Ver cómo funciona
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { icon: "⚡", text: "Operativo en 24h" },
                { icon: "🚫", text: "Sin comisiones" },
                { icon: "📱", text: "iOS y Android" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/60 text-xs px-3 sm:px-3.5 py-1.5 rounded-full"
                >
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="flex justify-center lg:justify-end items-center relative mt-6 lg:mt-0">
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-[#C05010]/20 blur-3xl" />
            </div>

            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="phone-mockup">
                <div className="phone-screen">
                  <Image
                    src="/images/app-splash.png"
                    alt="Arepa Builder — app móvil para restaurantes"
                    fill
                    className="object-cover"
                    priority
                    sizes="260px"
                  />
                </div>
              </div>

              {/* Floating notification card — top right (desktop only) */}
              <div className="hidden sm:block absolute -top-4 -right-10 z-10 glass-dark rounded-2xl px-4 py-3 min-w-[175px] shadow-gold animate-float-reverse">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#4DB374]/20 flex items-center justify-center text-base flex-shrink-0">
                    🔔
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Nuevo pedido #87</p>
                    <p className="text-white/40 text-[10px]">Mesa 4 · Bs. 48.00</p>
                  </div>
                </div>
              </div>

              {/* Floating payment card — bottom left (desktop only) */}
              <div className="hidden sm:block absolute -bottom-6 -left-10 z-10 glass-dark rounded-2xl px-4 py-3 min-w-[165px] shadow-brand animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C05010]/25 flex items-center justify-center text-base flex-shrink-0">
                    💳
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Cobro procesado</p>
                    <p className="text-[#4DB374] text-[10px] font-medium">✓ Stripe · Sin comisión</p>
                  </div>
                </div>
              </div>

              {/* Floating order status — left (desktop only) */}
              <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-16 z-10 glass-dark rounded-2xl px-3.5 py-3 shadow-brand">
                <p className="text-[10px] text-white/40 mb-1.5 font-medium uppercase tracking-wider">Cocina</p>
                <div className="flex flex-col gap-1.5">
                  {["Recibido ✓", "Preparando 👨‍🍳", "Listo 🎉"].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          i < 2 ? "bg-[#E8A820]" : "bg-white/20"
                        }`}
                      />
                      <span className={`text-[10px] font-medium ${i < 2 ? "text-white" : "text-white/30"}`}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile-only: mini status badge below phone */}
              <div className="sm:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 glass-dark rounded-full px-4 py-2 whitespace-nowrap">
                <p className="text-[10px] text-[#4DB374] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4DB374] animate-pulse inline-block" />
                  Pedidos en tiempo real
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
