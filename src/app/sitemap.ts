import type { MetadataRoute } from "next";

const siteUrl = "https://approvedexpandables.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified: new Date("2026-08-31T00:00:00+10:00"),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${siteUrl}/images/gallery/factory-client-build-deck-left.jpeg`,
        `${siteUrl}/images/gallery/factory-client-build-deck-right.jpeg`,
        `${siteUrl}/images/gallery/factory-client-build-front-charcoal.jpeg`,
        `${siteUrl}/images/gallery/factory-client-build-side-woodgrain.jpeg`,
      ],
    },
  ];
}
