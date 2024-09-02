import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://{website_url}",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://{website_url}/{some_page}",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.2,
    },
  ];
}
