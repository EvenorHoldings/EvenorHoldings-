import { Truck, Network, Brain, Droplet, Mountain, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const sectors = [
  {
    slug: "logistics",
    icon: Truck,
    name: "LOGISTICS & SUPPLY CHAIN",
    desc: "End-to-end freight management, port logistics, last-mile distribution, cold-chain solutions, and cross-border corridor optimisation across Southern and East Africa. We move what matters — on time, every time.",
    tags: ["Freight", "Ports", "Cross-Border", "Cold-Chain"],
  },
  {
    slug: "ict",
    icon: Network,
    name: "ICT INFRASTRUCTURE",
    desc: "Turnkey internet connectivity, fibre optic backbone deployment, enterprise networking, data centre fit-out, and smart port digitisation. From submarine cable landing stations to the last-mile access point.",
    tags: ["Fibre", "Data Centres", "Connectivity", "Smart Ports"],
  },
  {
    slug: "consulting",
    icon: Brain,
    name: "MANAGEMENT CONSULTING",
    desc: "Strategic advisory, organisational design, public sector reform, regulatory navigation, and investment facilitation for governments, parastatals, and multinationals operating in complex African markets.",
    tags: ["Strategy", "Public Sector", "Investment", "Reform"],
  },
  {
    slug: "petrochemicals",
    icon: Droplet,
    name: "PETROCHEMICALS SOLUTIONS",
    desc: "Petroleum product trading, fuel storage and distribution infrastructure, downstream supply chain management, and HSE-compliant facility engineering for refineries, terminals, and port fuel installations.",
    tags: ["Trading", "Storage", "Downstream", "HSE"],
  },
  {
    slug: "mining",
    icon: Mountain,
    name: "MINING SOLUTIONS",
    desc: "Mineral processing advisory, mine-to-port logistics, tailings management, environmental compliance consulting, and technology integration for junior and mid-tier mining operations across Sub-Saharan Africa.",
    tags: ["Processing", "Mine-to-Port", "Compliance", "Tech"],
  },
];

const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setSeen(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
};

const SectorsSection = () => {
  const go = (h: string) => document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="sectors" className="bg-offwhite section-pad relative overflow-hidden">
      {/* subtle ambient ornament */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-gold/5 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-navy/5 blur-3xl" />

      <div className="container-wide relative">
        <div className="text-center mb-16">
          <p className="gold-label gold-ink mb-4">Our Core Activities</p>
          <h2 className="font-display text-navy text-3xl md:text-5xl font-bold">
            Five Sectors. One Standard.
          </h2>
          <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {sectors.slice(0, 3).map((s, i) => (
            <SectorCard key={s.name} index={i} {...s} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 md:max-w-[66%] md:mx-auto">
          {sectors.slice(3).map((s, i) => (
            <SectorCard key={s.name} index={i + 3} {...s} />
          ))}
        </div>

        <div className="text-center mt-14">
          <button onClick={() => go("#deepdive")} className="group inline-flex items-center gap-2 text-navy font-medium tracking-wide text-sm border-b-2 border-gold pb-1 hover:text-gold transition-colors">
            See Sector Intelligence
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const SectorCard = ({
  icon: Icon,
  name,
  desc,
  tags,
  index,
  slug,
}: {
  icon: any;
  name: string;
  desc: string;
  tags: string[];
  index: number;
  slug: string;
}) => {
  const { ref, seen } = useInView<HTMLDivElement>();
  const navigate = useNavigate();
  const goDeep = () => {
    navigate(`/sectors/${slug}`);
    window.scrollTo(0, 0);
  };
  return (
    <article
      ref={ref}
      style={{
        transitionDelay: `${Math.min(index, 3) * 80}ms`,
        opacity: seen ? 1 : 0,
      }}
      className="group relative bg-white p-8 min-h-[300px] flex flex-col transition-[opacity,transform,box-shadow] duration-400 ease-out border border-border border-l-[3px] border-l-gold rounded-[4px] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(11,37,69,0.12)] focus-within:-translate-y-1"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 bg-navy/5">
          <Icon size={28} className="text-navy" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-base tracking-[0.08em] mb-3 text-navy">
          {name}
        </h3>
        <p className="text-[15px] leading-relaxed font-light flex-1 text-charcoal/75">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-[0.15em] px-2 py-1 border border-navy/15 text-navy/70"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={goDeep}
          aria-label={`Explore the ${name} sector`}
          className="inline-flex items-center gap-1.5 gold-ink text-sm font-medium mt-5 self-start min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold before:absolute before:inset-0 before:content-['']"
        >
          <span className="border-b border-gold/0 group-hover:border-gold transition-all">Explore Sector</span>
          <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </article>


  );
};

export default SectorsSection;
