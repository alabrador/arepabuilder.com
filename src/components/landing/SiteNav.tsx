"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/brand/Logo";
import { ArrowRight, Menu } from "@/components/brand/Icons";
import { NAV_LINKS } from "@/lib/content";

/** Fixed navigation with a reserved footprint to avoid layout shifts. */
export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onPointerDown = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) {
        menu.current.open = false;
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenu = () => { if (menu.current) menu.current.open = false; };

  return (
    <>
      <div aria-hidden="true" className="h-20 lg:h-28" />
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 motion-reduce:transition-none ${scrolled ? "border-navy/10 bg-bg/95 shadow-[0_8px_32px_rgba(3,38,91,0.1)] backdrop-blur-xl" : "border-navy/10 bg-gold"}`}>
        <div className={`mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 transition-[height] duration-300 motion-reduce:transition-none sm:px-8 xl:px-16 ${scrolled ? "h-20" : "h-20 lg:h-28"}`}>
          <Link href="/#top" aria-label="Arepa Builder — Inicio" onClick={closeMenu} className="flex shrink-0 items-center">
            <Logo preload className={`h-9 transition-[height] duration-300 motion-reduce:transition-none sm:h-12 ${scrolled ? "lg:h-12" : "lg:h-16"}`} sizes="(min-width: 1024px) 210px, 160px" />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-3 font-display text-[22px] font-bold uppercase leading-none tracking-[0.5px] xl:px-4 xl:text-2xl text-navy no-underline transition-colors hover:bg-navy/5 hover:text-navy">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/#demo" onClick={closeMenu} className="group flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-navy px-3 font-display text-lg font-bold uppercase leading-none tracking-[0.5px] text-white no-underline shadow-[0_4px_12px_rgba(3,38,91,0.15)] transition-colors hover:bg-deep hover:text-white sm:h-12 sm:px-5 sm:text-[22px] xl:text-2xl">
              Pide tu demo
              <ArrowRight size={17} className="hidden transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none sm:block" />
            </Link>
            <details ref={menu} className="group lg:hidden">
              <summary aria-label="Menú de navegación" className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-navy/5 [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden"><Menu /></span>
                <span aria-hidden="true" className="hidden text-3xl leading-none group-open:block">×</span>
              </summary>
              <nav aria-label="Navegación móvil" className="absolute inset-x-4 top-[calc(100%+8px)] max-h-[calc(100dvh-104px)] overflow-y-auto rounded-3xl border border-navy/10 bg-bg p-3 shadow-[0_16px_48px_rgba(3,38,91,0.18)] sm:inset-x-8">
                <p className="px-4 pb-3 pt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Tu restaurante, conectado</p>
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenu} className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-bold uppercase leading-7 tracking-[0.5px] text-navy no-underline hover:bg-gold/25 hover:text-navy">
                    {link.label}<ArrowRight size={18} />
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
