// Generates public/sitemap.xml from the slugs declared in src/data/*.ts so new
// sectors, insights, roles, ventures and legal pages can never drift
// out of the sitemap. The same list drives the static pre-renderer.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const ORIGIN = "https://evenor.org";

const slugsFrom = (file) =>
  [...readFileSync(resolve(root, file), "utf8").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);

/** Every indexable route, with sitemap hints. */
export function siteRoutes() {
  const data = {
    ventures: slugsFrom("src/data/ventures.ts"),
    sectors: slugsFrom("src/data/sectors.ts"),
    insights: slugsFrom("src/data/insights.ts"),
    roles: slugsFrom("src/data/roles.ts"),
    legal: slugsFrom("src/data/legal.ts"),
  };
  return [
    { loc: "/", changefreq: "weekly", priority: "1.0" },
    { loc: "/ventures", changefreq: "weekly", priority: "0.9" },
    ...data.ventures.map((s) => ({ loc: `/ventures/${s}`, changefreq: "monthly", priority: "0.9" })),
    { loc: "/about", changefreq: "monthly", priority: "0.8" },
    { loc: "/leadership", changefreq: "monthly", priority: "0.7" },
    { loc: "/contact", changefreq: "monthly", priority: "0.8" },
    ...data.sectors.map((s) => ({ loc: `/sectors/${s}`, changefreq: "monthly", priority: "0.7" })),
    { loc: "/insights", changefreq: "monthly", priority: "0.7" },
    ...data.insights.map((s) => ({ loc: `/insights/${s}`, changefreq: "yearly", priority: "0.6" })),
    { loc: "/careers", changefreq: "weekly", priority: "0.7" },
    ...data.roles.map((s) => ({ loc: `/careers/${s}`, changefreq: "weekly", priority: "0.5" })),
    ...data.legal.map((s) => ({ loc: `/legal/${s}`, changefreq: "yearly", priority: "0.3" })),
  ];
}

export function buildSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteRoutes()
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
