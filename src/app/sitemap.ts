import { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/site";

export default async function sitemap() {
  const pages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ] as MetadataRoute.Sitemap;

  return pages;
}
