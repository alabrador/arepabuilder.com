import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { FOOTER_COLUMNS } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="on-navy bg-navy text-line">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-4 pb-12 pt-16 sm:px-8 md:pt-[72px] xl:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-[18px]">
            <Logo className="h-16 self-start md:h-[84px]" sizes="280px" />
            <p className="text-[17px]">Sabor venezolano. Tecnología para tu negocio.</p>
          </div>

          <div className="grid grid-cols-1 gap-10 text-base sm:grid-cols-3 sm:gap-20">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-extrabold uppercase tracking-[1px] text-gold">
                  {column.title}
                </h2>
                {column.links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-line no-underline hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-blue pt-6 text-sm sm:flex-row">
          <span>© {new Date().getFullYear()} Arepa Builder</span>
          <span>Android · iOS</span>
        </div>
      </div>
    </footer>
  );
}
