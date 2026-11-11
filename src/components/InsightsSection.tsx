import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";
import SectionHeader from "@/components/SectionHeader";

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

const InsightsSection = () => {
  const latest = [...insights].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <section id="insights" aria-labelledby="insights-title" className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeader id="insights-title" eyebrow="Insights" title="Ideas we are building on." />
        <ul className="grid gap-8 md:grid-cols-3">
          {latest.map((i) => (
            <li key={i.slug} className="group relative border-t-2 border-navy/10 pt-6 hover:border-gold transition-colors">
              <p className="text-xs uppercase tracking-[0.14em] text-charcoal/60 mb-3">
                {i.sector} · <time dateTime={i.date}>{fmt(i.date)}</time>
              </p>
              <h3 className="text-xl font-semibold leading-snug text-navy mb-3">
                <Link
                  to={`/insights/${i.slug}`}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold before:absolute before:inset-0 before:content-['']"
                >
                  {i.title}
                </Link>
              </h3>
              <p className="text-charcoal/75 leading-relaxed">{i.dek}</p>
            </li>
          ))}
        </ul>
        <Link
          to="/insights"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-navy border-b-2 border-gold pb-1 hover:text-gold-ink transition-colors"
        >
          All insights <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default InsightsSection;
