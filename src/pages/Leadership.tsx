import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Shield, Scale, Users, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import PageHero from "@/components/PageHero";
import { CEO_IMAGE } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";

const governance = [
  {
    icon: Shield,
    title: "Principal-Led Engagement",
    body: "Every client relationship is held at principal level. There are no account executives between our institutional counterparts and the office of the CEO.",
  },
  {
    icon: Scale,
    title: "Regulatory Standing",
    body: "B-BBEE Level 2 certified. South African Company Registration K2025/717968. Compliance frameworks aligned to POPIA, OSHA, NEMA, and jurisdiction-specific mandates.",
  },
  {
    icon: Users,
    title: "Advisory Council",
    body: "A curated council of sector specialists — mining, petroleum, digital infrastructure, sovereign finance — convenes quarterly to stress-test mandates and market posture.",
  },
  {
    icon: FileText,
    title: "Corporate Charter",
    body: "Every engagement is governed by the Evenor Corporate Charter (2024) — a public commitment to the standards under which we deploy capital, capacity and counsel.",
  },
];

const Leadership = () => {
  useEffect(() => {
    document.title = "Leadership · Office of the CEO · Evenor Holdings";
    const desc = "Meet Joachim Urio, Founder & CEO of Evenor Holdings, and the governance framework underpinning our principal-led engagement model across Sub-Saharan Africa.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title="Leadership & Governance | Evenor Holdings | Joachim Urio, Founder & CEO"
        description="Meet Joachim Urio, Founder & CEO of Evenor Holdings, and read our governance framework: principal-led engagement, regulatory standing, advisory council and corporate charter."
        type="profile"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joachim Urio",
          jobTitle: "Founder & Chief Executive Officer",
          worksFor: { "@type": "Organization", name: "Evenor Holdings (Pty) Ltd" },
          email: "joachim@evenor.org",
        }}
      />
      <Navbar />

      <main id="main-content">
        <PageHero
          eyebrow="Leadership"
          title="The Vision Behind the Work."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
          image={IMG.capetown}
        />

        {/* CEO Full Profile */}
        <section className="section-pad bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-[440px_1fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mx-auto lg:mx-0 lg:sticky lg:top-32"
              >
                <div className="relative w-[300px] sm:w-[380px] lg:w-[440px] aspect-[4/5] overflow-hidden shadow-[0_20px_60px_-20px_rgba(11,37,69,0.5)] border-l-4 border-gold">
                  <ResponsiveImage
                    image={CEO_IMAGE}
                    alt="Joachim Urio, Founder & CEO of Evenor Holdings"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 440px"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-navy font-display text-2xl font-bold">Joachim Urio</p>
                  <p className="gold-ink text-[11px] font-semibold tracking-[0.22em] uppercase mt-1.5">
                    Founder & Chief Executive Officer
                  </p>
                  <p className="text-charcoal/75 text-sm mt-2">Cape Town, South Africa</p>
                  <div className="flex items-center gap-5 mt-5 pt-5 border-t border-navy/10">
                    <a href="#" className="flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm">
                      <Linkedin size={16} /> LinkedIn
                    </a>
                    <a
                      href="mailto:joachim@evenor.org"
                      className="flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm"
                    >
                      <Mail size={16} /> Executive Office
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <p className="gold-label gold-ink mb-4">Letter from the CEO</p>
                <h2 className="font-display italic text-navy text-2xl md:text-[28px] leading-snug mb-10">
                  "Africa does not need to be fixed. It needs to be built — with ambition equal to its potential."
                </h2>
                <div className="space-y-6 text-charcoal/85 text-[16px] md:text-[17px] font-light leading-[1.9]">
                  <p>
                    I founded Evenor Holdings on a conviction that has only deepened with every project we have delivered: that the African continent possesses everything it needs to sustain world-class infrastructure, industrial capacity, and technological sovereignty — what it has historically lacked is not resources, but partners who take it seriously.
                  </p>
                  <p>
                    We take it seriously. When Evenor Holdings enters a room — whether that room is a minister's office in Dar es Salaam, a port authority boardroom in Cape Town, or a mining commissioner's office in Lusaka — we arrive with fully-engineered solutions, credible partnerships, and the long-term commitment that African institutions deserve and have too rarely received.
                  </p>
                  <p>
                    Our philosophy is not a slogan.{" "}
                    <em className="text-navy not-italic font-medium">'Always Better'</em> is a non-negotiable operating standard. Every structure we raise, every network we commission, every barrel we facilitate, and every strategy we recommend must leave the institution, the community, and the continent measurably better than we found it.
                  </p>
                  <p>
                    We are not here for the quick win. We are here to build the infrastructure that Africa's next century demands — one project, one partnership, one better outcome at a time.
                  </p>
                  <p className="text-navy font-medium not-italic pt-4">— Joachim Urio, CEO</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="section-pad bg-smoke">
          <div className="container-wide">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="gold-label gold-ink mb-4">Governance</p>
              <h2 className="font-display text-navy text-3xl md:text-[44px] font-bold mb-6">
                Standards Held in the Open.
              </h2>
              <p className="text-charcoal/75 font-light leading-relaxed text-base md:text-lg">
                The frameworks under which Evenor engages counterparties, deploys capital, and stewards institutional trust.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {governance.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white p-8 border-l-4 border-gold shadow-[0_4px_24px_rgba(11,37,69,0.06)]"
                >
                  <g.icon size={28} className="text-gold mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-navy text-xl font-bold mb-3">{g.title}</h3>
                  <p className="text-charcoal/75 text-[15px] leading-[1.8] font-light">{g.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Leadership Notice */}
        <section className="py-20 bg-offwhite">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <div className="border-t border-b border-navy/15 py-10">
              <p className="gold-label gold-ink mb-4">Wider Bench</p>
              <p className="font-display italic text-navy text-xl md:text-2xl leading-snug mb-4">
                Additional leadership and specialist profiles are available upon request to credentialed counterparts.
              </p>
              <p className="text-charcoal/70 text-sm font-light">
                Written enquiries may be directed to the office of the CEO at{" "}
                <a href="mailto:joachim@evenor.org" className="text-navy underline underline-offset-4 hover:text-gold transition-colors">
                  joachim@evenor.org
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Closing quote band */}
        <section
          className="relative py-24 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.capetown})` }}
        >
          <div className="absolute inset-0 bg-navy/85" />
          <div className="relative container-wide max-w-3xl mx-auto text-center text-white">
            <p className="font-display italic text-white text-2xl md:text-[28px] leading-snug">
              "The projects that transform nations are not won in tenders alone — they are earned in relationships, sustained by excellence, and delivered with unflinching commitment."
            </p>
            <p className="text-gold text-[13px] mt-6 tracking-[0.2em] uppercase font-semibold">
              — Evenor Holdings, Corporate Charter 2024
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default Leadership;
