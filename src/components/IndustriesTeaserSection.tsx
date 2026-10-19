import { motion } from "framer-motion";
import {
  Landmark,
  Pickaxe,
  Zap,
  Truck,
  Wheat,
  Droplets,
  HeartPulse,
  Factory,
} from "lucide-react";

const industries = [
  { icon: Landmark, label: "Government & Parastatal" },
  { icon: Pickaxe, label: "Mining & Minerals" },
  { icon: Zap, label: "Energy & Utilities" },
  { icon: Truck, label: "Transportation & Ports" },
  { icon: Wheat, label: "Agriculture & Agri-Processing" },
  { icon: Droplets, label: "Water & Sanitation" },
  { icon: HeartPulse, label: "Healthcare Infrastructure" },
  { icon: Factory, label: "Industrial Manufacturing" },
];

const IndustriesTeaserSection = () => {
  return (
    <section id="industries" className="section-pad bg-offwhite">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="gold-label gold-ink mb-4">Industries We Serve</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-navy mb-6">
            Eight Sectors. One Standard of Delivery.
          </h2>
          <p className="text-charcoal/75 text-base md:text-lg font-light leading-relaxed">
            Evenor Holdings partners with institutions at the centre of Africa's
            development agenda — from ministries and utilities to mines, ports
            and hospitals — delivering infrastructure and technology that endures.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {industries.map(({ icon: Icon, label }, idx) => (
            <motion.button
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative bg-white border border-navy/10 hover:border-gold p-6 md:p-8 text-left transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 h-[3px] w-10 bg-gold group-hover:w-full transition-all duration-500" />
              <Icon
                size={28}
                className="text-navy group-hover:text-gold transition-colors mb-5"
                strokeWidth={1.5}
              />
              <p className="font-display text-navy text-base md:text-lg font-bold leading-snug mb-1">
                {label}
              </p>
              <p className="text-charcoal/80 text-[11px] tracking-[0.18em] uppercase font-medium mt-3 group-hover:text-gold transition-colors">
                Learn More →
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesTeaserSection;
