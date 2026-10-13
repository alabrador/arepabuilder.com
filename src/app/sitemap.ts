import type { MetadataRoute } from "next";
import { PLATFORM } from "@/lib/platform";
import { BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    ...PLATFORM.map(product => ({ url: `${BASE_URL}/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${BASE_URL}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terminos`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
