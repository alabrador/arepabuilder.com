"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SCREENS = [
  {
    src: "/images/app/app1.png",
    number: "01",
    label: "Inicio",
    title: "Todo tu menú en un vistazo",
    desc: "Portada con el plato del día, categorías y recomendados actualizados en tiempo real desde el panel admin.",
    color: "#E8A820",
  },
  {
    src: "/images/app/app2.png",
    number: "02",
    label: "Catálogo",
    title: "Navega y elige lo que quieras",
    desc: "Arepas, empanadas, cachapas, bebidas y extras. Fotos, ingredientes y precio visible antes de añadir al carrito.",
    color: "#C05010",
  },
  {
    src: "/images/app/app3.png",
    number: "03",
    label: "Carrito",
    title: "Revisa antes de confirmar",
    desc: "Resumen de productos, cantidad, IVA y total. Añade notas especiales por producto antes de pagar.",
    color: "#C05010",
  },
  {
    src: "/images/app/app7.png",
    number: "04",
    label: "Checkout",
    title: "Elige modalidad y paga",
    desc: "Mesa, para llevar o domicilio. Pago seguro con tarjeta vía Stripe. El pedido entra directamente en la cocina.",
    color: "#635BFF",
  },
  {
    src: "/images/app/app8.png",
    number: "05",
    label: "Ticket QR",
    title: "Confirmación instantánea",
    desc: "Ticket digital con código QR y número de pedido. Muéstralo en mostrador o guárdalo en tu historial.",
    color: "#4DB374",
  },
  {
    src: "/images/app/app6.png",
    number: "06",
    label: "Entregado",
    title: "¡Listo! Disfruta tu pedido",
    desc: "Push notification cuando tu pedido está entregado. El ciclo completo sin una sola llamada al local.",
    color: "#4DB374",
  },
];

const INTERVAL = 3200; // ms per slide

export default function AppFlow() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true); // controls crossfade
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setProgress(0);
      setVisible(true);
    }, 300);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (current + 1) % SCREENS.length;
      goTo(next);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current, goTo]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const pct = Math.min(((now - start) / INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current]);

  const s = SCREENS[current];

  return (
    <div className="border-t border-white/5 py-24 bg-[#1C0E00]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-4">
            Experiencia de usuario
          </span>
          <h3 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white">
            El flujo que vivirán{" "}
            <span className="text-gradient-gold">todos tus clientes.</span>
          </h3>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_320px_1fr] gap-10 items-center">

          {/* Left — step list (desktop) */}
          <div className="hidden lg:flex flex-col gap-2">
            {SCREENS.map((sc, i) => (
              <button
                key={sc.number}
                onClick={() => goTo(i)}
                className={`group text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  i === current
                    ? "bg-white/8 border border-white/12"
                    : "hover:bg-white/4 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-black tracking-widest tabular-nums transition-colors duration-300"
                    style={{ color: i === current ? sc.color : "rgba(255,255,255,0.2)" }}
                  >
                    {sc.number}
                  </span>
                  <span
                    className={`font-semibold text-sm transition-colors duration-300 ${
                      i === current ? "text-white" : "text-white/35 group-hover:text-white/55"
                    }`}
                  >
                    {sc.label}
                  </span>
                </div>
                {i === current && (
                  <p className="mt-1.5 ml-9 text-xs text-white/45 leading-relaxed">
                    {sc.desc}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Center — phone */}
          <div className="flex flex-col items-center gap-6">
            {/* Phone body */}
            <div
              className="relative flex-shrink-0"
              style={{ width: 280, height: 604 }}
            >
              {/* Outer shell */}
              <div
                className="absolute inset-0 rounded-[44px] shadow-[0_40px_80px_rgba(0,0,0,0.7),inset_0_0_0_1.5px_rgba(255,255,255,0.12)]"
                style={{ background: "linear-gradient(145deg, #2a2a2a 0%, #111 100%)" }}
              />

              {/* Side buttons */}
              <div className="absolute -left-[3px] top-[110px] w-[3px] h-8 rounded-l-sm bg-[#333]" />
              <div className="absolute -left-[3px] top-[155px] w-[3px] h-12 rounded-l-sm bg-[#333]" />
              <div className="absolute -left-[3px] top-[215px] w-[3px] h-12 rounded-l-sm bg-[#333]" />
              <div className="absolute -right-[3px] top-[150px] w-[3px] h-16 rounded-r-sm bg-[#333]" />

              {/* Screen area */}
              <div
                className="absolute overflow-hidden"
                style={{
                  inset: "8px",
                  borderRadius: "38px",
                  background: "#1a1a1a",
                }}
              >
                {/* Screenshot with crossfade */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ opacity: visible ? 1 : 0 }}
                >
                  <Image
                    src={s.src}
                    alt={`${s.label} — Arepa Builder app`}
                    fill
                    className="object-cover object-top"
                    sizes="264px"
                    priority={current === 0}
                  />
                </div>

                {/* Dynamic Island */}
                <div
                  className="absolute top-3 left-1/2 -translate-x-1/2 z-20 rounded-full bg-black"
                  style={{ width: 110, height: 28 }}
                />

                {/* Progress bar at bottom of screen */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/30 z-20">
                  <div
                    className="h-full transition-none"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: s.color,
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/30 z-20" />
              </div>

              {/* Active step badge */}
              <div
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg z-30 transition-colors duration-300"
                style={{ backgroundColor: s.color }}
              >
                {s.number}
              </div>
            </div>

            {/* Dot nav */}
            <div className="flex items-center gap-2">
              {SCREENS.map((sc, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={sc.label}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 24 : 7,
                    height: 7,
                    backgroundColor:
                      i === current ? s.color : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — active step description (desktop) */}
          <div className="hidden lg:flex flex-col justify-center">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5 transition-colors duration-300"
              style={{ color: s.color }}
            >
              <span>Paso {s.number}</span>
              <span className="text-white/20">/</span>
              <span className="text-white/30">06</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-white mb-4 transition-all duration-300">
              {s.title}
            </h4>
            <p className="text-white/50 leading-relaxed mb-8">
              {s.desc}
            </p>
            {/* Prev / Next */}
            <div className="flex gap-3">
              <button
                onClick={() => goTo((current - 1 + SCREENS.length) % SCREENS.length)}
                className="w-11 h-11 rounded-full border border-white/15 hover:border-white/30 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                aria-label="Pantalla anterior"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => goTo((current + 1) % SCREENS.length)}
                className="w-11 h-11 rounded-full border border-white/15 hover:border-white/30 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                aria-label="Pantalla siguiente"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Mobile — step label + description below phone */}
        <div className="lg:hidden mt-8 text-center px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300" style={{ color: s.color }}>
            Paso {s.number} — {s.label}
          </p>
          <h4 className="text-xl font-[var(--font-playfair)] font-bold text-white mb-2">{s.title}</h4>
          <p className="text-sm text-white/45 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
        </div>

      </div>
    </div>
  );
}
