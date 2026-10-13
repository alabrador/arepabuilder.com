import Image from 'next/image';
import Link from 'next/link';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import Button from '@/components/brand/Button';
import { PLATFORM } from '@/lib/platform';
import { DEMO_HREF } from '@/lib/content';
import { BASE_URL } from '@/lib/seo';
import { PRODUCT_DETAILS } from '@/lib/platform-detail';
import PlatformGallery from './PlatformGallery';
import Phone from '@/components/brand/Phone';
import KioskTotem from '@/components/brand/KioskTotem';
import { ArrowRight, Check, Monitor, Smartphone, UtensilsCrossed } from 'lucide-react';

export default function PlatformPage({ product }: { product: typeof PLATFORM[number] }) {
  const detail = PRODUCT_DETAILS[product.slug];
  const wide = product.slug === 'backend';
  const url = `${BASE_URL}/${product.slug}`;
  const data = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: product.title, description: product.description, inLanguage: 'es', isPartOf: { '@id': `${BASE_URL}/#website` }, breadcrumb: { '@id': `${url}#breadcrumb` }, primaryImageOfPage: { '@type': 'ImageObject', url: `${BASE_URL}${product.image}` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Arepa Builder', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: product.label, item: url },
    ] },
    { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: product.questions.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ] };
  return <>
    <SiteNav />
    <main className="bg-bg text-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
      <section className="relative overflow-hidden border-b border-navy/10 bg-[#f4f0e7]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-12 size-[650px] rounded-full border-[80px] border-gold/25" />
        <div className="relative mx-auto max-w-[1312px] px-6 pb-16 pt-8 md:px-10 md:pb-24">
          <nav aria-label="Ruta de navegación" className="mb-12 flex flex-wrap items-center gap-2 text-sm text-muted"><Link href="/" className="underline underline-offset-4">Arepa Builder</Link><span aria-hidden="true">/</span>{product.label}</nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-red">{detail.eyebrow}</p>
              <h1 className="mt-5 max-w-[660px] font-display text-[clamp(42px,5.5vw,74px)] font-extrabold uppercase leading-[1.03] tracking-tight">{product.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{product.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4"><Button href={DEMO_HREF} arrow>Pide tu demo</Button><Button href="#pantallas" variant="outline">Ver pantallas</Button></div>
              <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3">{detail.summary.map(item => <li key={item} className="flex items-center gap-2 text-sm font-semibold"><Check size={16} className="text-red" />{item}</li>)}</ul>
            </div>
            <div className="relative min-w-0 pb-8">
              {wide ? <div className="rounded-2xl border border-navy/15 bg-white p-3 shadow-[0_24px_70px_#03265b25]"><div className="flex items-center gap-2 px-2 pb-3"><span className="size-2 rounded-full bg-red" /><span className="size-2 rounded-full bg-gold" /><span className="ml-2 text-xs font-semibold text-muted">Arepa Builder · Administración</span></div><Image src={product.image} alt={product.imageAlt} width={2880} height={1800} sizes="(min-width: 1024px) 580px, 90vw" preload className="h-auto w-full rounded-lg" /></div>
                : product.slug === 'kiosko' ? <KioskTotem className="pb-12" />
                : <div className="relative mx-auto flex max-w-[440px] items-center justify-center gap-4 py-5">
                  <Phone realistic src={detail.captures[0].image} alt={detail.captures[0].alt} sizes="(min-width: 768px) 230px, 43vw" preload className="relative z-10 w-[52%] max-w-[230px] -rotate-3 drop-shadow-xl" />
                  <Phone realistic src={detail.captures[1].image} alt={detail.captures[1].alt} sizes="(min-width: 768px) 195px, 36vw" className="mt-16 w-[44%] max-w-[195px] rotate-3 drop-shadow-xl" />
                </div>}
              <div className="relative mx-auto -mt-4 flex w-fit items-center gap-3 rounded-xl border border-navy/10 bg-white px-5 py-3 shadow-lg"><span className="grid size-9 place-items-center rounded-full bg-gold"><Check size={18} /></span><div><p className="text-sm font-bold">Una plataforma conectada</p><p className="text-xs text-muted">App · Kiosko · Backend</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Contenido de la página" className="border-b border-navy/10 bg-white"><div className="mx-auto flex max-w-[1312px] flex-wrap gap-x-8 gap-y-2 px-6 py-5 text-sm font-semibold md:px-10">{[['#funciones', 'Funciones'], ['#pantallas', 'Pantallas reales'], ['#operativa', 'Cómo se conecta'], ['#implantacion', 'Puesta en marcha'], ['#preguntas', 'Preguntas frecuentes']].map(([href, label]) => <a key={href} href={href} className="py-2 hover:text-red">{label}</a>)}</div></nav>

      <section id="funciones" className="mx-auto max-w-[1312px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div><p className="text-xs font-bold uppercase tracking-[2px] text-red">Pensado para el servicio</p><h2 className="mt-4 font-display text-5xl font-extrabold uppercase leading-none md:text-6xl">{detail.headline[0]}<br /><span className="text-muted">{detail.headline[1]}</span></h2><p className="mt-6 text-lg leading-relaxed text-muted">Herramientas para cada momento: elegir, confirmar, preparar y gestionar. Descubre qué aporta {product.label.toLowerCase()} al trabajo diario.</p></div>
          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">{product.features.map(([title, text], index) => <article key={title} className="border-t-2 border-navy/15 pt-5"><span className="font-mono text-xs text-red">0{index + 1}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-muted">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="pantallas" className="border-y border-navy/10 bg-[#eef1f4] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1232px]">
          <div className="mb-12 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[2px] text-red">El producto, por dentro</p><h2 className="mt-4 font-display text-4xl font-extrabold uppercase md:text-6xl">{detail.galleryTitle}</h2><p className="mt-5 text-lg leading-relaxed text-muted">{detail.galleryIntro}</p><p className="mt-4 text-sm font-semibold">{detail.captures.length} capturas reales · Pulsa una imagen para ampliarla</p></div>
          <PlatformGallery captures={detail.captures} wide={wide} />
        </div>
      </section>

      <section id="operativa" className="on-navy bg-navy px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-[1232px]">
          <div className="grid gap-6 md:grid-cols-2 md:gap-16"><h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">{detail.operationTitle}</h2><p className="text-lg leading-relaxed text-white/75">{detail.operationIntro}</p></div>
          <div className="my-12 grid gap-4 sm:grid-cols-3">{[[Smartphone, 'Aplicaciones móviles', 'El cliente pide desde su teléfono.'], [Monitor, 'Kiosko', 'El cliente pide en el local.'], [UtensilsCrossed, 'Backend y cocina', 'Tu equipo gestiona y prepara.']].map(([Icon, title, text]) => { const Symbol = Icon as typeof Monitor; return <div key={String(title)} className="rounded-2xl border border-white/20 bg-white/5 p-6"><Symbol size={28} className="mb-5 text-gold" /><p className="text-xl font-bold">{String(title)}</p><p className="mt-2 text-white/70">{String(text)}</p></div>; })}</div>
          <div className="grid gap-8 border-t border-white/20 pt-9 md:grid-cols-3">{detail.roles.map(([role, description]) => <div key={role}><h3 className="text-lg font-bold text-gold">{role}</h3><p className="mt-3 leading-relaxed text-white/75">{description}</p></div>)}</div>
        </div>
      </section>

      <aside className="mx-auto max-w-[1232px] px-6 pt-12 text-navy"><div className="rounded-2xl border border-navy/15 bg-white p-7"><h2 className="text-2xl font-bold">Tu empresa tiene su propia instalación.</h2><p className="mt-3 text-lg leading-relaxed text-muted">Dominio, backend, base de datos y servicios separados de otras empresas. Puedes contratar kiosko, aplicación o ambos; el backend se comparte únicamente entre los canales de tu negocio.</p><Link href="/#modelo" className="mt-4 inline-block font-bold underline">Conoce la implantación y las condiciones del servicio →</Link></div></aside>
      <section id="implantacion" className="mx-auto max-w-[1312px] px-6 py-20 md:px-10 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[2px] text-red">De la demo al día a día</p><h2 className="mt-4 font-display text-4xl font-extrabold uppercase md:text-5xl">Una puesta en marcha con orden.</h2>
        <ol className="mt-10 grid gap-9 md:grid-cols-3">{detail.launch.map(([title, text], index) => <li key={title}><span className="grid size-12 place-items-center rounded-full bg-gold font-display text-2xl font-bold">{index + 1}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-muted">{text}</p></li>)}</ol>
        <p className="mt-10 rounded-xl border-l-4 border-gold bg-white p-6 text-base leading-relaxed text-muted">{detail.note}</p>
      </section>

      <section id="preguntas" className="mx-auto grid max-w-[1312px] gap-8 border-t border-navy/10 px-6 py-16 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div><p className="text-xs font-bold uppercase tracking-[2px] text-red">Antes de empezar</p><h2 className="mt-4 font-display text-4xl font-extrabold uppercase md:text-5xl">Resolvemos tus dudas.</h2><p className="mt-5 leading-relaxed text-muted">En la demo revisamos cómo encaja el sistema en tu local y qué configuración necesitas.</p></div>
        <div className="divide-y divide-navy/15">{product.questions.map(([question, answer]) => <details key={question} className="group py-5" open><summary className="cursor-pointer text-lg font-bold marker:text-red">{question}</summary><p className="mt-4 pl-5 leading-relaxed text-muted">{answer}</p></details>)}</div>
      </section>

      <section className="px-6 py-12 md:px-10"><div className="mx-auto max-w-[1232px] rounded-3xl bg-gold p-8 md:p-12"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><h2 className="font-display text-4xl font-extrabold uppercase md:text-5xl">{detail.cta}</h2><p className="mt-4 max-w-2xl text-lg">Cuéntanos cómo trabaja tu negocio y recorre con nosotros las funciones que necesitas.</p></div><Button href={DEMO_HREF} arrow className="shrink-0 self-start lg:self-auto">Solicitar demo</Button></div></div></section>
      <nav aria-label="Componentes de Arepa Builder" className="mx-auto max-w-[1312px] px-6 pb-20 pt-8 md:px-10"><h2 className="font-display text-3xl font-bold uppercase">Completa la experiencia.</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{PLATFORM.filter(item => item.slug !== product.slug).map(item => <Link key={item.slug} href={`/${item.slug}`} className="group rounded-2xl border border-navy/15 bg-white p-7 transition-colors hover:border-navy"><span className="flex items-center justify-between gap-4 text-xl font-bold">{item.label}<ArrowRight size={22} className="transition-transform group-hover:translate-x-1" /></span><p className="mt-3 leading-relaxed text-muted">{item.description}</p></Link>)}</div></nav>
    </main>
    <SiteFooter />
  </>;
}
