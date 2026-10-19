export interface Insight {
  slug: string;
  title: string;
  dek: string;
  sector: "Logistics" | "ICT Infrastructure" | "Management Consulting" | "Petrochemicals" | "Mining Solutions" | "Group";
  date: string; // ISO date of publication
  readingMinutes: number;
  image: "corridor" | "ict" | "port" | "petrochem" | "mining" | "capetown";
  body: { heading?: string; paragraphs: string[] }[];
}

export const insights: Insight[] = [
  {
    slug: "corridor-thinking-african-logistics",
    title: "Corridor Thinking: Why African Logistics Is Won Between the Nodes",
    dek: "Ports and terminals attract the capital. Reliability is decided on the road, rail and paperwork between them.",
    sector: "Logistics",
    date: "2026-07-14",
    readingMinutes: 6,
    image: "corridor",
    body: [
      {
        paragraphs: [
          "African freight conversations tend to begin and end at the port gate. That is understandable — terminals are visible, financeable and politically legible. But the difference between a corridor that traders trust and one they route around is rarely the crane. It is the hinterland: the inland depot that cannot clear at night, the border post where two agencies hold overlapping mandates, the transporter whose fleet utilisation collapses on the empty return leg.",
          "Corridor thinking treats the route as a single system with one performance promise. It asks a simpler question than most master plans do: how many hours does a container spend not moving, and who owns each of those hours?",
        ],
      },
      {
        heading: "Three constraints that repeat",
        paragraphs: [
          "First, documentation asymmetry. Physical infrastructure improves faster than the institutional interfaces around it, so trucks queue behind approvals rather than behind congestion. Second, imbalanced flows. Most African corridors are structurally directional — inbound consumer goods, outbound bulk — which means backhaul design, not tonnage, sets the true cost per kilometre. Third, fragmented accountability. When five parties each own a leg, no party owns the journey.",
        ],
      },
      {
        heading: "What we believe works",
        paragraphs: [
          "Contract for the journey, not the leg. That means a single accountable party across transport, customs facilitation and inland handling, with performance measured in door-to-door dwell time rather than per-leg activity. It also means being honest about where a corridor is simply not ready, and sequencing volumes accordingly.",
          "The commercial consequence is unglamorous but decisive: predictability. Institutional shippers do not pay a premium for speed records. They pay for a delivery window they can plan a factory, a clinic or a tender around.",
        ],
      },
    ],
  },
  {
    slug: "fibre-is-not-the-project",
    title: "Fibre Is Not the Project. Operating It Is.",
    dek: "National backbones are built in months and lost in years. The asset that matters is the operating discipline around the glass.",
    sector: "ICT Infrastructure",
    date: "2026-06-02",
    readingMinutes: 5,
    image: "ict",
    body: [
      {
        paragraphs: [
          "Deployment is the easiest part of a fibre programme to fund and the easiest to celebrate. Trenching progress is photogenic; a network operations centre roster is not. Yet the long-run value of digital infrastructure sits almost entirely in what happens after handover — fault localisation times, spares logistics, power resilience at the site level, and the contractual clarity of who restores service at 03:00.",
        ],
      },
      {
        heading: "Design for the second decade",
        paragraphs: [
          "Our view is simple: specify operating requirements before route requirements. Where will monitoring live? Which faults are remediable remotely, and which require a vehicle, a permit and a landowner conversation? How are duct records kept so that the fifth contractor to work the route does not cut the second contractor's cable?",
          "These questions shape route selection, redundancy topology and even procurement structure. Answered late, they become the reason capacity exists on paper but not in practice.",
        ],
      },
      {
        heading: "Sovereignty is operational, not rhetorical",
        paragraphs: [
          "Public institutions increasingly want workloads, records and monitoring under national control. That ambition is achievable, but it is an operating commitment rather than a procurement clause: skilled local teams, documented runbooks, and succession planning for the handful of engineers who genuinely understand the estate. Building capability alongside capacity is the only version of digital sovereignty that survives a staff change.",
        ],
      },
    ],
  },
  {
    slug: "procurement-as-strategy",
    title: "Procurement as Strategy, Not Administration",
    dek: "In public-sector delivery, procurement design determines the outcome long before a supplier is appointed.",
    sector: "Management Consulting",
    date: "2026-04-21",
    readingMinutes: 6,
    image: "capetown",
    body: [
      {
        paragraphs: [
          "Procurement is often treated as the compliance layer that follows strategy. In institutional environments it is closer to the opposite: the tender document is the strategy, expressed in enforceable language. Specification choices decide which suppliers can bid, which risks transfer, and whether the institution retains the knowledge to run what it buys.",
        ],
      },
      {
        heading: "Where value leaks",
        paragraphs: [
          "Three patterns recur in public procurement. Specifications written around a product rather than an outcome, which narrows competition and inflates lifecycle cost. Evaluation criteria that reward the lowest capital number while ignoring maintainability. And award structures with no meaningful remedy when performance drifts in year three.",
          "None of these are corruption problems. They are design problems — and they are fixable with better drafting, clearer service levels and disciplined market engagement before the tender is issued.",
        ],
      },
      {
        heading: "A better starting point",
        paragraphs: [
          "Start by specifying what must be true at the end, then work backwards to the commercial instrument that makes it likely. Fewer, better-defined lots. Outcome-linked payment milestones. Explicit knowledge-transfer obligations. Documented decision trails that survive audit and leadership change.",
          "Good procurement rarely makes headlines. It quietly removes the reasons projects appear in them.",
        ],
      },
    ],
  },
  {
    slug: "downstream-fuel-reliability",
    title: "Downstream Reliability: Storage, Compliance and the Cost of Being Out of Stock",
    dek: "In fuel distribution, availability is the product. Everything else is logistics detail.",
    sector: "Petrochemicals",
    date: "2026-03-10",
    readingMinutes: 5,
    image: "petrochem",
    body: [
      {
        paragraphs: [
          "Downstream petroleum businesses compete on a narrow margin and an unforgiving promise: product, on specification, at the point of need. A dry site does not lose one transaction — it loses the account, and often the fleet contract attached to it.",
        ],
      },
      {
        heading: "Three disciplines that hold the promise",
        paragraphs: [
          "Storage positioning. Inventory held close to demand absorbs supply volatility that no contract can eliminate. Quality assurance. Sampling and custody discipline at every transfer point protects both the customer's equipment and the operator's licence to trade. Compliance posture. Environmental, health and safety obligations in the downstream sector are not overheads; they are the conditions under which the asset is permitted to operate at all.",
        ],
      },
      {
        heading: "The advisory role",
        paragraphs: [
          "The work that matters is usually structural rather than transactional: matching storage and haulage capacity to realistic demand curves, tightening custody and reconciliation processes, and preparing the documentation trail that regulators, insurers and financiers all eventually ask for.",
          "Reliability, done properly, looks like an absence of events. That is the point.",
        ],
      },
    ],
  },
  {
    slug: "mine-to-port-optimisation",
    title: "Mine to Port: Optimising the Chain That Actually Sets Realised Price",
    dek: "Extraction efficiency is a mining question. Realised value is a logistics and compliance question.",
    sector: "Mining Solutions",
    date: "2026-01-27",
    readingMinutes: 6,
    image: "mining",
    body: [
      {
        paragraphs: [
          "Producers invest heavily in the pit and the plant, then hand the product to a chain of intermediaries whose collective performance determines what the tonne is finally worth. Haulage availability, weighbridge integrity, stockpile management, rail slot allocation, port windows, documentation and assay disputes — each stage can quietly erase margin earned underground.",
        ],
      },
      {
        heading: "Instrument the chain",
        paragraphs: [
          "The first intervention is almost always measurement. Where does tonnage variance appear between the mine gate and the vessel? How long does material sit at each transfer point, and what does that dwell cost in working capital? Which counterparties consistently deliver against their nominated windows?",
          "Once the chain is instrumented, the decisions become straightforward: consolidate haulage where reliability is proven, pre-position stock ahead of seasonal constraints, and renegotiate the interfaces where variance concentrates.",
        ],
      },
      {
        heading: "Community and compliance are part of the chain",
        paragraphs: [
          "Route reliability depends on social licence as much as asphalt. Haul roads pass through communities; ports sit in municipalities; permits are renewed by officials who read local sentiment. Treating community engagement and environmental compliance as core logistics inputs — rather than corporate-affairs afterthoughts — is what keeps a chain running in its fifth year, not just its first.",
        ],
      },
    ],
  },
];

export const insightSectors = [
  "All",
  "Logistics",
  "ICT Infrastructure",
  "Management Consulting",
  "Petrochemicals",
  "Mining Solutions",
] as const;

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);

export const formatInsightDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });
