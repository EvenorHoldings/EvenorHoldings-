import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { insights, formatInsightDate } from "@/data/insights";
import Reveal from "./Reveal";

const LatestInsight = () => {
  const a = [...insights].sort((x, y) => y.date.localeCompare(x.date))[0];
  return (
    <section aria-labelledby="insight-title" className="section-home bg-offwhite border-t border-border">
      <Reveal className="container-wide">
        <span className="block h-px w-12 bg-gold mb-6" aria-hidden="true" />
        <p className="eyebrow-sm text-muted-foreground">{a.sector} · {formatInsightDate(a.date)}</p>
        <h2 id="insight-title" className="mt-4 max-w-3xl text-3xl md:text-[36px] font-semibold leading-tight text-ink">{a.title}</h2>
        <p className="home-body mt-5 text-muted-foreground">{a.dek.split(/(?<=\.)\s/)[0]}</p>
        <div className="mt-8 flex flex-wrap gap-8">
          <Link to={`/insights/${a.slug}`} className="link-arrow text-ink" aria-label={`Read: ${a.title}`}>Read <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link to="/insights" className="link-arrow text-muted-foreground">All insights</Link>
        </div>
      </Reveal>
    </section>
  );
};
export default LatestInsight;
