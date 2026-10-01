import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Kaushan_Script, Space_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/brand/BackToTop";
import { createPageMetadata, structuredData } from "@/lib/seo";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = createPageMetadata();

export const viewport: Viewport = {
  themeColor: "#03265B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${barlow.variable} ${kaushan.variable} ${spaceMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">{children}<BackToTop /></body>
    </html>
  );
}
