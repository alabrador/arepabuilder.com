# arepabuilder.com

Sitio principal de Arepa Builder: app, kiosko y panel de gestion.

## Desarrollo

```bash
npm install
npm run dev
```

## Kiosko

La seccion `/#kiosko` muestra un kiosko vertical de suelo con dos parales,
carcasa metalica, base, ranura de tickets y terminal representado visualmente.
El modelo se dibuja con Three.js y se carga al acercarse a la seccion.
Las ocho capturas originales se encuentran en `public/images/kiosk/`:
bienvenida, idioma, modalidad, categorias, productos, carrito, pago y confirmacion.

La demostracion permite recorrer las capturas desde la pantalla, reproducir
el flujo, pausarlo, volver y ampliar la pantalla. No envia pedidos, pagos,
SMS ni datos de tarjetas a ninguna API. Los importes y el pedido mostrados
son los de las capturas, no un carrito conectado al backend. Sin WebGL,
se conserva la pantalla interactiva y una carcasa alternativa en CSS.

Mantiene las fuentes y colores del sitio. La animacion respeta la preferencia
de movimiento reducido y la reproduccion se suspende fuera de la seccion.

## Verificacion

```bash
npm run lint
npm run build
npm run test:ui
```

Las pruebas de Playwright revisan escritorio, tablet y movil, las ocho
capturas, el render no vacio del kiosko, la navegacion tactil, la vista
ampliada y la alternativa sin WebGL. Guardan capturas en `test-results/`.
