export interface Role {
  slug: string;
  title: string;
  sector: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const roles: Role[] = [
  {
    slug: "corridor-logistics-manager",
    title: "Corridor Logistics Manager",
    sector: "Logistics & Supply Chain",
    location: "Cape Town, South Africa",
    type: "Full-time",
    summary:
      "Own end-to-end movement of cargo across the Southern African corridors, from port release to inland delivery, with accountability for transit time, cost and compliance.",
    responsibilities: [
      "Plan and control cross-border road and rail movements across the Cape, Maputo and North–South corridors",
      "Manage carrier and clearing-agent performance against agreed service levels",
      "Own weekly cost-per-tonne and transit-time reporting to the executive office",
      "Resolve border, customs and demurrage exceptions before they reach the client",
    ],
    requirements: [
      "6+ years in freight forwarding, transport or corridor operations",
      "Working knowledge of SADC customs documentation and cross-border regulation",
      "Degree or diploma in logistics, supply chain or a related field",
      "Valid passport and willingness to travel across the region",
    ],
  },
  {
    slug: "network-operations-engineer",
    title: "Network Operations Engineer",
    sector: "ICT Infrastructure",
    location: "Cape Town, South Africa",
    type: "Full-time",
    summary:
      "Keep fibre, wireless and data-centre infrastructure available and measurable, with hands-on responsibility for monitoring, incident response and preventative maintenance.",
    responsibilities: [
      "Monitor core and access network health and respond to incidents within agreed windows",
      "Commission fibre routes, switching and wireless backhaul on client sites",
      "Maintain configuration baselines, documentation and as-built records",
      "Produce availability and root-cause reports for enterprise clients",
    ],
    requirements: [
      "4+ years in ISP, telecoms or enterprise network operations",
      "CCNA/CCNP, JNCIA or equivalent practical competence in routing and switching",
      "Experience with fibre splicing, OTDR testing or structured cabling standards",
      "Driver's licence and availability for standby rotation",
    ],
  },
  {
    slug: "management-consultant",
    title: "Management Consultant — Public Sector",
    sector: "Management Consulting",
    location: "Cape Town / Hybrid",
    type: "Full-time",
    summary:
      "Advise government entities and state-owned enterprises on operating models, procurement reform and delivery performance, with evidence you can defend in a boardroom.",
    responsibilities: [
      "Run diagnostics, cost modelling and process analysis on client mandates",
      "Draft board-grade findings, business cases and implementation roadmaps",
      "Support bid and proposal development for public-sector tenders",
      "Facilitate stakeholder workshops and delivery reviews",
    ],
    requirements: [
      "4+ years in strategy, management consulting, audit or public-sector advisory",
      "Honours degree in commerce, economics, engineering or public administration",
      "Advanced Excel modelling and executive-level written communication",
      "Familiarity with PFMA/MFMA and the SA public procurement environment is an advantage",
    ],
  },
  {
    slug: "fuels-supply-coordinator",
    title: "Fuels Supply Coordinator",
    sector: "Petrochemicals Solutions",
    location: "Cape Town, South Africa",
    type: "Full-time",
    summary:
      "Coordinate downstream fuel supply — allocation, scheduling, depot uplift and delivery reliability — for commercial, mining and fleet customers.",
    responsibilities: [
      "Schedule bulk deliveries and manage depot allocation against customer demand",
      "Reconcile volumes, losses and pricing across supply points",
      "Maintain SHEQ and hazardous-goods compliance across the delivery fleet",
      "Track and report on-time-in-full delivery performance",
    ],
    requirements: [
      "3+ years in fuel, bulk liquids or hazardous-goods distribution",
      "Understanding of downstream petroleum regulation and licensing in South Africa",
      "Strong numeracy and reconciliation discipline",
      "Diploma in logistics, supply chain or energy operations",
    ],
  },
  {
    slug: "mining-services-supervisor",
    title: "Mining Services Supervisor",
    sector: "Mining Solutions",
    location: "Northern Cape / Limpopo (site-based)",
    type: "Full-time",
    summary:
      "Supervise on-site mining support services — consumables supply, equipment availability and mine-to-port movement — with safety as the first measure of performance.",
    responsibilities: [
      "Supervise site crews, contractors and consumables replenishment",
      "Enforce Mine Health and Safety Act requirements and incident reporting",
      "Coordinate mine-to-port haulage schedules and stockpile handover",
      "Report equipment availability, utilisation and cost per tonne",
    ],
    requirements: [
      "5+ years in mining operations, contracting or mine logistics",
      "Blasting, safety or supervisory certification relevant to South African mining",
      "Proven record of zero-harm site leadership",
      "Willingness to work a site-based roster",
    ],
  },
  {
    slug: "procurement-specialist",
    title: "Procurement & Tenders Specialist",
    sector: "Group Procurement",
    location: "Cape Town, South Africa",
    type: "Full-time",
    summary:
      "Run competitive sourcing and tender submissions across the group, protecting margin and compliance on every award.",
    responsibilities: [
      "Compile and submit public and private tender responses end to end",
      "Run supplier vetting, RFQ cycles and price negotiation",
      "Maintain B-BBEE, tax and vendor compliance documentation",
      "Track award outcomes and build a reusable bid library",
    ],
    requirements: [
      "4+ years in procurement, bid management or contract administration",
      "Demonstrated public-tender submission experience in South Africa",
      "Meticulous documentation discipline and deadline control",
      "CIPS or equivalent qualification is an advantage",
    ],
  },
];

export const getRole = (slug: string) => roles.find((r) => r.slug === slug);
