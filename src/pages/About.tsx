import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Check, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";
import PageHero from "@/components/PageHero";
import PartnersSection from "@/components/PartnersSection";
import ClientOnly from "@/components/ClientOnly";
import Seo from "@/components/Seo";

const OperationsMap = lazy(() => import("@/components/OperationsMap"));

import { IMG } from "@/assets/images";

const values = [
  "Integrity",
  "Excellence",
  "Continental Thinking",
  "Partnership",
  "Accountability",
];

const presence = [
  { country: "South Africa", note: "Group headquarters · Cape Town", primary: true },
  { country: "Tanzania", note: "East Africa operational hub · Dar es Salaam", primary: true },
  { country: "Kenya", note: "ICT & logistics corridor partnerships" },
  { country: "Zambia", note: "Mining advisory & downstream projects" },
  { country: "DRC", note: "Mineral logistics & procurement channels" },
  { country: "Rwanda", note: "Digital infrastructure advisory" },
  { country: "Uganda", note: "Petrochemical distribution facilitation" },
];

const timeline = [
  { year: "2021", title: "Incorporation", body: "Evenor Holdings incorporated in Cape Town under a principal-led operating model, focused on multi-sector African infrastructure." },
  { year: "2022", title: "East Africa Expansion", body: "Establishment of operational presence in Dar es Salaam, opening corridor access to SADC and EAC markets." },
  { year: "2023", title: "ICT Infrastructure Division", body: "Formal launch of ICT infrastructure division — fibre backbone, enterprise networks and NOC establishment." },
  { year: "2024", title: "Petrochemicals & Mining Desks", body: "Downstream petroleum and mining advisory desks formalised; first cross-border tender consortia executed." },
  { year: "2025", title: "B-BBEE Level 2 Certification", body: "Attained B-BBEE Level 2 status, strengthening eligibility for government and parastatal mandates across South Africa." },
  { year: "2026", title: "Continental Framework", body: "Rollout of the Evenor Continental Framework — a unified engagement model across seven Sub-Saharan markets." },
];

// Figures carried over from the previous home page. Listed in the PR as needing confirmation.
const glance = [
  { value: "12+", label: "Countries active" },
  { value: "5", label: "Core capabilities" },
  { value: "200+", label: "Strategic partners" },
  { value: "48 hrs", label: "Response commitment" },
];

const industries = [
  "Government & parastatal",
  "Mining & minerals",
  "Energy & utilities",
  "Transportation & ports",
  "Agriculture & agri-processing",
  "Water & sanitation",
  "Healthcare infrastructure",
  "Industrial manufacturing",
];

const About = () => {

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title="About Evenor Holdings | A Holding Company Building African Ventures"
        description="About Evenor Holdings: a South African holding company that builds African ventures, with capabilities in logistics, ICT, consulting, petrochemicals and mining. Mission, values, presence and history."
      />
      <Navbar />

      <main id="main-content">
        <PageHero
          eyebrow="Who We Are"
          title="A Continental Standard, Held Without Compromise."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
          image={IMG.capetown}
        />

        {/* Company Overview */}
        <section className="section-pad bg-white">
          <div className="container-wide max-w-4xl">
            <div
            >
              <p className="gold-label gold-ink mb-6">Company Profile</p>
              <h2 className="display-lg text-navy mb-10">
                Built in Africa. Engineered for its next century.
              </h2>
              <div className="space-y-6 text-charcoal/85 text-[17px] md:text-[18px] font-light leading-[1.9]">
                <p>
                  Evenor Holdings is a South African holding company that builds and operates African ventures. Today that means <Link to="/ventures/moodies" className="text-navy underline underline-offset-4">Moodies</Link>, a mood-led wellness shop, and <Link to="/ventures/osto" className="text-navy underline underline-offset-4">OSTO</Link>, a cooking appliance that runs on filtered waste oil.
                </p>
                <p>
                  Behind the ventures sit five group capabilities: logistics, information and communications technology infrastructure, management consulting, petrochemicals, and mining solutions. They serve our own ventures and selected clients and partners.
                </p>
                <p>
                  From our Cape Town head office and East African operational hub in Dar es Salaam, we serve governments, parastatals, institutional investors and enterprise clients across Sub-Saharan Africa. Our model is deliberately narrow at the top and deep at the bench: senior principals hold every client relationship, supported by specialist delivery teams and a curated network of continental and international partners.
                </p>
                <p>
                  We hold B-BBEE Level 2 certification (South African Company Registration K2025/717968), operate under recognised continental frameworks, and structure every engagement to leave the institution, the community and the counterparty measurably better than we found it.
                </p>
                <p className="text-navy font-medium italic border-l-4 border-gold pl-6 py-2">
                  We do not chase the market. We arrive with fully-engineered solutions, credible partnerships, and the long-term commitment African institutions deserve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="section-pad bg-smoke">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="gold-label gold-ink mb-4">Our Framework</p>
              <h2 className="display-lg text-navy">
                Mission · Vision · Values
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  label: "Mission",
                  body: "To deliver integrated industrial and technology solutions across Africa, creating measurable value for institutions, communities and partners — without compromise.",
                },
                {
                  label: "Vision",
                  body: "To be the most trusted African-headquartered multi-sector infrastructure partner for governments and enterprises across Sub-Saharan Africa by 2030.",
                },
                {
                  label: "Values",
                  body: null,
                },
              ].map((c) => (
                <article
                  key={c.label}
                  className="bg-white border-t-4 border-gold p-8 md:p-10 shadow-[0_4px_24px_rgba(11,37,69,0.08)]"
                >
                  <p className="text-gold text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
                    {c.label}
                  </p>
                  {c.body ? (
                    <p className="text-charcoal/85 text-[15px] leading-[1.85] font-light">{c.body}</p>
                  ) : (
                    <ul className="space-y-3">
                      {values.map((v) => (
                        <li key={v} className="flex items-start gap-3 text-charcoal/90 text-[15px]">
                          <Check size={16} className="text-gold shrink-0 mt-1" />
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

        {/* Continental Presence */}
        <section
          className="section-pad"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy)) 100%)" }}
        >
          <div className="container-wide">
            <div className="text-center mb-14 text-white max-w-3xl mx-auto">
              <p className="gold-label mb-4">Continental Presence</p>
              <h2 className="display-lg text-white mb-6">
                Seven Markets. One Standard.
              </h2>
              <p className="text-white/70 font-light leading-relaxed text-base md:text-lg">
                Anchored in South Africa, operationally embedded in East Africa, and mandated across the corridors that move African commerce.
              </p>
            </div>

            <div
              className="max-w-6xl mx-auto mb-12"
            >
              <ClientOnly fallback={<div className="h-[380px] md:h-[560px] w-full max-w-3xl mx-auto border border-gold/30 bg-navy-deep" aria-hidden="true" />}>
                <Suspense fallback={<div className="h-[380px] md:h-[560px] w-full max-w-3xl mx-auto border border-gold/30 bg-navy-deep" aria-hidden="true" />}>
                <OperationsMap />
              </Suspense>
              </ClientOnly>
            </div>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {presence.map((p, i) => (
                <div
                  key={p.country}
                  className={`p-6 border-l-4 ${p.primary ? "border-gold bg-white/[0.06]" : "border-white/20 bg-white/[0.03]"} backdrop-blur-sm`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className={p.primary ? "text-gold shrink-0 mt-0.5" : "text-white/50 shrink-0 mt-0.5"} />
                    <div>
                      <p className="text-white font-display text-lg font-semibold">{p.country}</p>
                      <p className="text-white/65 text-sm mt-1 leading-relaxed font-light">{p.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section aria-labelledby="glance-title" className="section-pad bg-offwhite">
          <div className="container-wide">
            <p className="eyebrow gold-ink mb-4">At a glance</p>
            <h2 id="glance-title" className="display-lg text-navy mb-12">The group in numbers.</h2>
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {glance.map((g) => (
                <div key={g.label} className="border-t-2 border-gold pt-5">
                  <dt className="text-sm text-charcoal/70">{g.label}</dt>
                  <dd className="font-display text-4xl font-semibold text-navy mt-2">{g.value}</dd>
                </div>
              ))}
            </dl>
            <h3 className="text-lg font-semibold text-navy mt-16 mb-5">Industries we serve</h3>
            <ul className="flex flex-wrap gap-3">
              {industries.map((x) => (
                <li key={x} className="border border-navy/15 px-4 py-2 text-sm text-navy">{x}</li>
              ))}
            </ul>
          </div>
        </section>

        <PartnersSection />

        {/* Timeline */}
        <section className="section-pad bg-offwhite">
          <div className="container-wide">
            <div className="text-center mb-16">
              <p className="gold-label gold-ink mb-4">Our Trajectory</p>
              <h2 className="display-lg text-navy">
                A Deliberate, Compounding Build.
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div aria-hidden className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-navy/15 md:-translate-x-1/2" />

              <div className="space-y-10 md:space-y-16">
                {timeline.map((t, i) => {
                  const right = i % 2 === 1;
                  return (
                    <div
                      key={t.year}
                      className={`relative md:grid md:grid-cols-2 md:gap-12 ${right ? "" : ""}`}
                    >
                      <div aria-hidden className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-gold border-2 border-navy md:-translate-x-1/2 z-10" />

                      <div className={`pl-12 md:pl-0 ${right ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                        <span className="inline-block bg-navy text-white text-[11px] tracking-[0.2em] font-semibold px-3 py-1.5 mb-3">
                          {t.year}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-navy mb-2">{t.title}</h3>
                        <p className="text-charcoal/75 text-[15px] leading-relaxed font-light">{t.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
            <h2 className="display-lg text-white mb-6">
              Meet the principals behind the mandate.
            </h2>
            <p className="text-white/75 font-light leading-relaxed mb-8 text-base md:text-lg">
              Every Evenor engagement is held at principal level. Learn about the office of the CEO, our governance framework, and our commitment to institutional counterparts.
            </p>
            <Link to="/leadership" className="btn-gold inline-block">
              View Leadership →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default About;
