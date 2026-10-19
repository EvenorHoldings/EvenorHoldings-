import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CEO_IMAGE } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";

const FounderSection = () => (
  <section id="founder" aria-labelledby="founder-title" className="section-pad bg-offwhite">
    <div className="container-wide grid gap-12 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16 items-center">
      <div className="mx-auto w-full max-w-[320px] md:max-w-none">
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-navy/10">
          <ResponsiveImage
            image={CEO_IMAGE}
            alt="Joachim Urio, Founder and CEO of Evenor Holdings"
            sizes="(max-width: 768px) 320px, 360px"
            width={800}
            height={1000}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
      <div>
        <p className="eyebrow gold-ink mb-4">Founder</p>
        <h2 id="founder-title" className="display-lg text-navy">Joachim Urio</h2>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-charcoal/70">
          Founder & CEO · Cape Town
        </p>
        <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-2xl md:text-3xl leading-snug text-navy">
          “Africa does not need to be fixed. It needs to be built, with ambition equal to its potential.”
        </blockquote>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          Joachim founded Evenor Holdings to build businesses on the continent rather than simply advise
          them. He leads the group's ventures and its capability teams, and remains the first point of
          contact for partners and investors.
        </p>
        <Link
          to="/leadership"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy border-b-2 border-gold pb-1 hover:text-gold-ink transition-colors"
        >
          Leadership and governance <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default FounderSection;
