import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { getSector, sectors } from "@/data/sectors";
import Seo from "@/components/Seo";
import { sourceFor } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";

const Sector = () => {
  const { slug } = useParams<{ slug: string }>();
  const sector = slug ? getSector(slug) : undefined;

  if (!sector) return <Navigate to="/" replace />;

  const others = sectors.filter((s) => s.slug !== sector.slug);

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title={`${sector.nav} | Evenor Holdings`}
        description={sector.intro[0]?.slice(0, 200) ?? sector.title}
        image={sector.heroImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: sector.nav,
          provider: { "@type": "Organization", name: "Evenor Holdings (Pty) Ltd", url: "https://www.evenor.org" },
          areaServed: "Sub-Saharan Africa",
          description: sector.intro[0],
        }}
      />
      <Navbar />
      <main id="main-content">

      <PageHero
        eyebrow={sector.eyebrow}
        title={sector.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Sectors" },
          { label: sector.nav },
        ]}
        image={sector.heroImage}
        height="70vh"
      />

      {/* Intro */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
          <div>
            <p className="gold-label gold-ink mb-4">Sector Overview</p>
            <div className="h-[3px] w-16 bg-gold" />
          </div>
          <div className="space-y-6 text-charcoal/85 text-[15px] md:text-[17px] leading-[1.9] font-light">
            {sector.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-navy text-white section-pad">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="gold-label mb-4">Our Distinctive Edge</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Three Pillars.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sector.pillars.map((p, i) => (
              <div key={p.title} className="relative bg-navy-deep/60 border border-white/10 p-8 hover:border-gold/60 transition-colors">
                <div className="text-gold font-display text-4xl mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-white text-xl md:text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-white/75 font-light leading-relaxed text-[15px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-offwhite section-pad">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <p className="gold-label gold-ink mb-4">Capability Map</p>
            <h2 className="font-display text-navy text-3xl md:text-5xl font-bold">What We Deliver.</h2>
            <div className="mt-6 h-[3px] w-16 bg-gold" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {sector.capabilities.map((c) => (
              <div key={c.group} className="bg-white p-8 border-l-4 border-gold shadow-[0_1px_2px_rgba(11,37,69,0.04)]">
                <h3 className="font-semibold text-navy text-sm tracking-[0.15em] uppercase mb-5">{c.group}</h3>
                <ul className="space-y-3">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-charcoal/85 text-sm font-light leading-relaxed">
                      <Check size={16} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-navy-deep text-white py-16 md:py-20">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {sector.metrics.map((m) => (
            <div key={m.label} className="text-center border-l border-white/10 first:border-l-0 md:border-l md:first:border-l-0 px-4">
              <div className="font-display text-gold text-4xl md:text-5xl font-bold mb-2">{m.value}</div>
              <div className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-offwhite section-pad">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="gold-label gold-ink mb-4">Delivery Method</p>
            <h2 className="font-display text-navy text-3xl md:text-5xl font-bold">How We Engage.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {sector.approach.map((a) => (
              <div key={a.step} className="bg-white p-7 border-t-2 border-gold">
                <div className="font-display text-navy/55 text-5xl font-bold mb-3">{a.step}</div>
                <h3 className="font-display text-navy text-xl font-bold mb-3">{a.title}</h3>
                <p className="text-charcoal/75 text-sm font-light leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-white section-pad">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <p className="gold-label gold-ink mb-4">Representative Engagement</p>
            <h2 className="font-display text-navy text-3xl md:text-5xl font-bold">Case in Point.</h2>
            <div className="mt-6 h-[3px] w-16 bg-gold" />
          </div>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div className="relative">
              {sourceFor(sector.caseStudy.image) ? (
                <ResponsiveImage
                  image={sourceFor(sector.caseStudy.image)!}
                  alt={sector.caseStudy.client}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover min-h-[360px] max-h-[540px] shadow-lg"
                />
              ) : (
                <img
                  src={sector.caseStudy.image}
                  alt={sector.caseStudy.client}
                  loading="lazy"
                  className="w-full h-full object-cover min-h-[360px] max-h-[540px] shadow-lg"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6">
                <p className="gold-ink text-[11px] tracking-[0.2em] uppercase font-medium">Location</p>
                <p className="text-white font-display text-lg mt-1">{sector.caseStudy.location}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[11px] tracking-[0.2em] uppercase text-midgray font-medium mb-3">Client</p>
              <p className="font-display text-navy text-2xl md:text-3xl font-bold mb-8">{sector.caseStudy.client}</p>

              <p className="text-[11px] tracking-[0.2em] uppercase text-midgray font-medium mb-3">Scope</p>
              <p className="text-charcoal/85 font-light leading-[1.85] mb-8">{sector.caseStudy.scope}</p>

              <p className="text-[11px] tracking-[0.2em] uppercase text-midgray font-medium mb-3">Outcome</p>
              <p className="text-charcoal/85 font-light leading-[1.85] border-l-2 border-gold pl-5">
                {sector.caseStudy.outcome}
              </p>

              {sector.partners && sector.partners.length > 0 && (
                <div className="mt-10 pt-8 border-t border-navy/10">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-midgray font-medium mb-3">Delivery Partner</p>
                  {sector.partners.map((p) => (
                    <p key={p} className="text-navy font-semibold">{p}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <p className="gold-label mb-4">Engage Evenor</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">{sector.cta}.</h2>
          <p className="text-white/75 font-light text-lg leading-relaxed mb-10">
            Speak directly with a principal. Every enquiry is triaged within one working day.
          </p>
          <Link
            to="/#contact"
            className="btn-gold inline-flex items-center gap-2"
            onClick={() => setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 200)}
          >
            Initiate Contact
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Other Sectors */}
      <section className="bg-offwhite section-pad">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="gold-label gold-ink mb-3">Continue Exploring</p>
              <h2 className="font-display text-navy text-2xl md:text-4xl font-bold">Other Sectors.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/sectors/${o.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative block bg-white border-l-4 border-gold p-6 hover:-translate-y-1 transition-transform shadow-[0_1px_2px_rgba(11,37,69,0.04)] hover:shadow-[0_20px_40px_-16px_rgba(11,37,69,0.2)]"
              >
                <p className="text-[11px] tracking-[0.2em] uppercase text-midgray font-medium mb-2">Sector</p>
                <p className="font-display text-navy text-lg font-bold mb-4 leading-snug">{o.nav}</p>
                <span className="inline-flex items-center gap-1.5 gold-ink text-sm font-medium">
                  Explore
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </main>


      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sector;
