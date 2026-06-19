import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
});

const BASE_URL = "https://arepabuilder.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Arepa Builder — Software para Restaurantes en Madrid | App + Panel Admin",
    template: "%s | Arepa Builder",
  },
  description:
    "Sistema completo para digitalizar tu restaurante en Madrid: app móvil iOS y Android para que tus clientes pidan y paguen, más panel admin en tiempo real. Sin comisiones. Operativo en 24h.",
  keywords: [
    // Software + sistema
    "software restaurante Madrid",
    "sistema pedidos restaurante",
    "app pedidos restaurante Madrid",
    "digitalizar restaurante Madrid",
    "software gestión restaurante",
    "panel admin restaurante",
    "sistema TPV restaurante",
    "software hostelería Madrid",
    "gestión pedidos restaurante online",
    "app restaurante iOS Android",
    // Madrid específico
    "restaurante venezolano Madrid",
    "app delivery Madrid",
    "sistema pedidos digital Madrid",
    "software restaurante venezolano",
    "digitalizar hostelería Madrid",
    // Producto
    "arepa builder",
    "app restaurante sin comisiones",
    "cocina kanban restaurante",
    "notificaciones push pedidos",
    "cobros stripe restaurante",
    "menú digital restaurante",
  ],
  authors: [{ name: "Arepa Builder" }],
  creator: "Arepa Builder",
  publisher: "Arepa Builder",
  category: "software",
  applicationName: "Arepa Builder",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    siteName: "Arepa Builder",
    title: "Arepa Builder — Software para Restaurantes en Madrid",
    description:
      "Digitaliza tu restaurante en Madrid con Arepa Builder: app móvil para tus clientes y panel admin completo para tu equipo. Sin comisiones. Operativo en 24h.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arepa Builder — Software para restaurantes en Madrid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arepa Builder — Software para Restaurantes en Madrid",
    description:
      "App móvil + panel admin para digitalizar tu restaurante en Madrid. Sin comisiones. Pedidos, cobros con Stripe y cocina en tiempo real.",
    images: ["/images/og-image.jpg"],
    creator: "@arepabuilder",
    site: "@arepabuilder",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "es-ES": BASE_URL,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Arepa Builder",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/app-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/images/app-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2E1600",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#software`,
      name: "Arepa Builder",
      description:
        "Sistema completo para digitalizar restaurantes: app móvil iOS y Android para pedidos y pagos con Stripe, más panel de administración web con gestión de cocina, pedidos y analítica en tiempo real.",
      url: BASE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: "Sin comisiones por pedido",
      },
      featureList: [
        "App móvil iOS y Android",
        "Panel de administración web",
        "Gestión de cocina kanban en tiempo real",
        "Cobros con Stripe sin comisiones",
        "Notificaciones push automáticas",
        "Dashboard de ventas y analytics",
        "Tres modalidades: mesa, para llevar, domicilio",
        "Menú digital editable en tiempo real",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "120",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "MobileApplication",
      "@id": `${BASE_URL}/#app`,
      name: "Arepa Builder — App para restaurantes",
      description:
        "App móvil para que los clientes de tu restaurante pidan y paguen con tarjeta. Disponible en iOS y Android.",
      applicationCategory: "FoodApplication",
      operatingSystem: "iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Arepa Builder",
      url: BASE_URL,
      description:
        "Empresa de software especializada en digitalización de restaurantes venezolanos en Madrid. Desarrollamos app móvil y panel de gestión para hostelería.",
      areaServed: {
        "@type": "City",
        name: "Madrid",
        "@id": "https://www.wikidata.org/wiki/Q2807",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34-678-361-168",
        contactType: "sales",
        availableLanguage: ["Spanish"],
      },
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`,
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Arepa Builder",
      description: "Software para restaurantes en Madrid — App móvil + Panel Admin",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "es-ES",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service`,
      name: "Sistema de gestión de pedidos para restaurantes",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: {
        "@type": "City",
        name: "Madrid",
      },
      serviceType: "Software para restaurantes",
      description:
        "Implementación de sistema digital de pedidos para restaurantes en Madrid: app móvil para clientes, panel de cocina y dashboard de ventas. Sin comisiones. Operativo en 24 horas.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: "Sin comisiones por pedido",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased">{children}</body>
    </html>
  );
}
