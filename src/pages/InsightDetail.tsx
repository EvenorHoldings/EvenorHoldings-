import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";
import { insights } from "@/data/insights";
import NotFound from "@/pages/NotFound";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = insights.find((i) => i.slug === slug);
  if (!article) return <NotFound />;

  const related = insights.filter((i) => i.slug !== article.slug && i.sector === article.sector).slice(0, 2);
  const fallbackRelated = related.length ? related : insights.filter((i) => i.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title={`${article.title} | Evenor Holdings Perspectives`}
        description={article.dek}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.dek,
          datePublished: article.date,
          author: { "@type": "Organization", name: "Evenor Holdings (Pty) Ltd" },
          publisher: { "@type": "Organization", name: "Evenor Holdings (Pty) Ltd" },
          mainEntityOfPage: `https://evenor.org/insights/${article.slug}`,
          articleSection: article.sector,
        }}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={`${article.sector} — ${fmt(article.date)} · ${article.readingMinutes} min read`}
          title={article.title}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: article.sector },
          ]}
          image={IMG[article.image]}
          height="50vh"
        />

        <article className="section-pad bg-offwhite">
          <div className="container-wide max-w-3xl">
            <p className="font-display text-navy/90 italic text-xl md:text-2xl leading-relaxed border-l-[3px] border-gold pl-6 mb-12">
              {article.dek}
            </p>
            {article.body.map((block, bi) => (
              <section key={bi} className="mb-10">
                {block.heading && (
                  <h2 className="font-display text-navy text-2xl md:text-3xl font-semibold mb-5">{block.heading}</h2>
                )}
                {block.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-charcoal/85 text-lg font-light leading-relaxed mb-5">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <div className="mt-14 pt-8 border-t border-navy/15 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/insights"
                className="text-navy text-[11px] tracking-[0.2em] uppercase font-bold hover:text-gold transition-colors"
              >
                ← All Perspectives
              </Link>
              <Link to="/contact" className="btn-gold !py-2.5 !px-5 !text-[11px]">
                Discuss This With Our Desk
              </Link>
            </div>
          </div>
        </article>

        {fallbackRelated.length > 0 && (
          <section className="bg-navy text-white section-pad">
            <div className="container-wide">
              <p className="gold-label mb-4">Further Reading</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-10">Related Perspectives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {fallbackRelated.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/insights/${r.slug}`}
                    className="group block border border-white/15 border-l-[3px] border-l-gold p-6 rounded-[4px] hover:bg-white/5 transition-colors"
                  >
                    <p className="text-white/70 text-[11px] tracking-[0.18em] uppercase mb-3">
                      {r.sector} · {fmt(r.date)}
                    </p>
                    <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-gold transition-colors">
                      {r.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default InsightDetail;
