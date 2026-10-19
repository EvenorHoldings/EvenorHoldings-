import { IMG } from "@/assets/images";
export type SectorContent = {
  slug: string;
  nav: string;
  eyebrow: string;
  title: string;
  heroImage: string;
  intro: string[];
  pillars: { title: string; desc: string }[];
  capabilities: { group: string; items: string[] }[];
  approach: { step: string; title: string; desc: string }[];
  /** Forward-looking: what the group is building or exploring in this sector. */
  focus: {
    title: string;
    body: string;
    points: string[];
    image: string;
  };
  cta: string;
};

export const sectors: SectorContent[] = [
  {
    slug: "logistics",
    nav: "Logistics & Supply Chain",
    eyebrow: "Sector 01 — Logistics & Supply Chain",
    title: "Moving Africa's Economy Forward.",
    heroImage:
      IMG.port,
    intro: [
      "Logistics is how ideas become products in people's hands. At Evenor Holdings it is a core capability: we are building the know-how to move goods reliably across South Africa and, in time, across the corridors that connect Southern and East Africa.",
      "Our ventures are our first customers. Getting orders to Moodies customers on time, and designing how OSTO will collect and distribute filtered oil, gives us practical experience we intend to grow into services and ventures of our own.",
    ],
    pillars: [
      { title: "Venture-First", desc: "We build logistics around the real needs of our own ventures, so what we learn is practical, not theoretical." },
      { title: "Corridor Ambition", desc: "We aim to work across the SADC and EAC trade routes that matter most to African commerce." },
      { title: "Digital by Design", desc: "Tracking, documentation and reporting built in from the start, so nothing moves blind." },
    ],
    capabilities: [
      {
        group: "Port & Terminal",
        items: [
          "Port logistics management & stevedoring advisory",
          "Bonded warehouse establishment & operation",
          "Container yard optimisation & TOS advisory",
          "Cold-chain & hazmat cargo handling",
        ],
      },
      {
        group: "Freight & Corridor",
        items: [
          "Multimodal freight forwarding (road, rail, sea, air)",
          "Cross-border corridor management (SADC / EAC)",
          "Customs brokerage facilitation & AEO compliance",
          "Fuel & bulk liquid transport coordination",
        ],
      },
      {
        group: "Last-Mile & Digital",
        items: [
          "Urban & peri-urban distribution networks",
          "Fleet telematics & control-tower monitoring",
          "Warehouse Management System (WMS) integration",
          "Supply chain digitisation & analytics",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Diagnose", desc: "Deep corridor and node assessment — commercial, regulatory, physical." },
      { step: "02", title: "Design", desc: "Route architecture, dwell modelling, cost-to-serve engineering." },
      { step: "03", title: "Deploy", desc: "Mobilise operators, systems, licences and cross-border agents." },
      { step: "04", title: "Deliver", desc: "Tracking, reporting and continuous improvement on every route." },
    ],
    focus: {
      title: "Moving goods for our ventures, and beyond.",
      body: "Logistics is the first capability our ventures lean on. Moodies depends on reliable nationwide delivery, and OSTO will depend on collecting and distributing filtered waste oil. We are building that know-how in-house and see room for logistics ventures of our own.",
      points: [
        "Reliable last-mile delivery for consumer ventures",
        "Collection and reverse logistics for recycled inputs such as used oil",
        "Cross-border trade routes in Southern and East Africa",
      ],
      image: IMG.corridor,
    },
    cta: "Talk to us about logistics",
  },
  {
    slug: "ict",
    nav: "ICT Infrastructure",
    eyebrow: "Sector 02 — ICT Infrastructure",
    title: "Connectivity That Powers What We Build.",
    heroImage:
      IMG.ict,
    intro: [
      "Digital infrastructure is as foundational today as roads and power. Every Evenor venture runs on technology we design and operate ourselves, from online storefronts to order and customer systems.",
      "We are growing this into a wider ICT capability: connectivity, networks and digital infrastructure for businesses, campuses and industrial sites, delivered with the same care we apply to our own ventures.",
    ],
    pillars: [
      { title: "Built In-House", desc: "Our ventures' platforms are designed and run by our own team, so we understand technology from the operator's side." },
      { title: "Standards-Minded", desc: "We design to recognised international and local regulatory standards from the first line of the plan." },
      { title: "Local Capacity", desc: "We want digital infrastructure on the continent to be run, maintained and owned by local teams." },
    ],
    capabilities: [
      {
        group: "Passive Infrastructure",
        items: [
          "Fibre optic backbone design & deployment (OS2 G.652D)",
          "Structured cabling & data cabinet fit-out",
          "OSP civil works & duct network installation",
          "Marine-rated Wi-Fi 6 & outdoor RF planning",
        ],
      },
      {
        group: "Active Infrastructure",
        items: [
          "Enterprise core switching & SD-WAN routing",
          "Internet gateway, NGFW & DDoS protection",
          "Voice-over-IP & unified communications",
          "Video surveillance & IP-CCTV integration",
        ],
      },
      {
        group: "Managed Services",
        items: [
          "24/7 NOC establishment & staffing",
          "Telecoms regulatory registration support",
          "Data centre fit-out & Tier-III advisory",
          "Post-warranty managed services (SLA-backed)",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Feasibility", desc: "Site survey, HLD, spectrum & regulatory review." },
      { step: "02", title: "Engineering", desc: "LLD, BOQ, vendor selection, procurement." },
      { step: "03", title: "Deployment", desc: "Civil, installation, commissioning, acceptance testing." },
      { step: "04", title: "Operate", desc: "NOC handover, SLA monitoring, lifecycle management." },
    ],
    focus: {
      title: "Connectivity and software as an enabler.",
      body: "Every Evenor venture runs on technology we build ourselves, from storefronts to order systems. Over time we want to bring that capability to businesses and institutions that need dependable connectivity and digital infrastructure.",
      points: [
        "In-house digital platforms for every venture",
        "Connectivity and network services for businesses",
        "Digital infrastructure for ports, campuses and industrial sites",
      ],
      image: IMG.ict,
    },
    cta: "Talk to us about ICT",
  },
  {
    slug: "consulting",
    nav: "Management Consulting",
    eyebrow: "Sector 03 — Management Consulting",
    title: "Strategy Built for African Realities.",
    heroImage:
      IMG.capetown,
    intro: [
      "African markets do not respond to generic frameworks. Building our own ventures here teaches us what it really takes to plan, launch and grow a business on this continent.",
      "Our consulting capability shares that operator's perspective with founders, businesses and institutions: practical strategy, operating models and investment readiness, focused on what can actually be delivered.",
    ],
    pillars: [
      { title: "Operator's View", desc: "We advise from the experience of building our own ventures, not from a template." },
      { title: "Context-Aware", desc: "We take the time to understand the people, rules and incentives that shape each market." },
      { title: "Delivery-Oriented", desc: "Recommendations are only useful once they work in practice, so we stay focused on implementation." },
    ],
    capabilities: [
      {
        group: "Public Sector & Governance",
        items: [
          "Government & parastatal strategic advisory",
          "Public-private partnership (PPP) structuring",
          "Organisational design & institutional reform",
          "Regulatory environment navigation",
        ],
      },
      {
        group: "Investment & Trade",
        items: [
          "Investment facilitation & trade linkage",
          "Feasibility studies & bankable business cases",
          "Sovereign & DFI engagement strategy",
          "Cross-border market entry advisory",
        ],
      },
      {
        group: "Digital & Transformation",
        items: [
          "Digital transformation roadmapping",
          "Operating model redesign",
          "Tender documentation & proposal engineering",
          "M&A and post-merger integration advisory",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Frame", desc: "Executive interviews, stakeholder mapping, hypothesis design." },
      { step: "02", title: "Analyse", desc: "Quantitative modelling, benchmarking, regulatory review." },
      { step: "03", title: "Recommend", desc: "Board-grade options, trade-offs, and implementation roadmap." },
      { step: "04", title: "Implement", desc: "Embedded delivery support until adoption is real." },
    ],
    focus: {
      title: "Practical advice from builders.",
      body: "Building our own ventures teaches us how to plan, launch and run a business in African markets. Our consulting capability shares that practical, operator’s perspective with founders, businesses and institutions.",
      points: [
        "Market entry and venture planning",
        "Operating model and process design",
        "Tender preparation and investment readiness",
      ],
      image: IMG.capetown,
    },
    cta: "Talk to us about consulting",
  },
  {
    slug: "petrochemicals",
    nav: "Petrochemicals Solutions",
    eyebrow: "Sector 04 — Petrochemicals Solutions",
    title: "Cleaner, More Affordable Energy.",
    heroImage:
      IMG.petrochem,
    intro: [
      "Energy costs shape daily life for millions of African households and small businesses. Evenor Holdings sees petrochemicals and energy as a place where better ideas can lower costs and reduce waste.",
      "OSTO, our cooking appliance that runs on filtered waste engine oil, is our first venture in this space and is currently in household and business pilots. Alongside it, we are building knowledge in fuel supply, storage, distribution and safety.",
    ],
    pillars: [
      { title: "Safety First", desc: "Safety is a gate, not a feature. Nothing goes to market until it has been validated in real conditions." },
      { title: "Waste to Value", desc: "We look for ways to turn by-products such as used oil into affordable, useful energy." },
      { title: "Compliance Built In", desc: "Environmental and regulatory requirements are part of the design from day one." },
    ],
    capabilities: [
      {
        group: "Trading & Procurement",
        items: [
          "Petroleum product trading (PMS, AGO, Jet A-1, HFO)",
          "Structured procurement & offtake advisory",
          "Bunker fuel solutions for port operators",
          "LPG procurement & distribution structuring",
        ],
      },
      {
        group: "Infrastructure",
        items: [
          "Fuel storage terminal design & commissioning",
          "Pipeline distribution advisory",
          "Retail forecourt & depot engineering",
          "Aviation fuel handling systems",
        ],
      },
      {
        group: "Compliance & HSE",
        items: [
          "HSE compliance for fuel facilities (OSHA, NEMA)",
          "Energy regulatory navigation & licensing",
          "ATEX / IECEx hazardous area classification",
          "Environmental & social impact assessment",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Concept", desc: "Market sizing, product mix, siting and regulatory pathway." },
      { step: "02", title: "License", desc: "Regulator engagement, licence acquisition, HSE case." },
      { step: "03", title: "Build", desc: "EPC oversight, commissioning, operator readiness." },
      { step: "04", title: "Trade", desc: "Sourcing, offtake, distribution network activation." },
    ],
    focus: {
      title: "Cleaner, more affordable energy.",
      body: "OSTO is our first step here: a cooking appliance that turns filtered waste engine oil into affordable cooking heat. We see real opportunity in safer, cleaner and cheaper energy for households and small businesses across the continent.",
      points: [
        "OSTO household and business pilots",
        "Safe collection and filtering of used oil",
        "Fuel supply and distribution for underserved areas",
      ],
      image: IMG.petrochem,
    },
    cta: "Talk to us about energy",
  },
  {
    slug: "mining",
    nav: "Mining Solutions",
    eyebrow: "Sector 05 — Mining Solutions",
    title: "More Value From Africa's Mineral Wealth.",
    heroImage:
      IMG.mining,
    intro: [
      "Africa holds a large share of the world's mineral resources, yet too much of the value is captured elsewhere. Evenor Holdings believes more of that value, and more of the jobs and skills that come with it, should stay on the continent.",
      "Mining is a longer-term focus for the group. We are exploring opportunities across the mine-to-market value chain, from logistics to processing and environmental practice, where a focused venture or service can make a real difference.",
    ],
    pillars: [
      { title: "Mine-to-Market View", desc: "We think about the whole journey of a resource, from the pit to the buyer." },
      { title: "Value Addition", desc: "We are interested in moving value up the chain, not just exporting raw material." },
      { title: "Social Licence", desc: "Community and environmental responsibility are part of the work, not an afterthought." },
    ],
    capabilities: [
      {
        group: "Operations & Processing",
        items: [
          "Mine operational efficiency advisory",
          "Mineral processing technology integration",
          "Beneficiation strategy & value-addition advisory",
          "Equipment & OEM sourcing",
        ],
      },
      {
        group: "Logistics & Trade",
        items: [
          "Mine-to-port logistics optimisation",
          "Concentrate & bulk export coordination",
          "Corridor structuring for landlocked mines",
          "Offtake structuring advisory",
        ],
      },
      {
        group: "Compliance & ESG",
        items: [
          "Environmental & tailings management",
          "Mining regulatory compliance & licensing",
          "Community & social impact frameworks (ESIA)",
          "Beneficial ownership advisory",
        ],
      },
    ],
    approach: [
      { step: "01", title: "Assess", desc: "Resource, operational, regulatory and ESG baseline." },
      { step: "02", title: "Design", desc: "Value-chain optimisation and beneficiation pathway." },
      { step: "03", title: "Enable", desc: "Licensing, corridor, and offtake structuring." },
      { step: "04", title: "Sustain", desc: "ESG monitoring, community engagement, continuous improvement." },
    ],
    focus: {
      title: "Adding value to Africa’s resources.",
      body: "Africa’s mineral wealth should create more value, jobs and skills on the continent. Mining is a longer-term focus for Evenor, and we are exploring where a focused venture or service can make a real difference.",
      points: [
        "Mine-to-market logistics",
        "Processing and beneficiation opportunities",
        "Environmental and community-first practices",
      ],
      image: IMG.mining,
    },
    cta: "Talk to us about mining",
  },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
