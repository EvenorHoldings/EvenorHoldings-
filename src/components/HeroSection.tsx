import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";
import { sectorNav } from "@/data/sectorNav";
import { contactHref } from "@/lib/site";

const HeroSection = () => (
  <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy">
    <ResponsiveImage
      image={IMAGES.port}
      alt=""
      aria-hidden
      priority
      sizes="100vw"
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/90 via-navy/85 to-navy" aria-hidden="true" />

    <div className="container-wide pt-36 pb-20 md:pt-48 md:pb-28">
      <p className="eyebrow text-gold mb-6 animate-fade-in">Cape Town · Founded 2025</p>
      <h1 id="hero-title" className="display-xl text-white max-w-4xl animate-fade-up">
        Building African ventures that change lives.
      </h1>
      <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
        Evenor Holdings is an emerging South African holding company. We start, own and grow
        ventures that make everyday life better, beginning with Moodies and OSTO, and we are
        building the group across logistics, ICT, consulting, petrochemicals and mining.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link to="/ventures" className="btn-gold">
          See our ventures <ArrowRight size={16} className="ml-2" aria-hidden="true" />
        </Link>
        <Link to={contactHref("partnership")} className="btn-outline-white">
          Partner with us
        </Link>
      </div>
    </div>

    <div className="border-t border-white/10 bg-navy-deep/60">
      <ul className="container-wide grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-1 py-4" aria-label="Capabilities">
        {sectorNav.map((s) => (
          <li key={s.slug}>
            <Link
              to={`/sectors/${s.slug}`}
              className="flex min-h-11 items-center text-xs font-medium uppercase tracking-[0.16em] text-white/70 hover:text-gold transition-colors"
            >
              {s.short}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HeroSection;
