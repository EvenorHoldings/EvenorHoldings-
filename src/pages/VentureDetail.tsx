import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import VentureWordmark from "@/components/VentureWordmark";
import NotFound from "@/pages/NotFound";
import { getVenture, isExternal, ventures, type VentureCta } from "@/data/ventures";
import { sectorNav as sectors } from "@/data/sectorNav";
import { ORG_ID, SITE } from "@/lib/site";

const Cta = ({ cta, primary, accent, ink }: { cta: VentureCta; primary?: boolean; accent: string; ink: string }) => {
  const cls = "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  const style = primary
    ? { background: accent, color: ink === "#FFFFFF" ? "#0B1B33" : "#FFFFFF", outlineColor: accent }
    : { border: `1px solid ${accent}`, color: ink, outlineColor: accent };
  return isExternal(cta.href) ? (
    <a href={cta.href} target="_blank" rel="noopener" className={cls} style={style}>
      {cta.label} <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <Link to={cta.href} className={cls} style={style}>
      {cta.label}
    </Link>
  );
};

const VentureDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const v = slug ? getVenture(slug) : undefined;
  if (!v) return <NotFound />;

  const { surface, ink, accent } = v.theme;
  const caps = v.capabilities.map((c) => sectors.find((s) => s.slug === c)).filter(Boolean);
  const others = ventures.filter((o) => o.slug !== v.slug);
  const pageUrl = `${SITE}/ventures/${v.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${pageUrl}#organization`,
    name: v.legalName,
    description: v.summary,
    slogan: v.tagline,
    ...(v.url ? { url: v.url.split("?")[0] } : {}),
    areaServed: { "@type": "Country", name: v.country },
    parentOrganization: { "@id": ORG_ID, name: "Evenor Holdings (Pty) Ltd" },
    ...(v.cover ? { image: `${SITE}${v.cover.src}` } : {}),
  };

  return (
    <PageLayout>
      <Seo title={v.seo.title} description={v.seo.description} jsonLd={jsonLd} />

      <section style={{ background: surface, color: ink }} className="pt-28 md:pt-36">
        <div className="container-wide grid gap-12 md:grid-cols-2 md:items-end pb-16 md:pb-24">
          <div>
            <nav aria-label="Breadcrumb" className="mb-10 text-xs uppercase tracking-[0.16em]" style={{ color: accent }}>
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2 opacity-60">/</span>
              <Link to="/ventures" className="hover:underline">Ventures</Link>
              <span className="mx-2 opacity-60">/</span>
              <span aria-current="page">{v.name}</span>
            </nav>
            <p className="eyebrow mb-6" style={{ color: accent }}>
              An Evenor Holdings venture · {v.stage}
            </p>
            <h1 className="mb-6">
              <VentureWordmark venture={v} className="text-6xl md:text-8xl" />
            </h1>
            <p className="font-display text-2xl md:text-3xl leading-snug mb-6">{v.tagline}</p>
            <p className="text-lg leading-relaxed opacity-85 max-w-xl">{v.summary}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Cta cta={v.primaryCta} primary accent={accent} ink={ink} />
              {v.secondaryCta && <Cta cta={v.secondaryCta} accent={accent} ink={ink} />}
            </div>
          </div>
          {v.cover && (
            <div className="overflow-hidden rounded-sm">
              <img
                src={v.cover.src}
                alt={v.cover.alt}
                width={v.cover.width}
                height={v.cover.height}
                loading="eager"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          )}
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="container-wide grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow gold-ink mb-4">About {v.name}</p>
            <div className="space-y-6 text-lg leading-relaxed text-charcoal/85">
              {v.story.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
            </div>
          </div>
          <aside className="space-y-8">
            <dl className="grid gap-5 text-sm">
              <div><dt className="eyebrow gold-ink mb-1">Category</dt><dd className="text-navy">{v.category}</dd></div>
              <div><dt className="eyebrow gold-ink mb-1">Market</dt><dd className="text-navy">{v.country}</dd></div>
              <div><dt className="eyebrow gold-ink mb-1">Stage</dt><dd className="text-navy">{v.stage}</dd></div>
              {v.url && (
                <div>
                  <dt className="eyebrow gold-ink mb-1">Website</dt>
                  <dd>
                    <a href={v.url} target="_blank" rel="noopener" className="text-navy underline underline-offset-4 hover:text-gold-ink">
                      {new URL(v.url).hostname.replace(/^www\./, "")}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
            {caps.length > 0 && (
              <div>
                <p className="eyebrow gold-ink mb-3">Group capabilities used</p>
                <ul className="space-y-2">
                  {caps.map((c) => (
                    <li key={c!.slug}>
                      <Link to={`/sectors/${c!.slug}`} className="text-navy hover:text-gold-ink underline-offset-4 hover:underline">
                        {c!.nav}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <ul className="grid gap-10 md:grid-cols-3">
            {v.highlights.map((h) => (
              <li key={h.title} className="border-t-2 border-gold pt-6">
                <Check size={20} className="text-gold-ink mb-4" aria-hidden="true" />
                <h2 className="text-xl font-semibold text-navy mb-3">{h.title}</h2>
                <p className="text-charcoal/75 leading-relaxed">{h.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {v.gallery && v.gallery.length > 0 && (
        <section aria-label={`${v.name} products`} style={{ background: surface }} className="section-pad">
          <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-4">
            {v.gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                width={g.width}
                height={g.height}
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover rounded-sm"
              />
            ))}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section-pad-sm bg-offwhite">
          <div className="container-wide flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="display-md text-navy">Other ventures</p>
            <ul className="flex flex-wrap gap-4">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link to={`/ventures/${o.slug}`} className="btn-outline-navy">{o.name}</Link>
                </li>
              ))}
              <li><Link to="/ventures" className="btn-gold">All ventures</Link></li>
            </ul>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default VentureDetail;
