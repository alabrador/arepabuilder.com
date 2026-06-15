"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Características", href: "#features" },
  { label: "La App", href: "#app" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "Panel Admin", href: "#admin" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#2E1600]/96 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center h-16 sm:h-18 md:h-20 gap-8 lg:gap-10">

            {/* ── Logo ───────────────────────────────────── */}
            <Link
              href="/"
              aria-label="Arepa Builder — Inicio"
              className="flex-shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/images/logo-header.png"
                alt="Arepa Builder"
                width={180}
                height={46}
                className="h-9 sm:h-10 md:h-11 w-auto object-contain"
                priority
              />
            </Link>

            {/* ── Desktop & Tablet nav (left-aligned, right of logo) ── */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-2"
              aria-label="Navegación principal"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-white/65 hover:text-white px-3 py-2 rounded-lg hover:bg-white/8 transition-all duration-200 whitespace-nowrap"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* ── Spacer ─────────────────────────────────── */}
            <div className="flex-1" />

            {/* ── CTA — desktop & tablet ─────────────────── */}
            <a
              href="#download"
              className="hidden md:flex items-center gap-2.5 bg-[#C05010] hover:bg-[#983C08] text-white text-sm font-bold px-5 py-2.5 rounded-full flex-shrink-0 transition-all duration-200 shadow-[0_4px_20px_rgba(192,80,16,0.45)] hover:shadow-[0_4px_28px_rgba(192,80,16,0.65)] hover:-translate-y-px"
            >
              {/* Animated download icon */}
              <span className="relative w-4 h-4 flex-shrink-0">
                <svg className="absolute inset-0 w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
              </span>
              <span className="hidden lg:inline">Descargar app</span>
              <span className="lg:hidden">App</span>
            </a>

            {/* ── Hamburger — mobile only ─────────────────── */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <svg
                className="w-5 h-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>
      </header>

      {/* ── Mobile full-screen menu overlay ───────────────────────── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel — slides from top */}
        <div
          className={`absolute top-0 left-0 right-0 bg-[#2E1600] border-b border-white/10 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-5 h-16">
            <Image
              src="/images/logo-header.png"
              alt="Arepa Builder"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar menú"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="px-5 pb-6 pt-2 flex flex-col gap-1" aria-label="Menú móvil">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-base font-medium text-white/75 hover:text-white hover:bg-white/8 px-4 py-3.5 rounded-xl transition-all duration-200"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="text-[#E8A820] text-xs font-bold tabular-nums w-5">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            ))}

            {/* CTA in mobile menu */}
            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 bg-[#C05010] hover:bg-[#983C08] text-white font-bold text-base px-6 py-4 rounded-2xl transition-colors"
              >
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Descargar la app gratis
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
