import { IMAGES } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";

const HeroSection = () => (
  <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy">
    <ResponsiveImage
      image={IMAGES.port}
      alt="Container cranes and stacked cargo at a South African port at dusk"
      priority
      sizes="100vw"
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/40" aria-hidden="true" />

    <div className="container-wide w-full py-32">
      <p className="eyebrow-sm text-white/70 mb-6">Cape Town · Founded 2025</p>
      <h1 id="hero-title" className="home-h1 text-white max-w-4xl">Building African ventures that change lives.</h1>
      <p className="home-body mt-8 text-white/85">
        Evenor Holdings starts, owns and grows businesses that make everyday life better.
      </p>
      <a href="#ventures" className="btn-primary mt-10">See our ventures</a>
    </div>
    <span className="absolute bottom-8 left-1/2 h-12 w-px bg-white/40 motion-safe:animate-pulse" aria-hidden="true" />
  </section>
);

export default HeroSection;
