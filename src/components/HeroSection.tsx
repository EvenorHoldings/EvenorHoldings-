import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";
import { contactHref } from "@/lib/site";

const HeroSection = () => (
  <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy">
    <ResponsiveImage
      image={IMAGES.port}
      alt=""
      aria-hidden
      priority
      sizes="100vw"
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/40" aria-hidden="true" />

    <div className="container-wide w-full py-32">
      <p className="eyebrow-sm text-gold mb-6">Cape Town · Founded 2025</p>
      <h1 id="hero-title" className="home-h1 text-white max-w-4xl">Building African ventures that change lives.</h1>
      <p className="home-body mt-8 text-white/85">
        Evenor Holdings starts, owns and grows businesses that make everyday life better.
      </p>
      <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <a href="#ventures" className="btn-primary">See our ventures</a>
        <Link to={contactHref("partnership")} className="link-arrow text-white">
          Partner with us <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
    <span className="absolute bottom-8 left-1/2 h-12 w-px bg-gold motion-safe:animate-pulse" aria-hidden="true" />
  </section>
);

export default HeroSection;
