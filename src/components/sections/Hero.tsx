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
        {/* Dot grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#E8A820" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#E8A820]/15 border border-[#E8A820]/25 text-[#E8A820] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App disponible para iOS y Android
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-[64px] font-[var(--font-playfair)] font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Tu arepa favorita,{" "}
              <span className="text-gradient-gold">lista en minutos.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-10">
              Personaliza tu arepa o empanada venezolana al detalle, paga con
              tarjeta y sigue cada paso de tu pedido en tiempo real. Sin
              llamadas. Sin esperas. Sin filas.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#download"
                className="group flex items-center gap-3 bg-[#C05010] hover:bg-[#983C08] text-white font-semibold px-7 py-4 rounded-2xl transition-all duration-200 shadow-[0_8px_30px_rgba(192,80,16,0.5)] hover:shadow-[0_8px_36px_rgba(192,80,16,0.7)] hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Descargar gratis
                <span className="text-white/50 text-sm font-normal">iOS &amp; Android</span>
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 text-white/70 hover:text-white font-medium px-6 py-4 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                Ver cómo funciona
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "⭐", text: "4.8 en App Store" },
                { icon: "🔒", text: "Pago con Stripe" },
                { icon: "📦", text: "Seguimiento real" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/60 text-xs px-3.5 py-1.5 rounded-full"
                >
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="flex justify-center lg:justify-end items-center relative">
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-[#C05010]/20 blur-3xl" />
            </div>

            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="phone-mockup">
                <div className="phone-screen">
                  <Image
                    src="/images/app-splash.png"
                    alt="Arepa Builder app — pantalla de inicio"
                    fill
                    className="object-cover"
                    priority
                    sizes="260px"
                  />
                </div>
              </div>

              {/* Floating notification card — top right */}
              <div className="absolute -top-4 -right-10 glass-dark rounded-2xl px-4 py-3 min-w-[175px] shadow-gold animate-float-reverse">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#4DB374]/20 flex items-center justify-center text-base flex-shrink-0">
                    🎉
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">¡Pedido listo!</p>
                    <p className="text-white/40 text-[10px]">Pasa a recogerlo</p>
                  </div>
                </div>
              </div>

              {/* Floating payment card — bottom left */}
              <div className="absolute -bottom-6 -left-10 glass-dark rounded-2xl px-4 py-3 min-w-[165px] shadow-brand animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C05010]/25 flex items-center justify-center text-base flex-shrink-0">
                    💳
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Pago procesado</p>
                    <p className="text-[#4DB374] text-[10px] font-medium">✓ Seguro con Stripe</p>
                  </div>
                </div>
              </div>

              {/* Floating order status — left */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-16 glass-dark rounded-2xl px-3.5 py-3 shadow-brand">
                <p className="text-[10px] text-white/40 mb-1.5 font-medium uppercase tracking-wider">Estado</p>
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
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
