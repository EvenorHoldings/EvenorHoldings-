// Pre-renders every route listed by siteRoutes() (the sitemap source) to static
// HTML in dist/, so crawlers and link previews get real content and per-page
// <head> tags without running JavaScript. The browser then hydrates the page.
//
// Output layout (served by Vercel with cleanUrls):
//   /            -> dist/index.html
//   /about       -> dist/about.html
//   /ventures/x  -> dist/ventures/x.html
//   (404)        -> dist/404.html
//   SPA fallback -> dist/spa.html (empty #root, used by vercel.json rewrites)
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { siteRoutes, ORIGIN } from "./generate-sitemap.mjs";

// Render with React/React Router production builds.
process.env.NODE_ENV = "production";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const ssrDir = resolve(dist, ".ssr");
const template = readFileSync(resolve(dist, "index.html"), "utf8");

const { render } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escText = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`<meta ${attr}="${key.replace(/[:.]/g, "\\$&")}" content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${key}" content="${esc(value)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
};

function applyHead(html, head) {
  if (!head) return html;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(head.title)}</title>`);
  html = setMeta(html, "name", "description", head.description);
  html = setMeta(html, "name", "robots", head.noindex ? "noindex, nofollow" : "index, follow");
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${esc(head.url)}" />`);
  html = setMeta(html, "property", "og:title", head.title);
  html = setMeta(html, "property", "og:description", head.description);
  html = setMeta(html, "property", "og:url", head.url);
  html = setMeta(html, "property", "og:type", head.type);
  html = setMeta(html, "property", "og:image", head.image);
  html = setMeta(html, "name", "twitter:title", head.title);
  html = setMeta(html, "name", "twitter:description", head.description);
  html = setMeta(html, "name", "twitter:image", head.image);
  if (head.jsonLd) {
    const json = JSON.stringify(head.jsonLd).replace(/</g, "\\u003c");
    html = html.replace("</head>", `    <script type="application/ld+json" data-seo="page">${json}</script>\n  </head>`);
  }
  return html;
}

const outFile = (route) => (route === "/" ? "index.html" : `${route.slice(1)}.html`);

const pages = [...siteRoutes().map((r) => r.loc), "/__404__"];
let failures = 0;

for (const route of pages) {
  try {
    const { html, head } = await render(route);
    if (!html || html.length < 200) throw new Error("rendered HTML is unexpectedly empty");
    let page = applyHead(template, head);
    page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const file = route === "/__404__" ? "404.html" : outFile(route);
    const target = resolve(dist, file);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, page);
    console.log(`prerender  ${route.padEnd(48)} -> dist/${file}`);
  } catch (err) {
    failures++;
    console.error(`prerender  FAILED ${route}:`, err);
  }
}

// Empty-shell fallback for any client route that was not pre-rendered.
writeFileSync(resolve(dist, "spa.html"), template.replace(/<link rel="canonical"[^>]*>\n?\s*/, ""));
rmSync(ssrDir, { recursive: true, force: true });

if (failures) {
  console.error(`\n${failures} route(s) failed to pre-render.`);
  process.exit(1);
}
console.log(`\nPre-rendered ${pages.length} pages for ${ORIGIN}.`);
