import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";
import { insights } from "@/data/insights";

const filters = ["All", ...Array.from(new Set(insights.map((i) => i.sector)))] as const;

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });

const Insights = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? insights : insights.filter((i) => i.sector === active)),
    [active],
  );

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title="Perspectives & Insights | Evenor Holdings"
        description="Operating perspectives from Evenor Holdings on African corridor logistics, fibre operations, public procurement strategy, downstream fuel reliability and mine-to-port performance."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Evenor Holdings Perspectives",
          url: "https://evenor.org/insights",
          publisher: { "@type": "Organization", name: "Evenor Holdings (Pty) Ltd" },
          blogPost: insights.map((i) => ({
            "@type": "BlogPosting",
            headline: i.title,
            description: i.dek,
            datePublished: i.date,
            url: `https://evenor.org/insights/${i.slug}`,
          })),
        }}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Perspectives — Operating Notes"
          title="What We Learn Building Across Africa."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Insights" }]}
          image={IMG.capetown}
          height="55vh"
        />

        <section className="bg-navy-deep text-white">
          <div className="container-wide py-14 max-w-4xl">
            <p className="gold-label mb-4">Editorial Standard</p>
            <h2 className="display-lg mb-5">
              Written by the people who carry the delivery risk.
            </h2>
            <p className="text-white/75 font-light leading-relaxed text-lg">
              These notes are drawn from live mandates rather than desk research. They are published
              sparingly, and only where we believe an operating lesson is transferable to other
              institutions working on the continent.
            </p>
          </div>
        </section>

        <section className="bg-offwhite border-b border-navy/10">
          <div className="container-wide py-4 flex items-center gap-4 overflow-x-auto">
            <span className="flex items-center gap-2 text-navy/80 text-[11px] tracking-[0.2em] uppercase font-semibold shrink-0">
              <Filter size={14} aria-hidden="true" /> Filter by sector
            </span>
            <div className="flex gap-2">
              {filters.map((s) => {
                const on = active === s;
                return (
                  <button
                    key={s}
                    onClick={() => setActive(s)}
                    aria-pressed={on}
                    className={`px-4 py-2 text-[11px] tracking-[0.16em] uppercase font-semibold border transition-colors shrink-0 ${
                      on
                        ? "bg-navy text-white border-navy"
                        : "bg-transparent text-navy border-navy/20 hover:border-navy"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-offwhite">
          <div className="container-wide grid md:grid-cols-2 gap-8">
            {filtered.map((i) => (
              <Link
                key={i.slug}
                to={`/insights/${i.slug}`}
                className="group block bg-white border border-navy/10 border-l-[3px] border-l-gold rounded-[4px] hover:border-gold transition-all shadow-sm hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${IMG[i.image]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
                    {i.sector}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-navy/70 text-[11px] tracking-[0.18em] uppercase mb-3">
                    {fmt(i.date)} · {i.readingMinutes} min read
                  </p>
                  <h3 className="font-display text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                    {i.title}
                  </h3>
                  <p className="text-charcoal/75 text-[15px] font-light leading-relaxed mb-5">{i.dek}</p>
                  <span className="inline-flex items-center gap-1 text-navy text-[11px] tracking-[0.16em] uppercase font-bold group-hover:text-gold">
                    Read Perspective <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Insights;
