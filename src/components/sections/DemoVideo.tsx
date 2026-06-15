"use client";

import { useState } from "react";
import Image from "next/image";

const VIDEO_ID = "qzp7FMl5nS0";

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="demo"
      className="py-24 bg-[#1C0E00] overflow-hidden"
      aria-labelledby="demo-heading"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#C05010]/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-4">
            Demo en vivo
          </span>
          <h2
            id="demo-heading"
            className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-white mb-5"
          >
            Míralo en{" "}
            <span className="text-gradient-gold">acción.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Un recorrido completo por la app móvil y el panel de administración.
            Desde el primer pedido hasta la cocina.
          </p>
        </div>

        {/* Video container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
          {/* Browser chrome bar */}
          <div className="bg-[#2E1600] px-5 py-3 flex items-center gap-3 border-b border-white/8">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/15" />
              <div className="w-3 h-3 rounded-full bg-white/15" />
              <div className="w-3 h-3 rounded-full bg-white/15" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-1">
                <svg className="w-3 h-3 text-[#E8A820]/60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.23 8.23 0 004.83 1.56V7.03a4.85 4.85 0 01-1.06-.34z" />
                </svg>
                <span className="text-[11px] text-white/40 font-mono">youtube.com · Arepa Builder Demo</span>
              </div>
            </div>
          </div>

          {/* Video area — 16:9 */}
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Arepa Builder — Demo completo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                {/* Thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Demo de Arepa Builder — haz clic para reproducir"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 960px"
                  priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Play button */}
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Reproducir demo de Arepa Builder"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 group"
                >
                  <div className="relative">
                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-full bg-[#C05010]/40 animate-ping" />
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#C05010] group-hover:bg-[#983C08] flex items-center justify-center shadow-[0_8px_40px_rgba(192,80,16,0.6)] group-hover:shadow-[0_8px_48px_rgba(192,80,16,0.8)] transition-all duration-200 group-hover:scale-105">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white translate-x-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-white font-semibold text-sm tracking-wide bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/15">
                    Ver demo completo
                  </span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Bottom chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            "App móvil iOS & Android",
            "Panel de cocina en tiempo real",
            "Pagos con Stripe",
            "Notificaciones push",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-white/50 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
