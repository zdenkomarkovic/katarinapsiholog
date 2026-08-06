import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SPECIALIZATIONS } from "@/lib/specializations";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...SPECIALIZATIONS.map((spec) => ({
      url: `${SITE_URL}/specijalizacije/${spec.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
