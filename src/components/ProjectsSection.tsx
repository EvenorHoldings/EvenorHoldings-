import { useEffect, useRef, useState } from "react";
import { IMG } from "@/assets/images";

const cards = [
  {
    img: IMG.port,
    tag: "LOGISTICS & SUPPLY CHAIN",
    title: "Port-to-Hinterland Freight Orchestration",
    body: "Full-corridor logistics management from port gate to final destination — customs clearance, bonded warehousing, multimodal freight, and last-mile distribution engineered for Southern and East African trade routes.",
  },
  {
    img: IMG.ict,
    tag: "ICT INFRASTRUCTURE",
    title: "National-Scale Connectivity Engineering",
    body: "Turnkey fibre optic backbone deployment, enterprise core networking, internet gateway commissioning, and Wi-Fi 6 coverage for ports, campuses, and government facilities — designed to ITU-T, TIA-568, and TCRA standards. Executed with Tier-1 EPCC partners.",
  },
  {
    img: IMG.capetown,
    tag: "MANAGEMENT CONSULTING",
    title: "Boardroom-to-Implementation Advisory",
    body: "Strategic counsel for governments, parastatals, and multinationals navigating African regulatory complexity — from RFQ structuring and PPP design to institutional reform and digital transformation roadmapping. Principal-level engagement guaranteed.",
  },
  {
    img: IMG.petrochem,
    tag: "PETROCHEMICALS SOLUTIONS",
    title: "Downstream Energy Infrastructure",
    body: "Petroleum product procurement, fuel storage terminal commissioning, downstream distribution network design, and HSE-compliant facility engineering for refineries, port installations, and industrial fuel facilities across East and Southern Africa.",
  },
  {
    img: IMG.mining,
    tag: "MINING SOLUTIONS",
    title: "Mine-to-Market Value Chain Delivery",
    body: "Operational efficiency advisory, environmental compliance engineering, mineral processing technology integration, and mine-to-port logistics optimisation for junior and mid-tier operators — aligned to national Mining Commission frameworks.",
  },
];

const metrics = [
  { value: "5", label: "Core Sectors" },
  { value: "3", label: "Continental Time Zones" },
  { value: "12+", label: "Countries of Operation" },
  { value: "48hrs", label: "Response Commitment" },
  { value: "Tier-1", label: "Technical Partners" },
];

const CapacityCard = ({ c }: { c: typeof cards[0] }) => (
  <div className="relative overflow-hidden border-t-4 border-gold group min-h-[340px] flex flex-col justify-end shadow-xl">
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
      style={{ backgroundImage: `url('${c.img}')` }}
    />
    <div className="absolute inset-0 bg-navy-deep/80" />
    <div className="relative p-6 z-10">
      <span className="inline-block bg-gold text-navy text-[10px] font-bold px-3 py-1 tracking-[0.15em] uppercase mb-4 rounded-full">
        {c.tag}
      </span>
      <h3 className="font-display text-xl font-semibold text-white mb-3">{c.title}</h3>
      <p className="text-white/75 text-sm font-light leading-relaxed mb-5">{c.body}</p>
      <div className="flex items-center gap-2 pt-4 border-t border-white/15">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white text-xs font-medium tracking-wide">Deployment Ready</span>
      </div>
    </div>
  </div>
);

const Counter = ({ to }: { to: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);
  const started = useRef(false);
  const num = parseInt(to.replace(/\D/g, ""), 10);
  const isNumeric = !isNaN(num) && /^\d/.test(to);

  useEffect(() => {
    if (!isNumeric) return;
    const suffix = to.replace(/^\d+/, "");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const n = Math.round(num * (0.5 - Math.cos(Math.PI * p) / 2));
            setVal(`${n}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, num, isNumeric]);

  return <span ref={ref}>{val}</span>;
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-navy section-pad text-white">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="gold-label mb-4">Our Capacity</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-white mb-6">
            What Evenor Holdings Brings to the Table.
          </h2>
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
            We do not lead with what we have done. We lead with what we are built to do — and the partners, technical depth, and principal-level access that make us the right choice before the contract is signed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((c) => <CapacityCard key={c.title} c={c} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 lg:max-w-[66%] lg:mx-auto">
          {cards.slice(3).map((c) => <CapacityCard key={c.title} c={c} />)}
        </div>
      </div>

      <div className="mt-20 bg-navy-deep py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-gold text-4xl md:text-[44px] font-bold mb-2">
                  <Counter to={m.value} />
                </div>
                <div className="text-white text-[11px] md:text-[13px] uppercase tracking-[0.18em] font-normal">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center italic text-white text-[15px] font-light max-w-2xl mx-auto mt-12 leading-relaxed">
            "Evenor Holdings principals engage directly with government authorities, parastatal boards, and C-suite counterparts — because the right relationship determines the right outcome."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
