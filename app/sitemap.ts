import type { MetadataRoute } from "next";

const baseUrl = "https://safariutah.com";

const routes = [
  "",
  "/tours/antelope-island",
  "/book/private",
  "/book/sunset",
  "/book/small-group",
  "/about",
  "/gallery",
  "/faq",
  "/policies",
  "/contact",
  "/custom-experiences",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/tours/antelope-island" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/tours/antelope-island" ? 0.9 : 0.6,
  }));
}
