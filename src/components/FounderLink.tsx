import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/** Small home-page strip pointing to the founder profile on /leadership and the group story on /about. */
const FounderLink = () => (
  <section aria-label="About the founder" className="bg-offwhite border-y border-navy/10">
    <div className="container-wide py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <p className="max-w-2xl text-lg leading-relaxed text-charcoal/80">
        Evenor Holdings was founded in Cape Town in 2025 by Joachim Urio, with one simple standard:
        whatever we build should leave things better than they were.
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-3 shrink-0">
        <Link
          to="/leadership"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy border-b-2 border-gold pb-1 hover:text-gold-ink transition-colors"
        >
          Meet the founder <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy border-b-2 border-gold pb-1 hover:text-gold-ink transition-colors"
        >
          Our story <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default FounderLink;
