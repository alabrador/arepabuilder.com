import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de Arepa Builder. Condiciones del servicio para restaurantes y usuarios finales.",
};

export default function Terminos() {
  return (
    <>
      <Navbar solid />
      <main className="bg-[#FEFAF3] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C05010] mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-black text-[#2E1600] mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-[#9A6B20]">
              Última actualización: junio de 2025
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

            <Section title="4. Pagos y comisiones">
              <ul>
                <li>
                  Los cobros a los clientes finales se procesan a través de{" "}
                  <strong>Stripe, Inc.</strong> Los fondos son transferidos
                  directamente a la cuenta del restaurante.
                </li>
                <li>
                  Arepa Builder <strong>no cobra comisión por pedido</strong>. Las
                  únicas tarifas aplicables son las propias de Stripe por
                  procesamiento de tarjeta.
                </li>
                <li>
                  El precio del servicio de software se acuerda individualmente con
                  cada restaurante según el plan contratado.
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
                <a href="mailto:alexanderlabradorg@gmail.com">
                  alexanderlabradorg@gmail.com
                </a>{" "}
                o llámanos al{" "}
                <a href="tel:+34678361168">+34 678 361 168</a>.
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
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
      <h2 className="text-xl font-bold text-[#2E1600] font-[var(--font-playfair)] mb-4 pb-2 border-b border-[#DEC070]/40">
        {title}
      </h2>
      <div className="text-[#6B4C1E] leading-relaxed space-y-3 [&_a]:text-[#C05010] [&_a]:underline [&_a]:underline-offset-2 [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_strong]:text-[#2E1600]">
        {children}
      </div>
    </div>
  );
}
