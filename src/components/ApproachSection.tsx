import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    n: "01",
    title: "Find a real problem",
    desc: "We start where a South African household or business is paying too much, waiting too long or being underserved.",
  },
  {
    n: "02",
    title: "Build it ourselves",
    desc: "Small teams own each venture end to end: brand, product, operations and customers. No outsourcing of the hard parts.",
  },
  {
    n: "03",
    title: "Back it with the group",
    desc: "Ventures draw on group capabilities in logistics, ICT, consulting, petrochemicals and mining as they need them.",
  },
  {
    n: "04",
    title: "Prove, then scale",
    desc: "Pilots come before launches and evidence before claims. A venture grows when the numbers say it should.",
  },
];

const ApproachSection = () => (
  <section id="approach" aria-labelledby="approach-title" className="section-pad bg-navy text-white">
    <div className="container-wide">
      <SectionHeader
        inverse
        id="approach-title"
        eyebrow="Our approach · Always Better"
        title="How we build."
        intro="Our standard is simple: whatever we put into the world should leave things better than they were."
      />
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="border-t border-gold/60 pt-6">
            <p className="font-display text-gold text-sm font-semibold mb-4">{s.n}</p>
            <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
            <p className="text-white/70 leading-relaxed">{s.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ApproachSection;
