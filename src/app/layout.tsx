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
    default: "Arepa Builder — App para Pedir Arepas Venezolanas Online",
    template: "%s | Arepa Builder",
  },
  description:
    "Descarga la app de Arepa Builder y personaliza tu arepa venezolana. Elige ingredientes, paga con tarjeta y sigue tu pedido en tiempo real. Delivery y para llevar disponible.",
  keywords: [
    "arepa venezolana",
    "pedir arepa online",
    "app arepas",
    "comida venezolana",
    "empanadas venezolanas",
    "delivery arepas",
    "restaurante venezolano",
    "arepa builder",
    "pedir comida venezolana",
    "arepa domicilio",
    "arepa para llevar",
    "arepa app móvil",
    "cocina venezolana",
    "arepa pabellón",
    "arepa reina pepiada",
  ],
  authors: [{ name: "Arepa Builder" }],
  creator: "Arepa Builder",
  publisher: "Arepa Builder",
  category: "food",
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
    title: "Arepa Builder — Personaliza y Pide tus Arepas Venezolanas",
    description:
      "La app oficial para pedir arepas venezolanas. Constructor interactivo, pago con Stripe, seguimiento en tiempo real y notificaciones push.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arepa Builder — App para pedir arepas venezolanas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arepa Builder — Personaliza y Pide tus Arepas Venezolanas",
    description:
      "La app oficial para pedir arepas venezolanas. Constructor interactivo, pago con Stripe y seguimiento en tiempo real.",
    images: ["/images/og-image.jpg"],
    creator: "@arepabuilder",
    site: "@arepabuilder",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "es-ES": BASE_URL,
      "es-VE": BASE_URL,
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
      "@type": "Restaurant",
      "@id": `${BASE_URL}/#restaurant`,
      name: "Arepa Builder",
      description:
        "Restaurante venezolano con app móvil para personalizar y pedir arepas, empanadas y más. Delivery, para llevar y consumo en mesa.",
      url: BASE_URL,
      logo: `${BASE_URL}/images/logo.png`,
      image: `${BASE_URL}/images/food-hero.jpg`,
      telephone: "",
      servesCuisine: ["Venezuelan", "Venezuelan cuisine", "Cocina venezolana"],
      priceRange: "€€",
      hasMenu: `${BASE_URL}/#menu`,
      acceptsReservations: false,
      potentialAction: {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://apps.apple.com/app/arepa-builder",
          inLanguage: "es",
          actionPlatform: [
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform",
          ],
        },
        deliveryMethod: [
          "http://purl.org/goodrelations/v1#DeliveryModeDirectDownload",
        ],
      },
    },
    {
      "@type": "MobileApplication",
      "@id": `${BASE_URL}/#app`,
      name: "Arepa Builder",
      description:
        "App para pedir arepas venezolanas. Constructor interactivo de ingredientes, pago con Stripe, seguimiento en tiempo real y notificaciones push.",
      url: BASE_URL,
      applicationCategory: "FoodApplication",
      operatingSystem: "iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "120",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Arepa Builder",
      url: BASE_URL,
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
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
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
