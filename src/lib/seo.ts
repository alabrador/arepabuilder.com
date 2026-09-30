import type { Metadata } from "next";
import { CONTACT, STORE_LINKS } from "./content";

export const BASE_URL = "https://arepabuilder.com";
export const SEO_TITLE = "Arepa Builder | App de pedidos y gestión para restaurantes";
export const SEO_DESCRIPTION = "Tu app de pedidos para iOS y Android, con tu marca. Gestiona pedidos, cocina, pagos y ventas de tu restaurante o negocio de comida desde un solo panel.";
export const SOCIAL_IMAGE = {
  url: "/images/arepa-builder-social.png",
  width: 1200,
  height: 630,
  alt: "Arepa Builder: tu app de pedidos y tu panel de gestión, con tu marca",
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
    keywords: ["app de pedidos", "software para restaurantes", "gestión de pedidos", "panel de cocina", "app para negocios de comida", "app para areperías", "pedidos para llevar", "pedidos a domicilio", "gestión de ventas", "app iOS y Android", "Bizum", "Pago Móvil Venezuela"],
    alternates: { canonical: path },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: { type: "website", locale: "es_ES", url: path, siteName: "Arepa Builder", title: pageTitle, description, images: [SOCIAL_IMAGE] },
    twitter: { card: "summary_large_image", title: pageTitle, description, images: [SOCIAL_IMAGE] },
    icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/images/app-icon.png", type: "image/png", sizes: "512x512" }], apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }] },
    appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Arepa Builder" },
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": `${BASE_URL}/#organization`,
      name: "Arepa Builder", url: BASE_URL,
      description: "App de pedidos y software de gestión para restaurantes, areperías y negocios de comida.",
      logo: `${BASE_URL}/images/logo-horizontal.png`,
      email: CONTACT.email,
      contactPoint: { "@type": "ContactPoint", telephone: CONTACT.phone, email: CONTACT.email, contactType: "sales", availableLanguage: ["Spanish"] },
    },
    {
      "@type": "WebSite", "@id": `${BASE_URL}/#website`,
      name: "Arepa Builder", url: BASE_URL, description: SEO_DESCRIPTION, inLanguage: "es",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication", "@id": `${BASE_URL}/#software`,
      name: "Arepa Builder", url: BASE_URL, description: SEO_DESCRIPTION,
      applicationCategory: "BusinessApplication", operatingSystem: "iOS, Android, Web",
      image: `${BASE_URL}${SOCIAL_IMAGE.url}`,
      screenshot: [`${BASE_URL}/images/app/app1.png`, `${BASE_URL}/images/admin/pedidos.png`, `${BASE_URL}/images/admin/cocina.png`, `${BASE_URL}/images/admin/dashboard.png`],
      installUrl: [STORE_LINKS.appStore, STORE_LINKS.googlePlay],
      publisher: { "@id": `${BASE_URL}/#organization` },
      featureList: ["App de pedidos con tu marca para iOS y Android", "Pedidos en mesa, para llevar y a domicilio", "Panel de gestión de pedidos y locales", "Tablero de cocina por estados", "Ingresos, ventas y ticket medio", "Tarjeta, Apple Pay y Google Pay con Stripe", "Efectivo, Bizum y Pago Móvil (Venezuela)", "Notificaciones push", "Gestión de carta e ingredientes"],
    },
    {
      "@type": "Service", "@id": `${BASE_URL}/#service`,
      name: "App de pedidos y panel de gestión para negocios de comida",
      serviceType: "Software para restaurantes y negocios de comida",
      description: SEO_DESCRIPTION,
      provider: { "@id": `${BASE_URL}/#organization` },
      url: BASE_URL,
    },
  ],
};
