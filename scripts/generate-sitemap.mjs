// Generates public/sitemap.xml from the slugs declared in src/data/*.ts
// so new sectors/projects can never drift out of the sitemap.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://evenor.org";

const slugsFrom = (file) =>
  [...readFileSync(resolve(root, file), "utf8").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);

export function buildSitemap() {
  const sectors = slugsFrom("src/data/sectors.ts");
  const projects = slugsFrom("src/data/projects.ts");
  const insights = slugsFrom("src/data/insights.ts");

  const urls = [
    { loc: "/", changefreq: "weekly", priority: "1.0" },
    { loc: "/about", changefreq: "monthly", priority: "0.9" },
    { loc: "/leadership", changefreq: "monthly", priority: "0.9" },
    { loc: "/contact", changefreq: "monthly", priority: "0.9" },
    { loc: "/projects", changefreq: "weekly", priority: "0.9" },
    { loc: "/insights", changefreq: "monthly", priority: "0.8" },
    { loc: "/careers", changefreq: "weekly", priority: "0.8" },
    { loc: "/legal/privacy", changefreq: "yearly", priority: "0.3" },
    { loc: "/legal/terms", changefreq: "yearly", priority: "0.3" },
    { loc: "/legal/compliance", changefreq: "yearly", priority: "0.3" },
    ...sectors.map((s) => ({ loc: `/sectors/${s}`, changefreq: "monthly", priority: "0.8" })),
    ...projects.map((p) => ({ loc: `/projects/${p}`, changefreq: "monthly", priority: "0.7" })),
    ...insights.map((i) => ({ loc: `/insights/${i}`, changefreq: "monthly", priority: "0.6" })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${ORIGIN}${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
}

export function writeSitemap() {
  writeFileSync(resolve(root, "public/sitemap.xml"), buildSitemap());
}

if (process.argv[1] && process.argv[1].endsWith("generate-sitemap.mjs")) writeSitemap();
