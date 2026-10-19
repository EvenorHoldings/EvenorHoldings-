import { describe, it, expect } from "vitest";
import { sectors } from "@/data/sectors";
import { sectorNav } from "@/data/sectorNav";
import { ventures } from "@/data/ventures";
import { legalDocs } from "@/data/legal";
import { siteRoutes } from "../../scripts/generate-sitemap.mjs";

describe("site data", () => {
  it("keeps the nav sector list in sync with sector content", () => {
    expect(sectorNav.map((s) => [s.slug, s.nav])).toEqual(sectors.map((s) => [s.slug, s.nav]));
  });

  it("puts every venture and legal page in the sitemap", () => {
    const locs = siteRoutes().map((r) => r.loc);
    for (const v of ventures) expect(locs).toContain(`/ventures/${v.slug}`);
    for (const k of Object.keys(legalDocs)) expect(locs).toContain(`/legal/${k}`);
  });

  it("tags outbound venture links with referral UTMs", () => {
    for (const v of ventures) {
      if (v.url) expect(v.url).toContain("utm_source=evenor.org");
      if (v.primaryCta.href.startsWith("http")) expect(v.primaryCta.href).toContain("utm_source=evenor.org");
    }
  });
});
