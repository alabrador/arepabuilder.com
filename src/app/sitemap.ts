import type { MetadataRoute } from "next";
import { PLATFORM } from "@/lib/platform";
import { BASE_URL } from "@/lib/seo";

// Bump when page content changes materially.
const UPDATED = new Date("2026-10-13");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: UPDATED, changeFrequency: "weekly", priority: 1 },
    ...PLATFORM.map(product => ({ url: `${BASE_URL}/${product.slug}`, lastModified: UPDATED, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${BASE_URL}/privacidad`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terminos`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];
}
