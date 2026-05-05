import { MetadataRoute } from "next";

const BASE_URL = "https://www.innacademy.gr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/",           priority: 1.0, changeFrequency: "weekly"  as const },
    { path: "/professors", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/guests",     priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/france",     priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq",        priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/countries",  priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/gallery",    priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/sponsors",   priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy",    priority: 0.3, changeFrequency: "yearly"  as const },
    { path: "/terms",      priority: 0.3, changeFrequency: "yearly"  as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
