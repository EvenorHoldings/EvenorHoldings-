export const ORIGIN: string;
export interface SiteRoute {
  loc: string;
  changefreq: string;
  priority: string;
}
export function siteRoutes(): SiteRoute[];
export function buildSitemap(): string;
export function writeSitemap(): void;
