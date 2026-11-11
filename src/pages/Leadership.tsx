import { Mail, Shield, Scale, Users, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";
import PageHero from "@/components/PageHero";
import { CEO_IMAGE } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";

const governance = [
  {
    icon: Shield,
    title: "Founder-Led",
    body: "Evenor Holdings is led directly by its founder. Partners, investors and customers deal with the people who make the decisions.",
  },
  {
    icon: Scale,
    title: "Registered & Accountable",
    body: "Evenor Holdings (Pty) Ltd is a private company incorporated in South Africa in 2025 (Reg. No. K2025/717968). We handle personal information in line with POPIA.",
  },
  {
    icon: Users,
    title: "Honest by Default",
    body: "We say what we are doing and how far along we are. Pilots are called pilots, plans are called plans, and we publish results only when we have them.",
  },
  {
    icon: FileText,
    title: "Built for the Long Term",
    body: "We own and grow our ventures rather than flip them, and we judge every decision by whether it leaves people and communities better off.",
  },
];

const Leadership = () => {

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title="Joachim Urio, Founder & CEO | Leadership | Evenor Holdings"
        description="Meet Joachim Urio, who founded Evenor Holdings in Cape Town in 2025 to build African ventures that change lives, and read the principles that guide how the group is run."
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
          title="Meet the Founder."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
          image={IMG.capetown}
        />

        {/* CEO Full Profile */}
        <section className="section-pad bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-[440px_1fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
              <div
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
                    <a
                      href="mailto:joachim@evenor.org"
                      className="flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm"
                    >
                      <Mail size={16} /> Executive Office
                    </a>
                  </div>
                </div>
              </div>

              <div
              >
                <p className="gold-label gold-ink mb-4">A note from the founder</p>
                <h2 className="font-display italic text-navy text-2xl md:text-[28px] leading-snug mb-10">
                  "Africa does not need to be fixed. It needs to be built, with ambition equal to its potential."
                </h2>
                <div className="space-y-6 text-charcoal/85 text-[16px] md:text-[17px] font-light leading-[1.9]">
                  <p>
                    I founded Evenor Holdings in 2025 on a simple conviction: the businesses that will change daily life on this continent can be started, built and owned here, by people who understand the problems first-hand.
                  </p>
                  <p>
                    We are a young company and we are proud of it. Our first ventures, Moodies and OSTO, are small, real and learning fast. Each one teaches us how to build the next, and each one is held to the same standard.
                  </p>
                  <p>
                    That standard is{" "}
                    <em className="text-navy not-italic font-medium">'Always Better'</em>. Every product we launch and every partnership we enter should leave our customers, our partners and our communities better off than before.
                  </p>
                  <p>
                    We are not here for the quick win. We are here to build lasting companies, one venture, one partnership and one better outcome at a time. If that is the kind of future you want to help build, I would like to hear from you.
                  </p>
                  <p className="text-navy font-medium not-italic pt-4">— Joachim Urio, Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="section-pad bg-smoke">
          <div className="container-wide">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <p className="gold-label gold-ink mb-4">Governance</p>
              <h2 className="display-lg text-navy mb-6">
                How We Hold Ourselves.
              </h2>
              <p className="text-charcoal/75 font-light leading-relaxed text-base md:text-lg">
                The principles that guide how Evenor Holdings is run as it grows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {governance.map((g, i) => (
                <div
                  key={g.title}
                  className="bg-white p-8 border-l-4 border-gold shadow-[0_4px_24px_rgba(11,37,69,0.06)]"
                >
                  <g.icon size={28} className="text-gold mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-navy mb-3">{g.title}</h3>
                  <p className="text-charcoal/75 text-[15px] leading-[1.8] font-light">{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Leadership Notice */}
        <section className="py-20 bg-offwhite">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <div className="border-t border-b border-navy/15 py-10">
              <p className="gold-label gold-ink mb-4">Join Us</p>
              <p className="font-display italic text-navy text-xl md:text-2xl leading-snug mb-4">
                We are building our team. If you want to help build what comes next, we would love to hear from you.
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
              "Whatever we put into the world should leave things better than they were."
            </p>
            <p className="text-gold text-[13px] mt-6 tracking-[0.2em] uppercase font-semibold">
              — Always Better
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
