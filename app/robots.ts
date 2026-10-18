import type { MetadataRoute } from "next";

function getBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  return "https://movalabs.com";
}

export default function robots(): MetadateRoute {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/checkout",
          "/checkout/",
          "/profile",
          "/profile/",
          "/account",
          "/account/",
          "/api/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
