# Evenor Holdings (Pty) Ltd: corporate website

Site for Evenor Holdings, a South African holding company that builds and operates African
ventures (Moodies, OSTO), backed by group capabilities in Logistics, ICT Infrastructure,
Management Consulting, Petrochemicals and Mining Solutions.

Live: https://evenor.org (hosted on Vercel)

## Stack

- Vite 5 + React 18 + TypeScript (SWC), React Router 6
- Tailwind CSS 3 with brand tokens (navy / gold / `gold-ink` for AA contrast on light surfaces)
- A small set of shadcn/ui primitives (toast), Lucide icons
- Leaflet + CARTO tiles for the operations map, loaded client-side only
- Supabase for the contact and careers forms (SDK loaded on submit)
- Static pre-rendering of every route (`scripts/prerender.mjs`) with hydration in the browser

## Local development

```sh
bun install
bun run dev      # http://localhost:8080
bun run test     # vitest
bun run lint
bun run build    # client build + SSR build + pre-render of all routes into dist/
```

`bun run build:spa` produces a plain client-only build (no pre-rendering).

## Project structure

```
src/
  AppRoutes.tsx        Providers + routes, shared by the browser and the pre-renderer
  entry-server.tsx     Server render entry used by scripts/prerender.mjs
  data/                ventures, sectors, projects, insights, roles, legal: content source of truth
  lib/site.ts          Canonical origin (https://evenor.org) and contact-topic deep links
  components/          Sections and shared components
  pages/               Route components (lazy loaded)
scripts/
  generate-sitemap.mjs Route list + public/sitemap.xml, generated from src/data/*.ts
  prerender.mjs        Renders every sitemap route to dist/**.html with per-page <head>
vercel.json            Clean URLs, SPA fallback, security headers (CSP, HSTS, ...)
```

## Content updates

Add or edit entries in `src/data/*.ts`. A new slug automatically gets its route, a sitemap
entry and a pre-rendered page on the next build.

Contact deep links: `/contact?topic=investors|tenders|partnership|ventures|sales|executive`,
or `/contact?interest=<venture-slug>`.

## Environment

Copy `.env.example` to `.env` for local work. `.env` is not committed. On Vercel, set
`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` and `VITE_SUPABASE_PROJECT_ID` in
Project Settings → Environment Variables (Production and Preview). These are publishable,
client-safe values; never put a service-role or `sb_secret_` key in a `VITE_` variable.
