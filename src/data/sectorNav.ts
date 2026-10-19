/**
 * Lightweight sector list for navigation (footer, hero strip), so every page
 * does not have to load the full sector content in src/data/sectors.ts.
 * Kept in sync with sectors.ts by src/test/data.test.ts.
 */
export const sectorNav = [
  { slug: "logistics", nav: "Logistics & Supply Chain", short: "Logistics" },
  { slug: "ict", nav: "ICT Infrastructure", short: "ICT" },
  { slug: "consulting", nav: "Management Consulting", short: "Consulting" },
  { slug: "petrochemicals", nav: "Petrochemicals Solutions", short: "Petrochemicals" },
  { slug: "mining", nav: "Mining Solutions", short: "Mining" },
] as const;
