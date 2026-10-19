import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import { sourceFor } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";
import { sectors } from "@/data/sectors";

/** Single source of truth: the same `sectors` data used by the grid and detail pages. */
const tabs = sectors.map((s) => ({
  key: s.slug,
  label: s.nav.split(" ")[0],
  h3: s.title.replace(/\.$/, ""),
  body: s.intro,
  caps: s.capabilities.flatMap((g) => g.items).slice(0, 8),
  img: s.heroImage,
}));

const SectorDeepDive = () => {
  const [active, setActive] = useState(tabs[0].key);
  const t = tabs.find((x) => x.key === active)!;

  return (
    <section id="deepdive" className="bg-offwhite section-pad">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="gold-label gold-ink mb-4">Sector Intelligence</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-navy">
            Depth in Every Division.
          </h2>
        </div>

        <div
          className="hidden md:flex justify-center gap-10 border-b border-navy/10 mb-12"
          role="tablist"
          aria-label="Sector intelligence"
        >
          {tabs.map((x) => (
            <button
              key={x.key}
              id={`tab-${x.key}`}
              role="tab"
              aria-selected={active === x.key}
              aria-controls={`panel-${x.key}`}
              tabIndex={active === x.key ? 0 : -1}
              onClick={() => setActive(x.key)}
              className={`pb-4 text-sm tracking-[0.15em] uppercase transition-colors relative min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                active === x.key ? "text-navy font-semibold" : "text-charcoal/70 hover:text-navy"
              }`}
            >
              {x.label}
              {active === x.key && (
                <span aria-hidden="true" className="absolute left-0 right-0 -bottom-px h-[3px] bg-gold" />
              )}
            </button>
          ))}
        </div>

        <div
          className="md:hidden flex flex-col gap-2 mb-8"
          role="tablist"
          aria-label="Sector intelligence"
        >
          {tabs.map((x) => (
            <button
              key={x.key}
              id={`m-tab-${x.key}`}
              role="tab"
              aria-selected={active === x.key}
              aria-controls={`panel-${x.key}`}
              onClick={() => setActive(x.key)}
              className={`text-left px-4 py-3 min-h-11 border-l-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                active === x.key ? "border-gold bg-white text-navy font-semibold" : "border-transparent text-charcoal/75"
              }`}
            >
              {x.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div
          key={t.key}
          id={`panel-${t.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${t.key}`}
          tabIndex={0}
          className="grid lg:grid-cols-[1.2fr_1fr] gap-10 animate-fade-in"
        >
          <div>
            <h3 className="font-display text-navy text-2xl md:text-3xl font-semibold mb-6">{t.h3}</h3>
            <div className="space-y-4 text-charcoal/80 font-light leading-[1.85] text-[15px] md:text-base">
              {t.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {t.caps.map((c) => (
                <div key={c} className="flex items-start gap-2.5">
                  <Check size={16} aria-hidden="true" className="text-gold mt-1 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-charcoal/85 text-sm font-light">{c}</span>
                </div>
              ))}
            </div>
            <Link
              to={`/sectors/${t.key}`}
              className="inline-flex items-center gap-2 mt-8 text-navy font-semibold text-sm tracking-[0.1em] uppercase border-b-2 border-gold pb-1 hover:text-gold-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Full {t.label} capability <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div>
            {sourceFor(t.img) ? (
              <ResponsiveImage
                image={sourceFor(t.img)!}
                alt={t.h3}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full aspect-[4/3] object-cover border-2 border-navy/10"
              />
            ) : (
              <div
                className="w-full aspect-[4/3] bg-cover bg-center border-2 border-navy/10"
                style={{ backgroundImage: `url(${t.img})` }}
                role="img"
                aria-label={t.h3}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorDeepDive;
