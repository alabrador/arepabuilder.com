import { ADMIN_FEATURES, IMAGES, STEPS } from './content';
import { KIOSK_STEPS } from './kiosk-demo';

export type ProductCapture = { image: string; title: string; description: string; alt: string; width: number; height: number };
const kioskDescriptions = [
  'La bienvenida presenta la marca y una acción clara para empezar. La experiencia vuelve a este punto cuando termina el pedido.',
  'El cliente selecciona el idioma antes de recorrer la carta. Puede empezar con una interfaz que entiende desde el primer toque.',
  'Comer en el local o pedir para llevar. La elección acompaña al pedido y puede revisarse antes de confirmar.',
  'Las categorías organizan la oferta del negocio para encontrar cada familia de productos sin recorrer una lista interminable.',
  'Fotografía, nombre y precio ayudan a elegir. Los productos e imágenes se gestionan desde el catálogo del backend.',
  'El carrito reúne la selección y permite revisar cantidades e importe antes de continuar al pago.',
  'El cliente completa el pago con tarjeta en pantalla mediante Stripe. El backend valida el importe y la confirmación del cobro.',
  'Con el pago confirmado, el cliente ve la confirmación y el equipo recibe el pedido para prepararlo. El siguiente cliente puede iniciar su recorrido.',
];
export const PRODUCT_DETAILS = {
  kiosko: {
    eyebrow: 'Autoservicio conectado', headline: ['Tu carta.', 'A un toque.'],
    summary: ['Pantalla táctil', 'Pago en pantalla', 'Conectado a cocina'],
    galleryTitle: 'Ocho pantallas. Un recorrido claro.',
    galleryIntro: 'Así pasa un cliente de la bienvenida a la confirmación. Explora las capturas reales y amplía cualquier pantalla para ver sus detalles.',
    captures: KIOSK_STEPS.map((step, i) => ({ image: step.image, title: step.title, description: kioskDescriptions[i], alt: `Kiosko Arepa Builder: ${step.title}`, width: 1320, height: step.height })),
    operationTitle: 'El cliente pide. Tu equipo prepara.',
    operationIntro: 'El kiosko añade un punto de pedido dentro del local y comparte el catálogo y la gestión con el backend. Cocina y caja mantienen su propio espacio de trabajo.',
    roles: [['Cliente', 'Explora la carta y revisa el pedido antes del pago. No necesita descargar la app.'], ['Cocina y caja', 'Reciben los pedidos confirmados en la cola operativa y actualizan su estado durante el servicio.'], ['Administración', 'Gestiona el catálogo, habilita el kiosko y configura pagos, moneda e inactividad.']],
    launch: [['Prepara el equipo', 'Pantalla táctil compatible, conexión a internet y navegador. Se revisa la instalación del equipo en el local.'], ['Configura el servicio', 'Activa el usuario de kiosko, la carta y los pagos con Stripe desde el backend. Ajusta el tiempo de inactividad.'], ['Revisa el recorrido', 'Comprueba productos, importes, confirmación y llegada del pedido a cocina antes de abrir el autoservicio.']],
    note: 'Los avisos SMS son opcionales y requieren el servicio de mensajería configurado. El pago mostrado se realiza en pantalla; los lectores físicos requieren revisar su compatibilidad por separado.',
    cta: 'Descubre el kiosko en acción.',
  },
  backend: {
    eyebrow: 'El centro de tu operación', headline: ['Cada pedido.', 'Bajo control.'],
    summary: ['Pedidos y cocina', 'Ventas y catálogo', 'Acceso por funciones'],
    galleryTitle: 'Tu negocio, a la vista.',
    galleryIntro: 'Del acceso del equipo al seguimiento del servicio. Estas son las pantallas reales de administración, con el detalle que necesitas para entender cómo se trabaja.',
    captures: ADMIN_FEATURES.map(feature => ({ image: feature.image, title: feature.label, description: feature.description, alt: feature.alt, width: 2880, height: feature.height })),
    operationTitle: 'Un panel. Distintas responsabilidades.',
    operationIntro: 'Cada persona entra con una cuenta y trabaja según su función. La información de pedidos conecta la atención de caja con el ritmo de cocina.',
    roles: [['Administración', 'Configura el negocio, mantiene la carta, gestiona usuarios y consulta ventas e informes.'], ['Caja', 'Consulta el detalle de los pedidos y su estado de pago con los permisos de su función.'], ['Cocina', 'Organiza la preparación con estados claros: recibido, preparando y listo.']],
    launch: [['Define tu negocio', 'Revisa locales, horarios, moneda, impuestos y datos comerciales para que la configuración responda a tu operación.'], ['Organiza catálogo y equipo', 'Añade categorías, productos, imágenes y precios. Crea las cuentas y asigna las funciones del personal.'], ['Conecta los canales', 'Configura los medios de pago y revisa el recorrido de los pedidos de la app y el kiosko hasta cocina.']],
    note: 'El panel se utiliza desde un navegador con conexión a internet. El acceso está reservado a usuarios autorizados; el MFA por SMS de la cuenta admin se aplica cuando está habilitado.',
    cta: 'Conoce tu próximo panel de gestión.',
  },
  aplicaciones: {
    eyebrow: 'Tu negocio en su teléfono', headline: ['Tu marca.', 'Siempre a mano.'],
    summary: ['iOS y Android', 'Carta y pedidos', 'Seguimiento del estado'],
    galleryTitle: 'De la primera visita al pedido listo.',
    galleryIntro: 'Una experiencia con la marca del negocio, desde el inicio hasta el seguimiento. Explora las pantallas reales y descubre cómo acompaña la aplicación a tus clientes en cada paso.',
    captures: [
      { image: IMAGES.inicio, title: 'Un inicio con tu marca', description: 'Una primera pantalla que presenta la identidad del negocio y abre el recorrido de compra.', alt: 'Inicio de la aplicación Arepa Builder', width: 1320, height: 2868 },
      ...STEPS.map(step => ({ image: step.image, title: step.title, description: step.description, alt: step.alt, width: 1320, height: 2868 })),
    ],
    operationTitle: 'Del teléfono del cliente a tu cocina.',
    operationIntro: 'La aplicación da al cliente su espacio para pedir y consultar el estado. El negocio mantiene el catálogo y coordina la preparación desde el backend.',
    roles: [['Tu cliente', 'Consulta productos, personaliza las opciones disponibles y revisa el carrito antes de confirmar.'], ['Tu equipo', 'Recibe los pedidos y actualiza su estado durante la preparación desde las vistas de gestión.'], ['Tu marca', 'Nombre, logotipo y colores forman parte de la experiencia móvil de tu negocio.']],
    launch: [['Define la identidad', 'Prepara el nombre, logotipo y colores que identificarán la aplicación de tu negocio.'], ['Prepara la oferta', 'Revisa imágenes, productos, extras, modalidades de pedido y opciones de pago desde el backend.'], ['Coordina la publicación', 'La puesta en marcha y la publicación para iOS y Android se coordinan durante la implantación. Consulta la disponibilidad en la demo.']],
    note: 'Las modalidades de pedido y los medios de pago dependen de la configuración del negocio. La disponibilidad de la aplicación y su publicación en las tiendas se revisan durante la implantación.',
    cta: 'Imagina tu negocio en su próxima app.',
  },
} satisfies Record<string, {
  eyebrow: string; headline: string[]; summary: string[]; galleryTitle: string; galleryIntro: string; captures: ProductCapture[];
  operationTitle: string; operationIntro: string; roles: string[][]; launch: string[][]; note: string; cta: string;
}>;
