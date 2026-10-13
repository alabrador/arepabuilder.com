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
          ['Kiosko + Backend', 'Autoservicio en el local', 'Carta, carrito, pago compatible y gestión de pedidos desde tu panel. La licencia de software y el hardware se presupuestan por separado.', '/kiosko'],
          ['Aplicación + Backend', 'Tu marca en el teléfono', 'Aplicación para iOS y Android conectada a tu propia instalación. Identidad, configuración y publicación se coordinan durante la puesta en marcha.', '/aplicaciones'],
          ['Completo', 'Ambos canales conectados', 'Kiosko y aplicación comparten el catálogo y los pedidos de tu empresa, con un único backend. Activar otro canal no duplica tu base de datos.', '/backend'],
        ].map(([title, subtitle, description, href]) => <article key={title} className="flex flex-col rounded-2xl border border-navy/15 bg-white p-7"><p className="text-sm font-semibold text-red">{subtitle}</p><h3 className="mt-3 font-display text-3xl font-bold uppercase">{title}</h3><p className="mb-6 mt-4 grow leading-relaxed text-muted">{description}</p><Link href={href} className="font-bold underline underline-offset-4">Conocer el producto →</Link></article>)}
      </div>
      <div className="mt-12 grid gap-8 border-t border-navy/15 pt-10 md:grid-cols-2">
        <div><h3 className="text-2xl font-bold">Qué se configura para tu empresa</h3><ul className="mt-5 space-y-3 text-lg text-muted">{['Dominio y acceso propios al backend y al kiosko.', 'Base de datos y almacenamiento independientes.', 'Cuenta de Twilio y remitentes de correo propios.', 'Cuenta de pagos y credenciales separadas.', 'Actualizaciones y soporte según el servicio contratado.'].map(text => <li key={text} className="flex gap-3"><span className="text-red" aria-hidden="true">✓</span>{text}</li>)}</ul></div>
        <div><h3 className="text-2xl font-bold">Un presupuesto con cada coste claro</h3><p className="mt-5 text-lg leading-relaxed text-muted">La propuesta distingue implantación, licencia recurrente, canales, dispositivos y soporte. Infraestructura, SMS, correo, tarifas del procesador y publicación en tiendas se detallan según el alcance.</p><p className="mt-4 leading-relaxed text-muted">Antes de contratar conocerás el precio total, los límites y cualquier comisión aplicable. El canal elegido y el nivel de servicio se definen por separado. No ofrecemos consumos ilimitados ni activación automática.</p></div>
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gold p-8 md:flex-row md:items-center"><div><h3 className="font-display text-3xl font-bold uppercase">Empezamos con tu negocio.</h3><p className="mt-2 max-w-2xl">Revisamos tus canales y locales, preparamos la instalación y validamos el recorrido antes de ponerla en marcha.</p></div><Button href={DEMO_HREF} arrow className="shrink-0">Pedir propuesta</Button></div>
    </div>
  </section>;
}
