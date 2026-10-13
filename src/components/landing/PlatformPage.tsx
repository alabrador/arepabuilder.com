import Image from 'next/image';
import Link from 'next/link';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import Button from '@/components/brand/Button';
import { PLATFORM } from '@/lib/platform';
import { DEMO_HREF } from '@/lib/content';
import { BASE_URL } from '@/lib/seo';

export default function PlatformPage({ product }: { product: typeof PLATFORM[number] }) {
  const url = `${BASE_URL}/${product.slug}`;
  const data = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: product.title, description: product.description, inLanguage: 'es', isPartOf: { '@id': `${BASE_URL}/#website` }, breadcrumb: { '@id': `${url}#breadcrumb` }, primaryImageOfPage: { '@type': 'ImageObject', url: `${BASE_URL}${product.image}` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Arepa Builder', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: product.label, item: url },
    ] },
  ] };
  return <>
    <SiteNav />
    <main className="bg-bg text-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <nav aria-label="Ruta de navegación" className="mb-10 text-sm text-muted"><Link href="/" className="underline">Arepa Builder</Link><span aria-hidden="true"> / </span>{product.label}</nav>
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-red">Una plataforma. Todo conectado.</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-tight md:text-6xl">{product.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">{product.intro}</p>
            <div className="mt-8"><Button href={DEMO_HREF} arrow>Pide tu demo</Button></div>
            <Link href={product.section} className="mt-6 inline-block font-semibold underline">{product.sectionLabel}</Link>
          </div>
          <figure className="min-w-0 rounded-3xl bg-navy/5 p-6">
            <Image src={product.image} alt={product.imageAlt} width={product.portrait ? 1320 : 2880} height={product.portrait ? 2868 : 1800} sizes="(min-width: 1024px) 520px, 90vw" loading="eager" className={`mx-auto h-auto rounded-xl ${product.portrait ? 'max-h-[520px] w-auto max-w-full object-contain' : 'w-full'}`} />
            <figcaption className="mt-4 text-center text-sm text-muted">{product.imageAlt}</figcaption>
          </figure>
        </section>
        <section className="mt-20" aria-labelledby="features-title">
          <h2 id="features-title" className="font-display text-4xl font-bold uppercase">Qué puedes hacer con {product.label}</h2>
          <div className="mt-9 grid gap-9 md:grid-cols-2">{product.features.map(([title, text]) => <article key={title} className="border-l-4 border-gold pl-6"><h3 className="text-2xl font-bold">{title}</h3><p className="mt-3 text-lg leading-relaxed text-muted">{text}</p></article>)}</div>
        </section>
        <section className="mt-20" aria-labelledby="questions-title">
          <h2 id="questions-title" className="font-display text-4xl font-bold uppercase">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-navy/15">{product.questions.map(([question, answer]) => <div key={question} className="py-6"><h3 className="text-xl font-bold">{question}</h3><p className="mt-3 max-w-4xl text-lg leading-relaxed text-muted">{answer}</p></div>)}</div>
        </section>
        <nav aria-label="Componentes de Arepa Builder" className="mt-16 rounded-3xl bg-gold p-8"><h2 className="font-display text-3xl font-bold uppercase">Descubre la plataforma completa</h2><div className="mt-5 flex flex-wrap gap-6">{PLATFORM.filter(item => item.slug !== product.slug).map(item => <Link key={item.slug} href={`/${item.slug}`} className="text-lg font-bold underline">{item.label} →</Link>)}</div></nav>
      </div>
    </main>
    <SiteFooter />
  </>;
}
