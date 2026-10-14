# arepabuilder.com

Sitio comercial de Arepa Builder: presenta la app de pedidos, el kiosko de autoservicio y el backend de gestión, y publica el modelo de negocio. Desplegado en Vercel desde `main` en `https://www.arepabuilder.com`.

Documentación revisada el **14 de octubre de 2026**, sobre la versión **1.0.0** de [package.json](package.json).

## Modelo De Negocio Publicado

Cada empresa recibe una **instalación propia** (dominio, backend, base de datos y proveedores separados) en una de tres modalidades: Kiosko + Backend, Aplicación + Backend o Completo.

| Concepto | Condición publicada |
| --- | --- |
| Incluido sin cuota de alta | Creación de la app, dominio, backend y mantenimiento mensual |
| Comisión | 5 % de cada venta cobrada, con cualquier forma de pago (50 € por cada 1.000 € vendidos) |
| Mínimo mensual | 50 €, solo si el 5 % no alcanza esa cifra; primer mes prorrateado |
| Permanencia | 12 meses |
| Aparte | IVA, tarifas del procesador de pagos, consumo de SMS y hardware del kiosko |
| Admisión | Ventas previstas desde 1.500 € al mes; por debajo, propuesta con cuota de alta |

Las condiciones aparecen en la sección `#modelo` ([BusinessModel.tsx](src/components/landing/BusinessModel.tsx)), en el CTA final, en las preguntas de precio de cada producto y en [/terminos](src/app/terminos/page.tsx) (sección 4). Al cambiar una condición hay que actualizar esos cuatro sitios, los datos estructurados `OFFER` de [seo.ts](src/lib/seo.ts) y [public/llms.txt](public/llms.txt). El cálculo real de la comisión vive en el backend (`arepa-builder-admin`, página *Comisión*).

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada: hero, recorrido de la app, kiosko 3D interactivo (`#kiosko`), backend (`#gestion`), modelo de negocio (`#modelo`) y CTA |
| `/kiosko` | Producto kiosko: tótem de autoservicio realista con las 8 pantallas reales en bucle, funciones, galería, puesta en marcha y preguntas |
| `/backend` | Producto backend y panel de gestión |
| `/aplicaciones` | Producto apps iOS y Android |
| `/terminos`, `/privacidad` | Textos legales; contacto `app@arepabuilder.com` (constante `CONTACT.email`) |
| `/api/cron/sitemap` | Reenvío diario de la sitemap a Google Search Console |

Las tres páginas de producto comparten [PlatformPage.tsx](src/components/landing/PlatformPage.tsx); su contenido está en [platform.ts](src/lib/platform.ts) y [platform-detail.ts](src/lib/platform-detail.ts).

## Kioskos

- **Portada (`#kiosko`)**: kiosko vertical en Three.js ([KioskDevice.tsx](src/components/brand/KioskDevice.tsx)), cargado al acercarse a la sección. La demostración recorre las ocho capturas de `public/images/kiosk/` (bienvenida, idioma, modalidad, categorías, productos, carrito, pago y confirmación), con reproducir, pausar y ampliar. No envía pedidos, pagos ni SMS. Sin WebGL usa una carcasa CSS.
- **`/kiosko`**: tótem dibujado en HTML/CSS ([KioskTotem.tsx](src/components/brand/KioskTotem.tsx)), sin WebGL para que la cabecera cargue al instante: cámara, marco con reflejo, módulo de marca, impresora, datáfono y pedestal. Muestra las capturas reales en bucle.

Ambos respetan `prefers-reduced-motion`.

## SEO

- Metadatos, canonical, Open Graph y Twitter por página con `createPageMetadata` ([seo.ts](src/lib/seo.ts)).
- Datos estructurados: `Organization`, `WebSite`, `SoftwareApplication`, `Service` con `Offer` (alta 0 €, mínimo 50 €/mes), `BreadcrumbList` y `FAQPage` en las páginas de producto.
- [sitemap.ts](src/app/sitemap.ts) con `lastModified` (actualizar `UPDATED` cuando cambie el contenido), [robots.ts](src/app/robots.ts) y [public/llms.txt](public/llms.txt) para buscadores con IA.
- Reenvío diario de la sitemap: Vercel Cron (`vercel.json`, 06:00 UTC) llama a `/api/cron/sitemap`, que usa la API de Search Console ([search-console.ts](src/lib/search-console.ts)). Equivale a pulsar *Enviar* en Search Console; Google decide cuándo rastrear.

### Variables De Entorno (Vercel)

| Variable | Uso |
| --- | --- |
| `CRON_SECRET` | Autoriza la llamada del cron (configurada) |
| `GSC_SERVICE_ACCOUNT_JSON` | JSON de la cuenta de servicio de Google con la API de Search Console activada; la cuenta debe ser propietaria de la propiedad |
| `GSC_SITE_URL` | Propiedad de Search Console: `sc-domain:arepabuilder.com` o `https://www.arepabuilder.com/` |

Sin las dos últimas, el endpoint responde 503 y no envía nada.

## Desarrollo

```bash
npm ci
npm run dev
```

## Verificación

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run test:ui
```

Las pruebas de Playwright revisan escritorio, tablet y móvil, las ocho capturas, el render del kiosko 3D, la navegación táctil, la vista ampliada y la alternativa sin WebGL. Guardan capturas en `test-results/`.

## Versionado

La versión está en [package.json](package.json); las etiquetas siguen `vX.Y.Z` y las notas se publican en [GitHub Releases](https://github.com/alabrador/arepabuilder.com/releases).
