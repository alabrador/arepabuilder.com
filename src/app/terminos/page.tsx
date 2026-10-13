import { createPageMetadata } from "@/lib/seo";
import SiteNav from "@/components/landing/SiteNav";
import SiteFooter from "@/components/landing/SiteFooter";
import { CONTACT } from "@/lib/content";

export const metadata = createPageMetadata("/terminos", "Términos y Condiciones", "Términos y condiciones de Arepa Builder: instalación propia todo incluido, comisión del 5 % por venta, mínimo mensual, permanencia y uso del servicio.");

export default function Terminos() {
  return (
    <>
      <div className="bg-gold">
        <SiteNav />
      </div>
      <main className="bg-bg pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#063477] mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-black text-[#17233A] mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-[#778397]">
              Última actualización: octubre de 2026
            </p>
          </div>

          {/* Content */}
          <div>

            <Section title="1. Aceptación de los términos">
              <p>
                Al acceder y utilizar la plataforma Arepa Builder (sitio web,
                aplicación móvil y panel de administración), aceptas estos
                Términos y Condiciones en su totalidad. Si no estás de acuerdo,
                debes dejar de usar el servicio.
              </p>
            </Section>

            <Section title="2. Descripción del servicio">
              <p>
                Arepa Builder es una plataforma de software para restaurantes que
                incluye:
              </p>
              <ul>
                <li>
                  <strong>App móvil (iOS y Android):</strong> permite a los clientes
                  del restaurante consultar el menú, realizar pedidos y efectuar
                  pagos con tarjeta.
                </li>
                <li>
                  <strong>Panel de administración web:</strong> permite al restaurante
                  gestionar su menú, pedidos, cocina y analítica de ventas en tiempo
                  real.
                </li>
              </ul>
              <p>
                Arepa Builder actúa como proveedor tecnológico. El restaurante es
                el responsable de los productos, precios, tiempos de entrega y
                atención al cliente final.
              </p>
            </Section>

            <Section title="3. Registro y cuentas">
              <p>
                El restaurante debe proporcionar información veraz al registrarse.
                Es responsable de mantener la confidencialidad de sus credenciales
                de acceso al panel. Los usuarios finales crean cuentas con correo
                y contraseña a través de la app.
              </p>
              <p>
                Arepa Builder se reserva el derecho de suspender cuentas que
                incumplan estos términos o que realicen un uso fraudulento del
                servicio.
              </p>
            </Section>

            <Section title="4. Precio, comisiones y permanencia">
              <ul>
                <li>
                  Cada empresa dispone de una instalación independiente, con su
                  propio dominio, base de datos y cuentas de proveedores. Los
                  cobros a los clientes finales se procesan a través de la cuenta
                  de pagos del propio restaurante (por ejemplo,{" "}
                  <strong>Stripe, Inc.</strong>).
                </li>
                <li>
                  La creación de la aplicación, la configuración del dominio, el
                  backend y el mantenimiento mensual están incluidos, sin cuota
                  de alta ni cuota de mantenimiento.
                </li>
                <li>
                  Arepa Builder cobra una <strong>comisión del 5 %</strong> sobre el
                  importe total de cada pedido cobrado a través de la plataforma,
                  con cualquier forma de pago. No se computan los pedidos
                  cancelados ni los pendientes de verificar.
                </li>
                <li>
                  Se aplica un <strong>mínimo de 50 € al mes</strong> cuando la
                  comisión del mes no alcanza esa cifra. El primer mes se
                  prorratea según los días de servicio. Las ventas en otra
                  moneda se liquidan con el mismo porcentaje, por separado.
                </li>
                <li>
                  El contrato tiene una <strong>permanencia de 12 meses</strong>. Si
                  la empresa causa baja antes, abonará la parte del coste de
                  implantación indicada en su contrato.
                </li>
                <li>
                  La comisión se liquida y factura mensualmente. Las devoluciones
                  o anulaciones posteriores al cierre de un mes se regularizan en
                  la factura siguiente. Los importes no incluyen IVA.
                </li>
                <li>
                  Las tarifas de terceros (procesador de pagos, SMS y, salvo que
                  el contrato indique otra cosa, las cuentas de las tiendas de
                  aplicaciones) corren a cargo de la empresa. Para negocios con
                  ventas inferiores a 1.500 € al mes se podrá acordar una cuota
                  de alta en la propuesta.
                </li>
              </ul>
            </Section>

            <Section title="5. Uso aceptable">
              <p>Queda prohibido:</p>
              <ul>
                <li>Usar la plataforma para actividades ilegales o fraudulentas.</li>
                <li>
                  Introducir información falsa en el menú o en los datos del
                  restaurante.
                </li>
                <li>
                  Intentar acceder sin autorización a cuentas ajenas o a la
                  infraestructura de Arepa Builder.
                </li>
                <li>
                  Realizar ingeniería inversa, copiar o redistribuir el software.
                </li>
              </ul>
            </Section>

            <Section title="6. Disponibilidad del servicio">
              <p>
                Arepa Builder se compromete a mantener una disponibilidad del
                servicio igual o superior al 99% mensual. Las interrupciones
                programadas por mantenimiento se comunicarán con antelación.
                No nos hacemos responsables de caídas causadas por terceros
                (proveedores de hosting, red móvil, Stripe, etc.).
              </p>
            </Section>

            <Section title="7. Propiedad intelectual">
              <p>
                Todo el software, diseño, código fuente, marca y contenidos de
                Arepa Builder son propiedad exclusiva de sus desarrolladores.
                El restaurante conserva la propiedad de su menú, imágenes y
                datos de negocio cargados en la plataforma.
              </p>
            </Section>

            <Section title="8. Limitación de responsabilidad">
              <p>
                Arepa Builder no será responsable de pérdidas de negocio,
                pérdida de datos, daños indirectos o consecuentes derivados del
                uso o la imposibilidad de uso de la plataforma, salvo en casos
                de dolo o negligencia grave por nuestra parte.
              </p>
            </Section>

            <Section title="9. Modificaciones del servicio">
              <p>
                Podemos actualizar, modificar o discontinuar funcionalidades del
                servicio con un preaviso mínimo de 30 días cuando el cambio sea
                sustancial. Las mejoras menores pueden publicarse sin previo aviso.
              </p>
            </Section>

            <Section title="10. Resolución del contrato">
              <p>
                El restaurante puede cancelar el servicio en cualquier momento
                notificándolo por escrito. Arepa Builder puede resolver el
                contrato de forma inmediata ante incumplimiento grave de estos
                términos.
              </p>
            </Section>

            <Section title="11. Ley aplicable y jurisdicción">
              <p>
                Estos términos se rigen por la legislación española. Para cualquier
                controversia, las partes se someten a los juzgados y tribunales de
                España, sin perjuicio del fuero que corresponda al usuario final
                como consumidor.
              </p>
            </Section>

            <Section title="12. Contacto">
              <p>
                Para consultas sobre estos términos, escríbenos a{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>{" "}
                o llámanos al{" "}
                <a href="tel:+34678361168">+34 678 361 168</a>.
              </p>
            </Section>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-[#17233A] font-display mb-4 pb-2 border-b border-[#E4E7EC]">
        {title}
      </h2>
      <div className="text-[#778397] leading-relaxed space-y-3 [&_a]:text-[#063477] [&_a]:underline [&_a]:underline-offset-2 [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_strong]:text-[#17233A]">
        {children}
      </div>
    </div>
  );
}
