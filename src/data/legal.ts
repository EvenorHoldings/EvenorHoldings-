export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  meta: string;
  eyebrow: string;
  description: string;
  sections: LegalSection[];
}

export const legalDocs: Record<string, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    meta: "Privacy Policy | Evenor Holdings (Pty) Ltd",
    eyebrow: "Legal — Data Protection",
    description:
      "How Evenor Holdings (Pty) Ltd collects, uses and protects personal information in accordance with the Protection of Personal Information Act (POPIA).",
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          "Evenor Holdings (Pty) Ltd (Registration No. K2025/717968) is a private company registered in South Africa, with its principal place of business at 1st Floor, Cape Dahlia, 80 Coral Road, West Beach, Cape Town, 7441. We act as the responsible party for personal information processed through this website and in the course of our business dealings.",
        ],
      },
      {
        heading: "2. Information we collect",
        paragraphs: [
          "When you submit an enquiry through this website, we collect your name, organisation, country, contact details and the content of your message. We may additionally collect correspondence exchanged with our offices and, in the course of engagements, professional information relevant to the mandate.",
          "We do not collect special personal information through this website, and we do not use analytics tooling that profiles individual visitors.",
        ],
      },
      {
        heading: "3. How we use your information",
        paragraphs: [
          "Personal information is used solely to respond to your enquiry, to route it to the appropriate desk within the Group, and to administer any subsequent commercial or professional relationship. We do not sell, rent or trade personal information to third parties.",
          "Where a submission indicates a tender, partnership or investor interest, it is routed to the corresponding department inbox (tenders@evenor.org, partners@evenor.org, joachim@evenor.org respectively) and retained only as long as the matter requires.",
        ],
      },
      {
        heading: "4. Lawful basis and POPIA",
        paragraphs: [
          "Processing is undertaken in terms of the Protection of Personal Information Act, 2013 (POPIA), on the basis of your consent at the point of submission and, where applicable, the legitimate interest of evaluating a prospective engagement. You may withdraw consent at any time by writing to info@evenor.org.",
          "You have the right to request access to, correction of, or deletion of the personal information we hold about you, and to lodge a complaint with the Information Regulator (South Africa).",
        ],
      },
      {
        heading: "5. Retention and security",
        paragraphs: [
          "Enquiry records are retained for the duration of the correspondence and for a reasonable archival period thereafter. Access is restricted to principals and delegated staff on a need-to-know basis, and records are stored on infrastructure with access controls and encryption in transit.",
        ],
      },
      {
        heading: "6. Contact",
        paragraphs: [
          "Questions regarding this policy or the exercise of your rights may be directed to info@evenor.org or +27 81 540 2781 during business hours (Mon–Fri, 08:00–17:00 SAST).",
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Engagement",
    meta: "Terms of Engagement | Evenor Holdings (Pty) Ltd",
    eyebrow: "Legal — Website Terms",
    description:
      "The terms governing use of the Evenor Holdings website and the basis on which the Group engages with counterparties.",
    sections: [
      {
        heading: "1. Scope",
        paragraphs: [
          "These terms govern the use of the website operated by Evenor Holdings (Pty) Ltd (Reg. No. K2025/717968). By using this website you accept these terms. They do not create any client relationship; formal engagements are concluded exclusively under signed mandate agreements.",
        ],
      },
      {
        heading: "2. Information on this website",
        paragraphs: [
          "Content on this website is provided for general information about the Group's capabilities and operating philosophy. It does not constitute investment advice, a public offer of securities, or a tender document. Descriptions of ventures in development or pilot describe plans and intentions, not guarantees of future performance.",
          "While we take care to keep content accurate, we do not warrant completeness or currency, and we reserve the right to amend content without notice.",
        ],
      },
      {
        heading: "3. Intellectual property",
        paragraphs: [
          "All text, imagery, marks and design on this website are the property of Evenor Holdings (Pty) Ltd or are used under licence. They may not be reproduced or redistributed without prior written consent.",
        ],
      },
      {
        heading: "4. Submissions",
        paragraphs: [
          "Enquiries, proposals and documents submitted through this website or to our department inboxes are treated in confidence to the extent reasonable, but do not of themselves establish a mandate, exclusivity, or any obligation on the Group to respond or to contract.",
        ],
      },
      {
        heading: "5. Liability",
        paragraphs: [
          "To the maximum extent permitted by law, Evenor Holdings (Pty) Ltd accepts no liability for loss arising from reliance on website content or from the unavailability of this website. Nothing in these terms excludes liability that cannot be excluded under South African law.",
        ],
      },
      {
        heading: "6. Governing law",
        paragraphs: [
          "These terms are governed by the laws of the Republic of South Africa. The courts of the Western Cape Division shall have jurisdiction over any dispute arising from the use of this website.",
        ],
      },
    ],
  },
  compliance: {
    slug: "compliance",
    title: "Regulatory & Compliance",
    meta: "Compliance & Governance | Evenor Holdings (Pty) Ltd",
    eyebrow: "Legal — Governance",
    description:
      "Evenor Holdings' compliance posture: CIPC company registration, POPIA data protection and sector licensing.",
    sections: [
      {
        heading: "Corporate registration",
        paragraphs: [
          "Evenor Holdings (Pty) Ltd is registered with the Companies and Intellectual Property Commission (CIPC) of South Africa under Registration No. K2025/717968, and was incorporated in 2025. The Group is headquartered in Cape Town and maintains records in accordance with the Companies Act, 2008.",
        ],
      },
      {
        heading: "Data protection (POPIA)",
        paragraphs: [
          "Personal information is processed in accordance with the Protection of Personal Information Act, 2013. Our Privacy Policy sets out collection purposes, retention and data-subject rights. Enquiries regarding information handling may be directed to info@evenor.org.",
        ],
      },
      {
        heading: "Sector-specific compliance",
        paragraphs: [
          "Activities in petrochemicals, mining, logistics and our ventures are carried out under the licences, permits and authorisations that apply in the relevant jurisdiction, and we obtain these before an activity begins.",
        ],
      },
      {
        heading: "Conduct & confidentiality",
        paragraphs: [
          "We treat information shared with us in confidence, and we disclose the names of customers or partners only with their written consent. We do not tolerate bribery or corruption in any of our dealings.",
        ],
      },
    ],
  },
};

export const getLegalDoc = (slug: string) => legalDocs[slug];
