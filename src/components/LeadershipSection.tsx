import { Mail, Linkedin } from "lucide-react";
import { CEO_IMAGE } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";
import { IMG } from "@/assets/images";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="bg-offwhite section-pad">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="gold-label gold-ink mb-4">Leadership</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-navy">
            The Vision Behind the Work.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="mx-auto lg:mx-0">
            <div className="relative w-[280px] sm:w-[360px] lg:w-[420px] aspect-[4/5] overflow-hidden shadow-[0_20px_50px_-20px_rgba(11,37,69,0.4)] border-l-4 border-gold group">
              <ResponsiveImage
                image={CEO_IMAGE}
                alt="Joachim Urio, Founder & CEO of Evenor Holdings"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="text-navy font-semibold text-lg">Joachim Urio</p>
              <p className="gold-ink text-[11px] font-medium tracking-[0.2em] uppercase mt-1">
                Founder & Chief Executive Officer
              </p>
              <p className="text-charcoal/75 text-sm mt-1">Cape Town, South Africa</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="gold-label gold-ink mb-4">From the CEO</p>
            <h3 className="font-display italic text-navy text-2xl md:text-[28px] leading-snug mb-8">
              "Africa does not need to be fixed. It needs to be built — with ambition equal to its potential."
            </h3>
            <div className="space-y-5 text-charcoal/85 text-[15px] md:text-base font-light leading-[1.9]">
              <p>I founded Evenor Holdings on a conviction that has only deepened with every project we have delivered: that the African continent possesses everything it needs to sustain world-class infrastructure, industrial capacity, and technological sovereignty — what it has historically lacked is not resources, but partners who take it seriously.</p>
              <p>We take it seriously. When Evenor Holdings enters a room — whether that room is a minister's office in Dar es Salaam, a port authority boardroom in Cape Town, or a mining commissioner's office in Lusaka — we arrive with fully-engineered solutions, credible partnerships, and the long-term commitment that African institutions deserve and have too rarely received.</p>
              <p>Our philosophy is not a slogan. <em className="text-navy">'Always Better'</em> is a non-negotiable operating standard. Every structure we raise, every network we commission, every barrel we facilitate, and every strategy we recommend must leave the institution, the community, and the continent measurably better than we found it.</p>
              <p>We are not here for the quick win. We are here to build the infrastructure that Africa's next century demands — one project, one partnership, one better outcome at a time.</p>
              <p className="text-navy font-medium not-italic">— Joachim Urio, CEO</p>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-navy/10">
              <a href="#" className="flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="mailto:joachim@evenor.org" className="flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm">
                <Mail size={16} /> joachim@evenor.org
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <p className="text-center italic font-light" style={{ color: "hsl(var(--charcoal) / 0.8)", fontSize: "14px" }}>
            Additional leadership profiles available upon request to credentialed counterparts.
          </p>
        </div>
      </div>

      <div
        className="relative mt-20 h-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.capetown})` }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <p className="font-display italic text-white text-2xl md:text-[28px] leading-snug">
            "The projects that transform nations are not won in tenders alone — they are earned in relationships, sustained by excellence, and delivered with unflinching commitment."
          </p>
          <p className="text-gold text-[13px] mt-4 font-normal">— Evenor Holdings, Corporate Charter 2024</p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
