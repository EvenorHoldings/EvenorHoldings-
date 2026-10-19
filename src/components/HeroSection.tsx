import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Network, Brain, Droplet, Mountain, Pause, Play } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { IMAGES } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";

const slides = [
  {
    image:
      IMAGES.port,
    eyebrow: "Cape Town · Johannesburg · Dar es Salaam · Nairobi",
    title: ["Building the Infrastructure", "Africa Deserves."],
    body: "A South African-headquartered industrial and technology conglomerate delivering turnkey solutions across Logistics, ICT, Consulting, Petrochemicals and Mining — with procurement executed as a supporting capability across every division, under a single mandate:",
  },
  {
    image:
      IMAGES.corridor,
    eyebrow: "Multi-Sector · Continental Reach · Institutional Grade",
    title: ["Engineered for Governments,", "Trusted by Enterprise."],
    body: "From national fibre backbones to port logistics, Evenor Holdings delivers projects that meet the standards of governments, parastatals and Tier-1 institutions across Sub-Saharan Africa —",
  },
  {
    image:
      IMAGES.port,
    eyebrow: "Turnkey Delivery · Strategic Partnerships · Long-Term Capital",
    title: ["A Principal-Led,", "Long-View Conglomerate."],
    body: "We do not chase transactions. Evenor Holdings partners with governments, OEMs and institutional capital on the infrastructure that will define the next century of African growth —",
  },
];

const sectors = [
  { icon: Truck, label: "LOGISTICS" },
  { icon: Network, label: "ICT" },
  { icon: Brain, label: "CONSULTING" },
  { icon: Droplet, label: "PETROCHEMICALS" },
  { icon: Mountain, label: "MINING" },
];

const HeroSection = () => {
  const [i, setI] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);

  const autoplay = !paused && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [autoplay]);

  const go = (h: string) =>
    document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      aria-label="Evenor Holdings introduction"
      className="relative min-h-dvh flex flex-col overflow-hidden"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          aria-hidden="true"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.2 : 1.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <ResponsiveImage
            image={slides[i].image}
            alt=""
            aria-hidden
            priority={i === 0}
            sizes="100vw"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-navy/[0.82]" aria-hidden="true" />


      <div className="relative flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.2 : 0.9, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <p className="gold-label mb-8">{slides[i].eyebrow}</p>

            <h1 className="font-display text-5xl sm:text-7xl font-semibold leading-[0.95] text-white mb-8">
              {slides[i].title[0]}<br />
              {slides[i].title[1]}
            </h1>

            <p className="text-white/90 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
              {slides[i].body}{" "}
              <em className="text-gold not-italic font-normal">Always Better.</em>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => go("#sectors")}
                className="btn-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Our Sectors
              </button>
              <button
                onClick={() => go("#contact")}
                className="btn-outline-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Request a Consultation
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1"
          role="group"
          aria-label="Hero slides"
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-current={idx === i ? "true" : undefined}
              aria-label={`Show slide ${idx + 1} of ${slides.length}`}
              className="min-h-11 min-w-11 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span
                aria-hidden="true"
                className={`block h-[3px] transition-all duration-500 ${
                  idx === i ? "w-10 bg-gold" : "w-5 bg-white/70"
                }`}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            aria-label={paused ? "Resume hero slideshow" : "Pause hero slideshow"}
            className="ml-3 min-h-11 min-w-11 flex items-center justify-center text-white/80 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {paused || reducedMotion ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className="relative bg-navy-deep border-t border-white/10">
        <div className="container-wide py-5 grid grid-cols-3 md:grid-cols-6 gap-4">
          {sectors.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="group flex flex-col items-center justify-center gap-2 min-h-11 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              onClick={() => go("#sectors")}
            >
              <Icon size={20} aria-hidden="true" className="text-white group-hover:text-gold transition-colors" />
              <span className="text-white group-hover:text-gold text-[10px] md:text-[11px] font-medium tracking-[0.18em] transition-colors text-center">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
