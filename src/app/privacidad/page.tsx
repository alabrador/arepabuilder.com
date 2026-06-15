import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Arepa Builder. Conoce cómo tratamos los datos de tu restaurante y de tus clientes.",
};

export default function Privacidad() {
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
              Política de Privacidad
            </h1>
            <p className="text-[#9A6B20]">
              Última actualización: junio de 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose-custom">

            <Section title="1. Responsable del tratamiento">
              <p>
                El responsable del tratamiento de los datos personales recogidos
                a través de la plataforma Arepa Builder (sitio web y aplicación
                móvil) es <strong>Arepa Builder</strong>, con correo de contacto{" "}
                <a href="mailto:alexanderlabradorg@gmail.com">
                  alexanderlabradorg@gmail.com
                </a>
                .
              </p>
            </Section>

            <Section title="2. Datos que recopilamos">
              <p>Recopilamos los siguientes datos según el uso de la plataforma:</p>
              <ul>
                <li>
                  <strong>Usuarios finales (clientes del restaurante):</strong> nombre,
                  correo electrónico, número de teléfono, dirección de entrega e
                  historial de pedidos.
                </li>
                <li>
                  <strong>Restaurantes (administradores):</strong> nombre del negocio,
                  correo electrónico, datos de acceso al panel y configuración del
                  menú.
                </li>
                <li>
                  <strong>Pagos:</strong> los datos de tarjeta son gestionados
                  exclusivamente por Stripe, Inc. Arepa Builder nunca almacena
                  datos bancarios en sus servidores.
                </li>
              </ul>
            </Section>

            <Section title="3. Finalidad del tratamiento">
              <ul>
                <li>Gestionar y procesar los pedidos realizados a través de la app.</li>
                <li>Enviar notificaciones push sobre el estado del pedido.</li>
                <li>Permitir al restaurante gestionar su menú, pedidos y clientes.</li>
                <li>Mejorar el funcionamiento y la seguridad de la plataforma.</li>
                <li>Atender solicitudes de soporte o contacto.</li>
              </ul>
            </Section>

            <Section title="4. Base legal">
              <p>
                El tratamiento se basa en la ejecución del contrato de servicio
                entre el restaurante y Arepa Builder, y en el consentimiento
                del usuario final al crear su cuenta y realizar pedidos.
              </p>
            </Section>

            <Section title="5. Conservación de datos">
              <p>
                Los datos se conservan mientras la cuenta esté activa. Al solicitar
                la eliminación de cuenta, los datos personales se borran en un plazo
                máximo de 30 días, salvo obligación legal de conservarlos.
              </p>
            </Section>

            <Section title="6. Terceros y transferencias">
              <p>Los únicos terceros con acceso a datos son:</p>
              <ul>
                <li>
                  <strong>Stripe, Inc.</strong> — procesador de pagos (
                  <a href="https://stripe.com/es/privacy" target="_blank" rel="noopener noreferrer">
                    política de privacidad de Stripe
                  </a>
                  ).
                </li>
                <li>
                  <strong>Vercel, Inc.</strong> — infraestructura de hosting del panel
                  admin y la API.
                </li>
                <li>
                  <strong>Expo / EAS</strong> — servicio de envío de notificaciones
                  push a dispositivos móviles.
                </li>
              </ul>
              <p>
                No vendemos ni cedemos datos personales a terceros con fines
                comerciales.
              </p>
            </Section>

            <Section title="7. Derechos del usuario">
              <p>
                Puedes ejercer tus derechos de acceso, rectificación, supresión,
                portabilidad y limitación del tratamiento enviando un correo a{" "}
                <a href="mailto:alexanderlabradorg@gmail.com">
                  alexanderlabradorg@gmail.com
                </a>
                . Respondemos en un plazo máximo de 15 días hábiles.
              </p>
            </Section>

            <Section title="8. Cookies">
              <p>
                El sitio web utiliza únicamente cookies técnicas necesarias para
                el funcionamiento de la sesión. No se usan cookies de seguimiento
                ni publicidad de terceros.
              </p>
            </Section>

            <Section title="9. Seguridad">
              <p>
                Aplicamos medidas técnicas y organizativas para proteger los datos:
                comunicaciones cifradas mediante HTTPS/TLS, acceso restringido por
                roles y contraseñas con hash. La base de datos está alojada en
                infraestructura segura con copias de seguridad periódicas.
              </p>
            </Section>

            <Section title="10. Cambios en esta política">
              <p>
                Notificaremos cualquier cambio relevante por correo o mediante aviso
                en la plataforma con al menos 15 días de antelación. El uso
                continuado tras la notificación implica aceptación.
              </p>
            </Section>

            <Section title="11. Contacto">
              <p>
                Para cualquier consulta sobre privacidad puedes escribirnos a{" "}
                <a href="mailto:alexanderlabradorg@gmail.com">
                  alexanderlabradorg@gmail.com
                </a>{" "}
                o llamarnos al{" "}
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
