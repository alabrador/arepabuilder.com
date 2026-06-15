"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Características", href: "#features" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Menú", href: "#menu" },
  { label: "Panel Admin", href: "#admin" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2E1600]/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Arepa Builder — Inicio">
          <Image
            src="/images/logo-header.png"
            alt="Arepa Builder"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-[#E8A820] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#download"
          className="hidden md:flex items-center gap-2 bg-[#C05010] hover:bg-[#983C08] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(192,80,16,0.4)] hover:shadow-[0_4px_24px_rgba(192,80,16,0.6)] hover:-translate-y-0.5"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm-1 11.586L5.707 10.29a1 1 0 011.414-1.414L9 10.758V6a1 1 0 012 0v4.758l1.879-1.879a1 1 0 011.414 1.414L11 13.586a1 1 0 01-1.414 0z" />
          </svg>
          Descargar app
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2E1600]/98 backdrop-blur-md border-t border-white/10 px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-white/80 hover:text-[#E8A820] transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-[#C05010] text-white font-semibold px-5 py-3 rounded-full"
            >
              Descargar app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
