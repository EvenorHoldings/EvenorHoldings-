/** Canonical site origin. Always the bare domain, no trailing slash. */
export const SITE = "https://evenor.org";
export const DEFAULT_OG = `${SITE}/og-image.jpg`;
export const ORG_ID = `${SITE}/#organization`;

/** Contact-form topics that other pages can preselect with /contact?topic=<key>. */
export const CONTACT_TOPICS = {
  general: "General",
  sales: "Sales & Quotation",
  tenders: "Tender Submission",
  partnership: "Partnership Proposal",
  investors: "Investor Enquiry",
  executive: "Executive Office",
  ventures: "Ventures",
} as const;

export type ContactTopic = keyof typeof CONTACT_TOPICS;

export const contactHref = (topic: ContactTopic) => `/contact?topic=${topic}`;

/** Canonical URL for a path: bare domain, no trailing slash except the root. */
export const canonicalFor = (pathname: string) =>
  `${SITE}${pathname === "/" ? "/" : pathname.replace(/\/+$/, "")}`;
