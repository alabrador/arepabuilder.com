import type { Metadata } from "next";
import { CONTACT, STORE_LINKS } from "./content";
import { PLATFORM } from "./platform";

export const BASE_URL = "https://www.arepabuilder.com";
export const SEO_TITLE = "Arepa Builder | Kiosko, backend y apps iOS y Android";
export const SEO_DESCRIPTION = "Kiosko, backend y apps iOS y Android para tu negocio. Instalación propia con dominio y backend, todo incluido: solo pagas un 5 % por venta.";
export const SOCIAL_IMAGE = {
  url: "/images/arepa-builder-social.png",
  width: 1200,
  height: 630,
  alt: "Arepa Builder: kiosko, backend y aplicaciones móviles",
};

export function createPageMetadata(path = "/", title = SEO_TITLE, description = SEO_DESCRIPTION): Metadata {
  const pageTitle = path === "/" ? title : `${title} | Arepa Builder`;
  return {
    metadataBase: new URL(BASE_URL),
    title: { absolute: pageTitle },
    description,
    applicationName: "Arepa Builder",
    category: "software",
    authors: [{ name: "Arepa Builder" }],
    creator: "Arepa Builder",
    publisher: "Arepa Builder",
    keywords: ["app de pedidos", "software para restaurantes", "gestión de pedidos", "panel de cocina", "app para negocios de comida", "app para areperías", "pedidos para llevar", "pedidos a domicilio", "gestión de ventas", "app iOS y Android", "Bizum", "Pago Móvil Venezuela", "app propia para restaurante", "kiosko de autoservicio", "sin cuota de alta", "todo incluido", "comisión por venta"],
    alternates: { canonical: path },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: { type: "website", locale: "es_ES", url: path, siteName: "Arepa Builder", title: pageTitle, description, images: [SOCIAL_IMAGE] },
    twitter: { card: "summary_large_image", title: pageTitle, description, images: [SOCIAL_IMAGE] },
    icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/images/app-icon.png", type: "image/png", sizes: "512x512" }], apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }] },
    appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Arepa Builder" },
  };
}

/** Commercial offer, kept in sync with BusinessModel and /terminos. */
export const OFFER = {
  "@type": "Offer", "@id": `${BASE_URL}/#offer`,
  name: "Instalación propia todo incluido",
  description: "Creación de la aplicación, dominio, backend y mantenimiento incluidos, sin cuota de alta. Comisión del 5 % por venta con un mínimo de 50 € al mes y permanencia de 12 meses. IVA no incluido.",
  url: `${BASE_URL}/#modelo`,
  priceCurrency: "EUR",
  price: "0",
  availability: "https://schema.org/InStock",
  eligibleRegion: { "@type": "Country", name: "ES" },
  priceSpecification: [
    { "@type": "UnitPriceSpecification", name: "Cuota de alta", price: "0", priceCurrency: "EUR", valueAddedTaxIncluded: false },
    { "@type": "UnitPriceSpecification", name: "Mínimo mensual (si el 5 % por venta no lo alcanza)", price: "50", priceCurrency: "EUR", unitCode: "MON", valueAddedTaxIncluded: false },
  ],
  seller: { "@id": `${BASE_URL}/#organization` },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": `${BASE_URL}/#organization`,
      name: "Arepa Builder", url: BASE_URL,
      description: "Plataforma de kiosko, backend y aplicaciones móviles para restaurantes y negocios de comida.",
      logo: `${BASE_URL}/images/logo-horizontal.png`,
      email: CONTACT.email,
      contactPoint: { "@type": "ContactPoint", telephone: CONTACT.phone, email: CONTACT.email, contactType: "sales", availableLanguage: ["Spanish"] },
    },
    {
      "@type": "WebSite", "@id": `${BASE_URL}/#website`,
      name: "Arepa Builder", url: BASE_URL, description: SEO_DESCRIPTION, inLanguage: "es",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
  ],
};

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage", "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL, name: SEO_TITLE, description: SEO_DESCRIPTION,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      hasPart: PLATFORM.map(product => ({ "@type": "WebPage", "@id": `${BASE_URL}/${product.slug}#webpage`, url: `${BASE_URL}/${product.slug}`, name: product.title, description: product.description })),
    },
    {
      "@type": "SoftwareApplication", "@id": `${BASE_URL}/#software`,
      name: "Arepa Builder", url: BASE_URL, description: SEO_DESCRIPTION,
      applicationCategory: "BusinessApplication", operatingSystem: "iOS, Android, Web",
      image: `${BASE_URL}${SOCIAL_IMAGE.url}`,
      screenshot: [`${BASE_URL}/images/kiosk/welcome.png`, `${BASE_URL}/images/admin/login.webp`, `${BASE_URL}/images/app/app1.png`, `${BASE_URL}/images/admin/pedidos.png`, `${BASE_URL}/images/admin/cocina.png`, `${BASE_URL}/images/admin/dashboard.png`],
      installUrl: [STORE_LINKS.appStore, STORE_LINKS.googlePlay],
      offers: { "@id": `${BASE_URL}/#offer` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      featureList: ["Kiosko de autoservicio conectado a cocina", "App de pedidos con tu marca para iOS y Android", "Pedidos en mesa, para llevar y a domicilio", "Panel de gestión de pedidos y locales", "Tablero de cocina por estados", "Ingresos, ventas y ticket medio", "Tarjeta, Apple Pay y Google Pay con Stripe", "Efectivo, Bizum y Pago Móvil (Venezuela)", "Notificaciones push", "Gestión de carta e ingredientes"],
    },
    {
      "@type": "Service", "@id": `${BASE_URL}/#service`,
      name: "Kiosko, backend y aplicaciones móviles para negocios de comida",
      serviceType: "Software para restaurantes y negocios de comida",
      description: SEO_DESCRIPTION,
      provider: { "@id": `${BASE_URL}/#organization` },
      url: BASE_URL,
      areaServed: "ES",
      offers: OFFER,
    },
  ],
};
