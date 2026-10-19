import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";

const values = ["Integrity", "Ambition", "Ownership", "Long-term thinking", "Always Better"];

const journey = [
  {
    when: "2025",
    title: "Evenor Holdings founded",
    body: "Incorporated in Cape Town, South Africa (Reg. No. K2025/717968) as a holding company with one job: to build ventures that leave things better than they were.",
  },
  {
    when: "Now",
    title: "First ventures in market",
    body: "Moodies, a mood-led wellness shop, is trading online across South Africa. OSTO, a cooking appliance that runs on filtered waste oil, is in household and business pilots.",
  },
  {
    when: "Next",
    title: "Growing the group",
    body: "Proving our first ventures, building the team, and developing new ventures in the sectors we know: logistics, ICT, consulting, petrochemicals and mining.",
  },
];

const focus = [
  { title: "Everyday essentials, done better", body: "Products and services that make daily life more affordable, more reliable or simply more enjoyable for South African households." },
  { title: "Cleaner, cheaper energy", body: "Ideas like OSTO that turn waste into value and bring down the cost of cooking, heating and powering a small business." },
  { title: "Infrastructure for growth", body: "Logistics, connectivity and industrial services that help African businesses move goods, data and resources more efficiently." },
];

const About = () => (
  <div className="min-h-dvh bg-offwhite">
    <Seo
      title="About Evenor Holdings | An Emerging African Holding Company"
      description="About Evenor Holdings: an emerging holding company founded in Cape Town in 2025, building ventures that change lives across Africa. Our mission, values, journey and what we are building next."
    />
    <Navbar />

    <main id="main-content">
      <PageHero
        eyebrow="Who We Are"
        title="An Emerging Holding Company With Big Ambitions."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={IMG.capetown}
      />

      {/* Company Overview */}
      <section className="section-pad bg-white">
        <div className="container-wide max-w-4xl">
          <p className="gold-label gold-ink mb-6">Company Profile</p>
          <h2 className="display-lg text-navy mb-10">Built in Africa, for what Africa can become.</h2>
          <div className="space-y-6 text-charcoal/85 text-[17px] md:text-[18px] font-light leading-[1.9]">
            <p>
              Evenor Holdings is a South African holding company, founded in Cape Town in 2025. We start, own and grow ventures that change lives. Today that means{" "}
              <Link to="/ventures/moodies" className="text-navy underline underline-offset-4">Moodies</Link>, a mood-led wellness shop, and{" "}
              <Link to="/ventures/osto" className="text-navy underline underline-offset-4">OSTO</Link>, a cooking appliance that runs on filtered waste oil.
            </p>
            <p>
              We are early, and we are honest about it. What we have is a clear standard, a long time horizon and the conviction that the continent's next great companies will be built here, by people who live with the problems they are solving.
            </p>
            <p>
              We are building the group across five sectors we know and believe in: logistics, information and communications technology, management consulting, petrochemicals and mining. They give our ventures a toolkit to draw on, and they are where we expect many of our next ventures to come from.
            </p>
            <p className="text-navy font-medium italic border-l-4 border-gold pl-6 py-2">
              Our standard is simple: Always Better. Whatever we put into the world should leave people, businesses and communities better off than before.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-pad bg-smoke">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="gold-label gold-ink mb-4">Our Framework</p>
            <h2 className="display-lg text-navy">Mission · Vision · Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                label: "Mission",
                body: "To build and grow African ventures that solve real, everyday problems, and to leave every customer, partner and community we touch better off.",
              },
              {
                label: "Vision",
                body: "A family of African-built companies that people rely on, proving that world-class businesses can start, grow and stay rooted on this continent.",
              },
              { label: "Values", body: null },
            ].map((c) => (
              <article
                key={c.label}
                className="bg-white border-t-4 border-gold p-8 md:p-10 shadow-[0_4px_24px_rgba(11,37,69,0.08)]"
              >
                <p className="text-gold text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">{c.label}</p>
                {c.body ? (
                  <p className="text-charcoal/85 text-[15px] leading-[1.85] font-light">{c.body}</p>
                ) : (
                  <ul className="space-y-3">
                    {values.map((v) => (
                      <li key={v} className="flex items-start gap-3 text-charcoal/90 text-[15px]">
                        <Check size={16} className="text-gold shrink-0 mt-1" aria-hidden="true" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we're building */}
      <section
        aria-labelledby="building-title"
        className="section-pad"
        style={{ background: "linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy)) 100%)" }}
      >
        <div className="container-wide">
          <div className="max-w-3xl mb-14 text-white">
            <p className="gold-label mb-4">Focus areas</p>
            <h2 id="building-title" className="display-lg text-white mb-6">What we're building.</h2>
            <p className="text-white/70 font-light leading-relaxed text-base md:text-lg">
              Headquartered in Cape Town and starting in South Africa, with our sights set on the rest of the continent.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {focus.map((f) => (
              <div key={f.title} className="p-8 border-l-4 border-gold bg-white/[0.06]">
                <h3 className="text-white font-display text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-white/70 text-[15px] leading-relaxed font-light">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our journey */}
      <section aria-labelledby="journey-title" className="section-pad bg-offwhite">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="gold-label gold-ink mb-4">Our journey</p>
            <h2 id="journey-title" className="display-lg text-navy">Just getting started.</h2>
          </div>
          <ol className="relative max-w-3xl mx-auto border-l-2 border-navy/15 space-y-12 pl-8 md:pl-12">
            {journey.map((t) => (
              <li key={t.title} className="relative">
                <span aria-hidden="true" className="absolute -left-[41px] md:-left-[57px] top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-navy" />
                <span className="inline-block bg-navy text-white text-[11px] tracking-[0.2em] font-semibold px-3 py-1.5 mb-3 uppercase">
                  {t.when}
                </span>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">{t.title}</h3>
                <p className="text-charcoal/75 text-[15px] leading-relaxed font-light">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership Teaser */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.corridor})` }}
      >
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative container-wide text-center max-w-3xl mx-auto text-white">
          <p className="gold-label mb-4">Leadership</p>
          <h2 className="display-lg text-white mb-6">Meet the founder.</h2>
          <p className="text-white/75 font-light leading-relaxed mb-8 text-base md:text-lg">
            Evenor Holdings is led by its founder and CEO, Joachim Urio. Read about why he started the group and where it is going.
          </p>
          <Link to="/leadership" className="btn-gold inline-block">
            Meet the founder →
          </Link>
        </div>
      </section>
    </main>

    <Footer />
    <WhatsAppButton />
    <CookieConsent />
  </div>
);

export default About;
