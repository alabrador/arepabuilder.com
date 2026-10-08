export const KIOSK_STEPS = [
  { id: "welcome", title: "Bienvenida", caption: "El primer toque.", image: "/images/kiosk/welcome.png", height: 2868, action: "Toca para comenzar", hotspot: [19, 65, 62, 8] },
  { id: "language", title: "Idioma", caption: "Cada cliente, en su idioma.", image: "/images/kiosk/language.png", height: 2868, action: "Seleccionar Español", hotspot: [3, 56, 46, 14] },
  { id: "service", title: "Tipo de pedido", caption: "Aquí o para llevar. Tú eliges.", image: "/images/kiosk/service.png", height: 2868, action: "Elegir para llevar", hotspot: [3, 37, 46, 38] },
  { id: "categories", title: "La carta", caption: "Toda tu carta, a un toque.", image: "/images/kiosk/categories.png", height: 2868, action: "Ver todo el menú", hotspot: [3, 47, 45, 6] },
  { id: "products", title: "Productos", caption: "El sabor entra por los ojos.", image: "/images/kiosk/products.png", height: 2868, action: "Añadir productos al pedido", hotspot: [34, 35, 14, 6] },
  { id: "cart", title: "Tu pedido", caption: "Todo listo para confirmar.", image: "/images/kiosk/cart.png", height: 2901, action: "Continuar pedido", hotspot: [3, 82, 94, 7] },
  { id: "payment", title: "Pago", caption: "Un último toque. Pedido en marcha.", image: "/images/kiosk/payment.png", height: 3105, action: "Simular pago", hotspot: [3, 77, 94, 6] },
  { id: "confirmation", title: "Confirmación", caption: "Tu cocina ya tiene el pedido.", image: "/images/kiosk/confirmation.png", height: 2868, action: "Hacer otro pedido", hotspot: [3, 48, 94, 7] },
] as const;

export const DEMO_INTERVAL = 4200;
