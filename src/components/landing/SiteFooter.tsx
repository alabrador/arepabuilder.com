import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { FOOTER_COLUMNS } from "@/lib/content";

export default function SiteFooter() {
  const columns = FOOTER_COLUMNS.filter((column) => column.title !== "Legal");
  const legalLinks = FOOTER_COLUMNS.find((column) => column.title === "Legal")?.links ?? [];

  return (
    <footer className="on-navy bg-navy text-line">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-4 py-8 sm:px-8 md:py-10 xl:px-16">
        <div className="grid min-w-0 gap-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10 lg:gap-20">
          <div className="flex min-w-0 flex-col gap-3">
            <Logo className="h-12 self-start lg:h-16" sizes="210px" />
            <p className="max-w-[420px] text-sm leading-relaxed text-line/80 sm:text-base">
              Sabor venezolano. Tecnología para tu negocio. Tu propia app de pedidos para iOS y Android,
              con tu marca y un panel para gestionar pedidos, cocina, pagos y ventas. Todo conectado
              para acercar tu restaurante a tus clientes.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-4 text-[13px] sm:gap-8 sm:text-sm lg:text-base">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="flex min-w-0 flex-col items-start">
                <h2 className="mb-2 font-display text-xl font-bold uppercase tracking-[1px] text-gold">
                  {column.title}
                </h2>
                {column.links.map((link) => (
                  <Link key={link.label} href={link.href} className="inline-flex min-h-9 max-w-full items-center py-1.5 leading-snug text-line no-underline transition-colors [overflow-wrap:anywhere] hover:text-gold">
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs text-line/75 sm:text-sm">
          <span>© {new Date().getFullYear()} Arepa Builder</span>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-1 text-line no-underline transition-colors hover:text-gold">
                {link.label}
              </Link>
            ))}
          </nav>
          <span>Android · iOS</span>
        </div>
      </div>
    </footer>
  );
}
