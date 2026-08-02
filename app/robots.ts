import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://kaosisoseo-ai.vercel.app/sitemap.xml",

    host: "https://kaosisoseo-ai.vercel.app",
  };
}