import { Check } from "lucide-react";
import { IMAGES } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";

const WhyEvenorSection = () => {
  return (
    <section id="about" className="bg-navy text-white">
      <div className="grid lg:grid-cols-2">
        <div className="px-8 md:px-16 lg:px-20 py-20 lg:py-32">
          <p className="gold-label mb-5">Why Evenor Holdings</p>
          <h2 className="font-display text-white text-3xl md:text-[44px] font-bold leading-tight mb-8">
            Africa Is Not a Market.<br />
            It Is Our Mandate.
          </h2>
          <div className="space-y-5 text-white/80 font-light leading-[1.8] text-base md:text-[17px]">
            <p>
              Most global firms arrive in Africa with solutions designed elsewhere, attempting to retrofit foreign models onto complex, fast-moving realities. Evenor Holdings was conceived differently — by Africans, for African institutions, with an intimate understanding of how decisions are made, trust is built, and change is sustained on this continent.
            </p>
            <p>
              We operate at the intersection of technical excellence and relationship intelligence. Our principals engage directly at the highest levels — with ministers, directors-general, port commissioners, and energy regulators — because we understand that in Africa, the right conversation in the right room matters as much as the right technical proposal.
            </p>
            <p>This is not transactional. This is transformational.</p>
          </div>

          <div className="mt-10 space-y-3">
            {[
              "Registered in South Africa — connected across the continent",
              "BBBEE Level 2 Contributor",
              "Multi-sector technical capacity with Tier-1 global partners",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3">
                <Check size={18} className="text-gold mt-1 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-white/90 text-sm md:text-base font-light">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center p-8 lg:p-20">
          <ResponsiveImage
            image={IMAGES.capetown}
            alt="Cape Town harbour and city skyline at dusk — Evenor Holdings head office region"
            sizes="(max-width: 1024px) 90vw, 520px"
            width={1920}
            height={1440}
            className="relative w-full max-w-[520px] aspect-[4/3] object-cover"
            style={{ boxShadow: "12px 12px 0 hsl(var(--gold))" }}
          />

        </div>
      </div>
    </section>
  );
};

export default WhyEvenorSection;
