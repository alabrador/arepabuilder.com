// Todo el copy y los datos de la landing. Los textos entre [CORCHETES] son
// placeholders pendientes: no los sustituyas por datos inventados.

export type NavLink = { label: string; href: string };

export const IMAGES = {
  logo: { src: "/images/logo-horizontal.png", width: 1400, height: 429 },
  // Capturas reales de la app (1320×2868). Se enmarcan con <Phone>.
  inicio: "/images/app/app1.png",
  carta: "/images/app/app2.png",
  arepas: "/images/app/app3.png",
  carrito: "/images/app/app5.png",
  seguimiento: "/images/app/app8.png",
} as const;

export const SCREEN = { width: 1320, height: 2868 } as const;

export const CONTACT = {
  email: "app@arepabuilder.com",
  phone: "+34 678 361 168",
  phoneHref: "tel:+34678361168",
} as const;

export const DEMO_HREF =
  "https://wa.me/34678361168?text=Hola%2C%20me%20interesa%20una%20demo%20de%20Arepa%20Builder";

export const PRICE = "[TU PRECIO]";

export const STORE_LINKS = {
  appStore: "https://apps.apple.com/es/app/arepa-builder/id6779318796",
  googlePlay: "https://play.google.com/apps/test/com.arepabuilder.app/20",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Cómo funciona", href: "/#como" },
  { label: "La app", href: "/#app" },
  { label: "Panel de gestión", href: "/#gestion" },
  { label: "Haz la cuenta", href: "/#cuenta" },
];

export const TAPE_BACK = [
  "Android",
  "iOS",
  "Pedidos directos",
  "Pagos con Stripe",
  "Notificaciones push",
  "Panel de gestión",
];

export const TAPE_FRONT = [
  "Arepas",
  "Cachapas",
  "Empanadas",
  "Tequeños",
  "0% comisión",
  "Tu marca",
  "Tus clientes",
];

export type LayerKind = "top" | "aguacate" | "carne" | "queso" | "caraotas" | "bottom";

export type Layer = { kind: LayerKind; title: string; description: string };

export const LAYERS: Layer[] = [
  {
    kind: "top",
    title: "Tu marca",
    description: "Tu nombre, tu logo y tus colores, publicados en App Store y Google Play.",
  },
  {
    kind: "aguacate",
    title: "Constructor de platos",
    description:
      "Cada cliente arma su arepa ingrediente a ingrediente, con extras y precio al instante.",
  },
  {
    kind: "carne",
    title: "Pedidos al instante",
    description:
      "Para llevar, en mesa o a domicilio: entran directos a tu cocina, sin intermediarios.",
  },
  {
    kind: "queso",
    title: "Opciones de pago",
    description:
      "Tarjeta, Apple Pay y Google Pay con Stripe. También efectivo, Bizum y Pago Móvil (Venezuela).",
  },
  {
    kind: "caraotas",
    title: "Notificaciones push",
    description: "Avisa del estado de cada pedido y lanza promociones cuando tú quieras.",
  },
  {
    kind: "bottom",
    title: "Panel de gestión",
    description: "Carta, horarios, locales y ventas del día, desde cualquier navegador.",
  },
];

export type Step = { image: string; alt: string; title: string; description: string };

export const ADMIN_FEATURES = [
  {
    label: "Pedidos",
    title: "Cada pedido, en su sitio.",
    description: "Para llevar, en mesa o a domicilio: consulta tus pedidos desde un único panel y encuentra lo que necesitas sin perder el ritmo del servicio.",
    benefits: ["Filtra por estado y por local.", "Consulta el importe, el pago y el detalle de cada pedido."],
    image: "/images/admin/pedidos.png",
    height: 1530,
    alt: "Panel de pedidos de Arepa Builder con filtros por estado y local, modalidad, importe y estado del pago",
  },
  {
    label: "Cocina",
    title: "Una cocina que va al ritmo.",
    description: "Dale a tu equipo una vista clara del servicio. Un tablero organizado por estados para saber qué acaba de entrar, qué se está preparando y qué está listo para salir.",
    benefits: ["Recibido, preparando y listo de un vistazo.", "Vista de cocina con selector de locales."],
    image: "/images/admin/cocina.png",
    height: 1418,
    alt: "Tablero de cocina de Arepa Builder con columnas Recibido, Preparando y Listo y selector de locales",
  },
  {
    label: "Ventas",
    title: "Conoce tus números. Decide mejor.",
    description: "Ten a mano los ingresos, los pedidos y el ticket medio. Sigue la evolución de tu negocio y consulta las ventas de tus locales desde el mismo panel.",
    benefits: ["Compara la actividad por días, semanas o meses.", "Consulta pedidos recientes y el resumen del día."],
    image: "/images/admin/dashboard.png",
    height: 2538,
    alt: "Dashboard de Arepa Builder con ingresos, pedidos, ticket medio, evolución de ventas y pedidos recientes",
  },
] as const;

export const STEPS: Step[] = [
  {
    image: IMAGES.carta,
    alt: "Pantalla de la app con la carta por categorías",
    title: "Explora la carta",
    description: "Bebidas, arepas, empanadas, cachapas… por categorías.",
  },
  {
    image: IMAGES.arepas,
    alt: "Pantalla de la app con el listado de arepas",
    title: "Elige su arepa",
    description: "Foto, ingredientes y precio de cada plato a la vista.",
  },
  {
    image: IMAGES.carrito,
    alt: "Pantalla del carrito con notas del pedido",
    title: "Confirma y paga",
    description: "Ajusta cantidades, añade notas y paga en segundos.",
  },
  {
    image: IMAGES.seguimiento,
    alt: "Pantalla de seguimiento del pedido en tiempo real",
    title: "Sigue el pedido",
    description: "Recibido, en preparación, listo: todo en tiempo real.",
  },
];

export type TicketRow = { label: string; value: string; strong?: boolean };

export const TICKET_PLATFORM: TicketRow[] = [
  { label: "Pedido", value: "[IMPORTE]" },
  { label: "Comisión", value: "−[X] %" },
  { label: "Cliente", value: "SUYO" },
  { label: "Marca", value: "SUYA" },
];

export const TICKET_OURS: TicketRow[] = [
  { label: "Pedido", value: "[IMPORTE]" },
  { label: "Comisión", value: "0,00 €", strong: true },
  { label: "Cliente", value: "TUYO", strong: true },
  { label: "Marca", value: "LA TUYA", strong: true },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  { title: "Producto", links: NAV_LINKS },
  {
    title: "Contacto",
    links: [
      { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      { label: CONTACT.phone, href: CONTACT.phoneHref },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Aviso legal", href: "/terminos" },
    ],
  },
];
