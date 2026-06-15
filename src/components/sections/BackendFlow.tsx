"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const INTERVAL = 4000;

const SCREENS = [
  {
    src: "/images/backend/backend1.png",
    number: "01",
    label: "Dashboard",
    url: "arepa-builder-admin.vercel.app/dashboard",
    title: "Analítica en tiempo real",
    desc: "Vista ejecutiva con los KPIs del día: ingresos, pedidos, ticket medio y tasa de entrega. Gráfico de evolución configurable: hoy, 7 días, 30 días o 12 meses.",
    color: "#E8A820",
    perks: [
      "Ingresos del día con delta vs. ayer",
      "Gráfico de ventas interactivo por período",
      "Pedidos activos en cocina en vivo",
      "Lista de pedidos recientes con estado",
    ],
  },
  {
    src: "/images/backend/backend2.png",
    number: "02",
    label: "Cocina",
    url: "arepa-builder-admin.vercel.app/cocina",
    title: "Kanban que la cocina entiende",
    desc: "Vista exclusiva para el equipo de cocina. Pedidos en tiempo real agrupados por estado. Un clic para avanzar el pedido y disparar automáticamente la push notification al cliente.",
    color: "#C05010",
    perks: [
      "Columnas: Recibido → Preparando → Listo",
      "Contador de pedidos activos por estado",
      "Alerta visual y sonora de nuevo pedido",
      "Un clic avanza estado y notifica al cliente",
    ],
  },
  {
    src: "/images/backend/backend3.png",
    number: "03",
    label: "Pedidos",
    url: "arepa-builder-admin.vercel.app/pedidos",
    title: "Gestión completa de pedidos",
    desc: "Listado paginado con todos los pedidos del restaurante. Filtros por estado, modalidad y fecha. Estado de pago visible de un vistazo. Acceso al detalle completo con un clic.",
    color: "#635BFF",
    perks: [
      "Filtros: Recibido / Preparando / Listo / Entregado",
      "Modalidad: Mesa, Para llevar, Domicilio",
      "Estado de pago: Pendiente / Pagado",
      "Paginación para 54+ pedidos históricos",
    ],
  },
  {
    src: "/images/backend/backend4.png",
    number: "04",
    label: "Detalle",
    url: "arepa-builder-admin.vercel.app/pedidos/72AS",
    title: "Toda la información de un pedido",
    desc: "Vista completa: productos con ingredientes desglosados, modalidad, dirección de domicilio con enlace a mapa, datos del cliente, estado de pago, factura formal e impresión de ticket.",
    color: "#4DB374",
    perks: [
      "Productos e ingredientes desglosados",
      "Dirección con enlace directo a Google Maps",
      "Datos del cliente y teléfono de contacto",
      "Botón de factura formal y ticket de entrega",
    ],
  },
];

export default function BackendFlow() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setProgress(0);
      setVisible(true);
    }, 280);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SCREENS.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current, goTo]);

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
    <section
      id="admin"
      className="py-24 bg-white overflow-hidden"
      aria-labelledby="admin-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ───────────────────────────────────────────── */}
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
            Next.js latest · PostgreSQL · Vercel. Dashboard, cocina, pedidos y
            clientes con roles diferenciados. Todo en tiempo real.
          </p>
        </div>

        {/* ── Main layout: left step list | right browser ──────── */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 xl:gap-16 items-start">

          {/* Left — step list (desktop) */}
          <div className="hidden lg:flex flex-col gap-2 pt-2">
            {SCREENS.map((sc, i) => (
              <button
                key={sc.number}
                onClick={() => goTo(i)}
                className={`group w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 ${
                  i === current
                    ? "bg-[#FEFAF3] border-[#DEC070]/50 shadow-[0_4px_20px_rgba(192,80,16,0.08)]"
                    : "border-transparent hover:bg-[#FEFAF3]/60 hover:border-[#DEC070]/30"
                }`}
              >
                <div className="flex items-center gap-3 mb-0.5">
                  <span
                    className="text-[10px] font-black tracking-widest tabular-nums transition-colors duration-300"
                    style={{ color: i === current ? sc.color : "#DEC070" }}
                  >
                    {sc.number}
                  </span>
                  <span
                    className={`font-semibold text-sm transition-colors duration-300 ${
                      i === current ? "text-[#2E1600]" : "text-[#9A6B20]/60 group-hover:text-[#9A6B20]"
                    }`}
                  >
                    {sc.label}
                  </span>
                </div>
                {i === current && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {sc.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-[#9A6B20] leading-snug">
                        <span
                          className="mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${sc.color}20` }}
                        >
                          <svg className="w-2 h-2" style={{ color: sc.color }} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Progress bar inside active step */}
                {i === current && (
                  <div className="mt-4 h-0.5 rounded-full bg-[#DEC070]/30 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-none"
                      style={{ width: `${progress}%`, backgroundColor: s.color }}
                    />
                  </div>
                )}
              </button>
            ))}

            {/* Prev / Next */}
            <div className="flex gap-2 mt-2 px-5">
              <button
                onClick={() => goTo((current - 1 + SCREENS.length) % SCREENS.length)}
                className="w-10 h-10 rounded-xl border border-[#DEC070]/50 hover:border-[#DEC070] flex items-center justify-center text-[#9A6B20] hover:text-[#2E1600] transition-all duration-200"
                aria-label="Pantalla anterior"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => goTo((current + 1) % SCREENS.length)}
                className="w-10 h-10 rounded-xl border border-[#DEC070]/50 hover:border-[#DEC070] flex items-center justify-center text-[#9A6B20] hover:text-[#2E1600] transition-all duration-200"
                aria-label="Pantalla siguiente"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className="flex flex-col gap-4">
            {/* Browser frame */}
            <div className="rounded-2xl overflow-hidden border border-[#DEC070]/40 shadow-[0_20px_60px_rgba(46,22,0,0.12)]">
              {/* Chrome bar */}
              <div className="bg-[#F5F1EB] px-4 py-2.5 flex items-center gap-3 border-b border-[#DEC070]/30">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                {/* URL bar */}
                <div className="flex-1 min-w-0 bg-white/70 rounded-lg px-3 py-1.5 flex items-center gap-2 border border-[#DEC070]/30">
                  <svg className="w-3 h-3 text-[#9A6B20]/50 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span
                    className="text-[11px] text-[#9A6B20]/70 truncate font-mono transition-all duration-300"
                  >
                    {s.url}
                  </span>
                </div>
                {/* Live badge */}
                <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#4DB374] animate-pulse" />
                  <span className="text-[10px] text-[#9A6B20]/60 font-medium">En vivo</span>
                </div>
              </div>

              {/* Screenshot area */}
              <div className="relative bg-white" style={{ paddingBottom: "56.25%" }}>
                <div
                  className="absolute inset-0 transition-opacity duration-280 ease-in-out"
                  style={{ opacity: visible ? 1 : 0 }}
                >
                  <Image
                    src={s.src}
                    alt={`${s.label} — Panel Admin Arepa Builder`}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 1024px) 100vw, 900px"
                    priority={current === 0}
                  />
                </div>

                {/* Step badge */}
                <div
                  className="absolute top-3 right-3 z-10 flex items-center gap-1.5 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow transition-colors duration-300"
                  style={{ backgroundColor: s.color }}
                >
                  {s.number} · {s.label}
                </div>

                {/* Progress bar at bottom of screenshot */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/10 z-10">
                  <div
                    className="h-full"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: s.color,
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Dot nav + mobile description */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                {SCREENS.map((sc, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={sc.label}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 28 : 8,
                      height: 8,
                      backgroundColor: i === current ? s.color : "#DEC070",
                      opacity: i === current ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Mobile: step description */}
              <div className="lg:hidden text-center px-2">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>
                  Paso {s.number} — {s.label}
                </p>
                <h4 className="text-xl font-[var(--font-playfair)] font-bold text-[#2E1600] mb-2">{s.title}</h4>
                <p className="text-sm text-[#9A6B20] leading-relaxed max-w-sm mx-auto">{s.desc}</p>
              </div>
            </div>
          </div>

        </div>

        {/* ── Tech stack strip ─────────────────────────────────── */}
        <div className="mt-16 bg-[#2E1600] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#E8A820] font-semibold mb-1">Stack técnico</p>
            <p className="text-white/55 text-sm max-w-md leading-relaxed">
              Panel desplegado en Vercel con Next.js latest, Prisma ORM, PostgreSQL, NextAuth y API REST consumida por la app móvil.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 flex-shrink-0 justify-center md:justify-end">
            {["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Vercel", "Stripe", "Expo Push"].map((t) => (
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
