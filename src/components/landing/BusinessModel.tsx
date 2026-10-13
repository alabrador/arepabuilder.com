import Link from 'next/link';
import Button from '@/components/brand/Button';
import { DEMO_HREF } from '@/lib/content';

export default function BusinessModel() {
  return <section id="modelo" className="bg-bg px-6 py-20 text-navy md:px-10 md:py-24">
    <div className="mx-auto max-w-[1232px]">
      <p className="text-xs font-bold uppercase tracking-[2px] text-red">Una instalación para tu empresa</p>
      <h2 className="mt-4 max-w-4xl font-display text-5xl font-extrabold uppercase leading-none md:text-7xl">Tu dominio. Tus datos.<br />Tu forma de trabajar.</h2>
      <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">Implantamos Arepa Builder para cada empresa por separado: backend propio, base de datos independiente y servicios configurados para tu negocio. Elige los canales que necesitas y amplía después.</p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          ['Kiosko + Backend', 'Autoservicio en el local', 'Carta, carrito, pago compatible y gestión de pedidos desde tu panel. El software está incluido; el hardware del kiosko se presupuesta por separado.', '/kiosko'],
          ['Aplicación + Backend', 'Tu marca en el teléfono', 'Aplicación para iOS y Android conectada a tu propia instalación. Identidad, configuración y publicación se coordinan durante la puesta en marcha.', '/aplicaciones'],
          ['Completo', 'Ambos canales conectados', 'Kiosko y aplicación comparten el catálogo y los pedidos de tu empresa, con un único backend. Activar otro canal no duplica tu base de datos.', '/backend'],
        ].map(([title, subtitle, description, href]) => <article key={title} className="flex flex-col rounded-2xl border border-navy/15 bg-white p-7"><p className="text-sm font-semibold text-red">{subtitle}</p><h3 className="mt-3 font-display text-3xl font-bold uppercase">{title}</h3><p className="mb-6 mt-4 grow leading-relaxed text-muted">{description}</p><Link href={href} className="font-bold underline underline-offset-4">Conocer el producto →</Link></article>)}
      </div>
      <div className="mt-12 grid gap-8 border-t border-navy/15 pt-10 md:grid-cols-2">
        <div><h3 className="text-2xl font-bold">Qué se configura para tu empresa</h3><ul className="mt-5 space-y-3 text-lg text-muted">{['Dominio y acceso propios al backend y al kiosko.', 'Base de datos y almacenamiento independientes.', 'Cuenta de Twilio y remitentes de correo propios.', 'Cuenta de pagos y credenciales separadas.', 'Mantenimiento, actualizaciones y soporte incluidos.'].map(text => <li key={text} className="flex gap-3"><span className="text-red" aria-hidden="true">✓</span>{text}</li>)}</ul></div>
        <div className="rounded-2xl bg-navy p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-[2px] text-gold">Todo incluido · pagas cuando vendes</p>
          <p className="mt-4 font-display text-7xl font-extrabold leading-none text-gold">5 %</p>
          <p className="mt-2 text-xl font-semibold">por venta. Sin cuota de alta ni mantenimiento.</p>
          <p className="mt-5 leading-relaxed text-white/80">Creamos tu aplicación, configuramos tu dominio y tu backend, y nos ocupamos del mantenimiento cada mes. Solo pagas un 5 % de lo que vendes: si vendes 1.000 € al mes, pagas 50 €.</p>
          <ul className="mt-6 space-y-2 text-sm text-white/80">{['Mínimo de 50 € al mes, solo si el 5 % no llega a esa cifra.', 'Se aplica a todas las ventas cobradas, sea cual sea la forma de pago.', 'Permanencia de 12 meses.', 'Liquidación mensual visible en tu panel.', 'IVA no incluido. Las tarifas del procesador de pagos y el consumo de SMS se pagan aparte.'].map(text => <li key={text} className="flex gap-3"><span className="text-gold" aria-hidden="true">✓</span>{text}</li>)}</ul>
          <p className="mt-6 text-sm text-white/60">Pensado para negocios que venden a partir de 1.500 € al mes. Si vendes menos, te preparamos una propuesta con cuota de alta.</p>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gold p-8 md:flex-row md:items-center"><div><h3 className="font-display text-3xl font-bold uppercase">Empezamos con tu negocio.</h3><p className="mt-2 max-w-2xl">Revisamos tus canales y locales, preparamos la instalación y validamos el recorrido antes de ponerla en marcha.</p></div><Button href={DEMO_HREF} arrow className="shrink-0">Pedir propuesta</Button></div>
    </div>
  </section>;
}
