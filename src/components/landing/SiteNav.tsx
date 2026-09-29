import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { Menu } from "@/components/brand/Icons";
import { NAV_LINKS } from "@/lib/content";

const LOGO_OUTLINE =
  "[filter:drop-shadow(1.5px_0_0_var(--color-navy))_drop-shadow(-1.5px_0_0_var(--color-navy))_drop-shadow(0_1.5px_0_var(--color-navy))_drop-shadow(0_-1.5px_0_var(--color-navy))]";

/** Navegación sobre fondo gold (hero y cabecera de páginas legales). */
export default function SiteNav() {
  return (
    <header className="relative z-20 mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8 md:h-28 xl:px-16">
      <Link href="/#top" className="flex items-center">
        <Logo preload className={`h-12 md:h-[66px] ${LOGO_OUTLINE}`} sizes="160px" />
      </Link>

      <nav aria-label="Principal" className="flex items-center gap-3 text-[17px] font-semibold md:gap-9">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hidden text-navy no-underline md:inline">
            {link.label}
          </Link>
        ))}
        <Link
          href="/#demo"
          className="flex h-11 items-center whitespace-nowrap rounded-full bg-navy px-4 font-bold text-gold no-underline hover:text-gold md:h-[50px] md:px-6"
        >
          Pide tu demo
        </Link>
        <details className="group relative md:hidden">
          <summary
            aria-label="Abrir menú"
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border-[3px] border-navy text-navy"
          >
            <Menu />
          </summary>
          <div className="absolute right-0 top-14 flex w-56 flex-col rounded-2xl border-[3px] border-navy bg-white p-2 shadow-[6px_8px_0_var(--color-navy)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-navy no-underline hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
