import type { LucideIcon } from "lucide-react";
import { Truck, Network, Brain, Droplet, Mountain, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";

const capabilities: { slug: string; icon: LucideIcon; name: string; desc: string; tags: string[] }[] = [
  {
    slug: "logistics",
    icon: Truck,
    name: "Logistics & Supply Chain",
    desc: "Freight management, port logistics, last-mile distribution, cold chain and cross-border corridor work across Southern and East Africa.",
    tags: ["Freight", "Ports", "Cross-border", "Cold chain"],
  },
  {
    slug: "ict",
    icon: Network,
    name: "ICT Infrastructure",
    desc: "Connectivity, fibre deployment, enterprise networking, data-centre fit-out and smart-port digitisation.",
    tags: ["Fibre", "Data centres", "Connectivity", "Smart ports"],
  },
  {
    slug: "consulting",
    icon: Brain,
    name: "Management Consulting",
    desc: "Strategy, organisational design, public-sector reform, regulatory navigation and investment facilitation in African markets.",
    tags: ["Strategy", "Public sector", "Investment", "Reform"],
  },
  {
    slug: "petrochemicals",
    icon: Droplet,
    name: "Petrochemicals",
    desc: "Petroleum product trading, fuel storage and distribution, downstream supply chain and HSE-compliant facility engineering.",
    tags: ["Trading", "Storage", "Downstream", "HSE"],
  },
  {
    slug: "mining",
    icon: Mountain,
    name: "Mining Solutions",
    desc: "Mineral processing advisory, mine-to-port logistics, tailings and environmental compliance for junior and mid-tier operators.",
    tags: ["Processing", "Mine-to-port", "Compliance", "Technology"],
  },
];

const SectorsSection = () => (
  <section id="capabilities" aria-labelledby="capabilities-title" className="section-pad bg-white">
    <div className="container-wide">
      <SectionHeader
        id="capabilities-title"
        eyebrow="Capabilities"
        title="Five capabilities we are building the group on."
        intro="These are the sectors we know and intend to grow in. They give our ventures a toolkit to draw on, and they are where we see the next ventures taking shape."
      />
      <ul className="grid gap-px bg-navy/10 border border-navy/10 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ slug, icon: Icon, name, desc, tags }) => (
          <li key={slug} className="group relative bg-white p-8 transition-colors hover:bg-offwhite">
            <Icon size={28} strokeWidth={1.5} className="text-navy mb-6" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-navy mb-3">
              <Link
                to={`/sectors/${slug}`}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold before:absolute before:inset-0 before:content-['']"
              >
                {name}
              </Link>
            </h3>
            <p className="text-[15px] leading-relaxed text-charcoal/75">{desc}</p>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-navy/60">{tags.join(" · ")}</p>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="absolute right-6 top-8 text-gold-ink opacity-0 transition-opacity group-hover:opacity-100"
            />
          </li>
        ))}
        <li className="relative bg-navy p-8 text-white flex flex-col justify-between">
          <p className="text-lg leading-relaxed text-white/85">
            Procurement runs across every capability as a supporting function.
          </p>
          <Link to="/ventures" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-bright">
            See what we're building <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default SectorsSection;
