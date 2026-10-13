export const PLATFORM = [
  {
    slug: 'kiosko', label: 'Kiosko', title: 'Kiosko de autoservicio para restaurantes',
    description: 'Kiosko Arepa Builder: carta digital, pedidos para llevar o comer aquí, pago con tarjeta y conexión con cocina y backend. Descubre cómo funciona.',
    intro: 'Una pantalla para pedir a su ritmo y un equipo que recibe cada pedido confirmado. El kiosko conecta el autoservicio de tu local con la misma gestión de cocina y caja.',
    image: '/images/kiosk/welcome.png', imageAlt: 'Pantalla de bienvenida del kiosko Arepa Builder', portrait: true,
    features: [
      ['Del primer toque al pedido', 'El cliente elige idioma y modalidad, explora las categorías, añade productos y revisa el carrito antes de pagar. Puede pedir para llevar o comer en el local.'],
      ['La carta desde el backend', 'Categorías, imágenes y precios proceden del catálogo del negocio. La configuración de moneda, impuestos y horarios se gestiona desde el panel.'],
      ['Cobro y cocina conectados', 'Stripe procesa el pago con tarjeta en pantalla. Tras confirmar el cobro, el pedido se incorpora a la cola operativa de cocina y caja para su preparación.'],
      ['Avisos y siguiente cliente', 'Con el servicio de SMS configurado, el cliente puede solicitar un aviso cuando su pedido esté listo. El kiosko vuelve a la bienvenida al finalizar y dispone de un tiempo de inactividad configurable.'],
    ],
    questions: [
      ['¿Cuánto cuesta el kiosko?', 'El software, el backend, el dominio y el mantenimiento están incluidos, sin cuota de alta. Solo pagas un 5 % por venta, con un mínimo de 50 € al mes y permanencia de 12 meses. El hardware del kiosko se presupuesta por separado. IVA no incluido.'],
      ['¿Qué necesito para instalar el kiosko?', 'Una pantalla táctil compatible, conexión a internet, un usuario de kiosko y la configuración de Stripe y del kiosko habilitada en el backend. La compatibilidad con lectores físicos se revisa por separado.'],
      ['¿El cliente necesita descargar una aplicación?', 'No. El recorrido se realiza directamente en la pantalla del kiosko. El teléfono solo se solicita si el cliente elige recibir un aviso SMS.'],
      ['¿Dónde gestiona el equipo los pedidos?', 'En el backend de Arepa Builder. Cocina y caja consultan los pedidos confirmados del kiosko con sus permisos de trabajo.'],
    ],
    section: '/#kiosko', sectionLabel: 'Ver el recorrido del kiosko',
  },
  {
    slug: 'backend', label: 'Backend', title: 'Backend y panel de gestión para restaurantes',
    description: 'Backend Arepa Builder: gestiona pedidos, cocina, ventas, carta, usuarios y pagos. Un panel conectado con el kiosko y las aplicaciones para iOS y Android.',
    intro: 'El centro de trabajo de tu negocio. Organiza pedidos, coordina cocina y caja y consulta tus ventas desde un navegador, con acceso según la función de cada persona.',
    image: '/images/admin/login.webp', imageAlt: 'Login real del backend de Arepa Builder', portrait: false,
    features: [
      ['Pedidos y cola de cocina', 'Consulta el detalle, importe y estado de pago de cada pedido. La vista de cocina organiza el trabajo en recibido, preparando y listo, para seguir el servicio de principio a fin.'],
      ['Carta y configuración', 'Gestiona productos, categorías, fotografías y disponibilidad. Ajusta los horarios, impuestos, mesas y datos del negocio desde un mismo panel.'],
      ['Ventas y medios de pago', 'Revisa ingresos, pedidos y ticket medio, consulta la actividad por periodo y genera informes. Configura la moneda de trabajo y los medios de pago disponibles para tu negocio.'],
      ['Usuarios y acceso', 'Administración, caja y cocina trabajan con permisos específicos. La cuenta admin dispone de MFA por SMS cuando está habilitado y recuperación por correo. El kiosko utiliza su propio rol.'],
    ],
    questions: [
      ['¿Cuánto cuesta el backend?', 'El backend, el dominio y el mantenimiento están incluidos, sin cuota de alta ni mensualidad fija. Solo pagas un 5 % por venta, con un mínimo de 50 € al mes y permanencia de 12 meses. IVA no incluido.'],
      ['¿Qué conecta el backend?', 'El catálogo y la gestión operativa de Arepa Builder: aplicaciones móviles, kiosko, cocina y caja. Los pedidos se consultan desde el panel según los permisos del usuario.'],
      ['¿Puede cada persona tener permisos diferentes?', 'Sí. Los roles de administración, caja, cocina y kiosko delimitan las funciones disponibles. Los usuarios se gestionan desde el backend.'],
      ['¿Es necesario instalar el panel?', 'El panel administrativo se utiliza desde un navegador con conexión a internet. El acceso requiere una cuenta autorizada.'],
    ],
    section: '/#gestion', sectionLabel: 'Ver las pantallas del backend',
  },
  {
    slug: 'aplicaciones', label: 'Aplicaciones iOS y Android', title: 'Aplicaciones de pedidos para iOS y Android',
    description: 'Aplicaciones móviles Arepa Builder para iPhone y Android: carta, personalización, carrito, pagos y seguimiento de pedidos, conectados al backend del negocio.',
    intro: 'Tu negocio en el teléfono de tus clientes. Una experiencia de pedidos con tu marca, desde la carta y la elección de productos hasta el pago y el seguimiento.',
    image: '/images/app/app2.png', imageAlt: 'Carta de la aplicación móvil de Arepa Builder', portrait: true,
    features: [
      ['Carta en el teléfono', 'Los clientes exploran categorías, fotografías, ingredientes y precios. La oferta se administra desde el backend para mantener la información del negocio centralizada.'],
      ['Personalización y carrito', 'El cliente elige productos y opciones disponibles, ajusta cantidades y revisa su pedido antes de confirmar. El constructor permite personalizar platos con ingredientes y extras.'],
      ['Modalidades y pagos', 'Pedidos para llevar, en mesa o a domicilio, según la configuración del negocio. Los medios de pago disponibles se presentan durante el proceso de compra.'],
      ['Seguimiento y comunicación', 'El cliente consulta cómo avanza su pedido: recibido, en preparación y listo. Las notificaciones push permiten comunicar novedades y cambios de estado.'],
    ],
    questions: [
      ['¿Cuánto cuesta la aplicación?', 'Creamos y mantenemos tu aplicación sin cuota de alta. Solo pagas un 5 % por venta, con un mínimo de 50 € al mes y permanencia de 12 meses. Las cuentas de las tiendas y las tarifas del procesador de pagos van aparte. IVA no incluido.'],
      ['¿Para qué teléfonos está diseñada?', 'La aplicación móvil de Arepa Builder está diseñada para iOS y Android. Consulta con nosotros la disponibilidad y el proceso de publicación de la aplicación de tu negocio.'],
      ['¿Puede utilizar la marca de mi negocio?', 'Sí. La propuesta de Arepa Builder incluye una aplicación con el nombre, logotipo y colores del negocio. La puesta en marcha y publicación se coordinan durante la implantación.'],
      ['¿Los pedidos llegan al mismo panel que el kiosko?', 'La aplicación y el kiosko forman parte de la misma plataforma. El backend reúne la gestión del catálogo, los pagos y los pedidos para coordinar el servicio.'],
    ],
    section: '/#app', sectionLabel: 'Ver las pantallas de la aplicación',
  },
] as const;
