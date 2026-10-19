import lifestyle from "@/assets/ventures/moodies-lifestyle-800.webp";
import calm from "@/assets/ventures/moodies-calm-800.webp";
import gummies from "@/assets/ventures/moodies-gummies-600.webp";
import cookies from "@/assets/ventures/moodies-cookies-600.webp";
import brownie from "@/assets/ventures/moodies-brownie-600.webp";

export type VentureStage = "Trading" | "Pilot" | "In development";

export interface VentureImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface VentureCta {
  label: string;
  /** Absolute URL (external) or app path (internal, starts with "/"). */
  href: string;
}

export interface Venture {
  slug: string;
  name: string;
  /** Legal/brand name used in structured data. */
  legalName: string;
  tagline: string;
  category: string;
  country: string;
  stage: VentureStage;
  summary: string;
  /** Long-form description paragraphs for the venture page. */
  story: string[];
  highlights: { title: string; desc: string }[];
  /** Which Evenor capabilities the venture draws on (sector slugs). */
  capabilities: string[];
  /** Public website, if one is live. */
  url?: string;
  primaryCta: VentureCta;
  secondaryCta?: VentureCta;
  seo: { title: string; description: string };
  theme: {
    /** Card / hero surface colour. */
    surface: string;
    /** Primary ink colour on that surface. */
    ink: string;
    /** Accent used for small labels. */
    accent: string;
    /** Use a serif wordmark (brand look) instead of the group type. */
    serifWordmark?: boolean;
    /** Wordmark colour, if different from ink. */
    wordmark?: string;
  };
  /** How the brand name is written in its wordmark (e.g. lower-case). */
  wordmarkText?: string;
  cover?: VentureImage;
  gallery?: VentureImage[];
}

const UTM = "utm_source=evenor.org&utm_medium=referral&utm_campaign=ventures";

export const ventures: Venture[] = [
  {
    slug: "moodies",
    name: "Moodies",
    legalName: "Moodies",
    tagline: "Taste your mood.",
    category: "Consumer wellness · E-commerce",
    country: "South Africa",
    stage: "Trading",
    summary:
      "A premium, mood-led wellness shop for South Africa. Products are organised around how you want to feel (Uplift, Calm, Balance) rather than around ingredients.",
    story: [
      "Moodies is a direct-to-consumer wellness brand built and operated by Evenor Holdings. The shop is organised by mood, Uplift, Calm and Balance, so customers choose by how they want to feel rather than by technical specification.",
      "The range covers small-batch edibles and devices, presented in a calm, editorial style. Orders are delivered nationwide across South Africa, and the shop is for adults aged 18 and over.",
      "For Evenor, Moodies is a practical test of how the group builds ventures: a focused brand, a storefront and operations we designed ourselves, and a team that learns directly from customers.",
    ],
    highlights: [
      { title: "Mood-led discovery", desc: "Shop by Uplift, Calm or Balance, with suggestions based on the mood or occasion a customer describes." },
      { title: "Nationwide delivery", desc: "Flat-rate delivery to addresses across South Africa." },
      { title: "Built in-house", desc: "Storefront, catalogue, order notifications and customer messaging are built and run by Evenor." },
    ],
    capabilities: ["logistics", "ict"],
    url: `https://www.moodies.life/?${UTM}`,
    primaryCta: { label: "Visit moodies.life", href: `https://www.moodies.life/?${UTM}` },
    secondaryCta: { label: "Partner with Moodies", href: "/contact?interest=moodies" },
    seo: {
      title: "Moodies | A Premium, Mood-Led Wellness Shop | Evenor Holdings",
      description:
        "Moodies is a premium, mood-led wellness shop in South Africa, built and operated by Evenor Holdings. Shop by Uplift, Calm or Balance at moodies.life.",
    },
    theme: {
      surface: "#EFE7DC",
      ink: "#4A3424",
      accent: "#7A5A40",
      serifWordmark: true,
      wordmark: "#6B4A2E",
    },
    wordmarkText: "moodies",
    cover: {
      src: lifestyle,
      alt: "A woman relaxing at home in a calm, sunlit room with a Moodies pouch on the table",
      width: 800,
      height: 993,
    },
    gallery: [
      { src: gummies, alt: "Moodies gummies spilling from a kraft pouch", width: 600, height: 600 },
      { src: cookies, alt: "A stack of Moodies cookies beside a white gift box", width: 600, height: 600 },
      { src: brownie, alt: "A Moodies brownie on kraft paper", width: 600, height: 600 },
      { src: calm, alt: "Friends sharing Moodies treats over tea", width: 800, height: 800 },
    ],
  },
  {
    slug: "osto",
    name: "OSTO",
    legalName: "OSTO",
    tagline: "Cook for less. Waste oil, made safe.",
    category: "Clean cooking energy · Hardware",
    country: "South Africa",
    stage: "Pilot",
    summary:
      "A South African cooking appliance that runs on filtered waste engine oil, turning a pollutant into affordable cooking heat. Household and business pilot programmes are open.",
    story: [
      "Electricity and LPG prices keep rising, and used engine oil is often dumped. OSTO connects the two: a cooking appliance designed to burn filtered waste engine oil in a sealed, enclosed chamber, giving homes and food businesses an affordable source of cooking heat.",
      "OSTO is at pilot stage. Product specifications are concepts that are still subject to engineering validation, and safety is treated as a gate rather than a feature: flame-sensor lockout and tip-over cut-off are part of the design from day one.",
      "We are running two pilot programmes, one for households and one for businesses such as caterers and small food businesses. Pilot participants help us validate fuel supply, running costs and safety in real kitchens before any commercial launch.",
    ],
    highlights: [
      { title: "A waste product, reused", desc: "Filtered used engine oil becomes fuel instead of a pollutant." },
      { title: "Sealed combustion", desc: "Fuel burns in an enclosed, two-stage chamber, not an open flame." },
      { title: "Household and business pilots", desc: "Separate pilot programmes for homes and for food businesses." },
    ],
    capabilities: ["petrochemicals", "logistics"],
    url: `https://osto.lovable.app/?${UTM}`,
    primaryCta: { label: "Join the pilot", href: `https://osto.lovable.app/pilot?${UTM}` },
    secondaryCta: { label: "Visit the OSTO site", href: `https://osto.lovable.app/?${UTM}` },
    seo: {
      title: "OSTO | Cooking Energy From Filtered Waste Oil | Evenor Holdings",
      description:
        "OSTO is a South African cooking appliance that runs on filtered waste engine oil. Household and business pilot programmes are open. An Evenor Holdings venture.",
    },
    theme: {
      surface: "#0F1F3A",
      ink: "#FFFFFF",
      accent: "#D4A53A",
    },
  },
];

export const getVenture = (slug: string) => ventures.find((v) => v.slug === slug);

export const isExternal = (href: string) => /^https?:\/\//.test(href);
