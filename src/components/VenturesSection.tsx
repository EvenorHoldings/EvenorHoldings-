import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ventures } from "@/data/ventures";
import SectionHeader from "@/components/SectionHeader";
import VentureCard from "@/components/VentureCard";

const VenturesSection = () => (
  <section id="ventures" aria-labelledby="ventures-title" className="section-pad bg-offwhite">
    <div className="container-wide">
      <SectionHeader
        id="ventures-title"
        eyebrow="Our ventures"
        title="Companies we build and run."
        intro="Each venture is a focused business with its own brand and customers. The group supplies the capital, the operating discipline and the capabilities underneath."
      />
      <div className="grid gap-8">
        {ventures.map((v) => (
          <VentureCard key={v.slug} venture={v} />
        ))}
      </div>
      <Link
        to="/ventures"
        className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy border-b-2 border-gold pb-1 hover:text-gold-ink transition-colors"
      >
        All ventures <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  </section>
);

export default VenturesSection;
