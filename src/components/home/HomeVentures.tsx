import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ventures } from "@/data/ventures";
import Reveal from "./Reveal";

/** Homepage-only short lines; full copy stays on the venture pages. */
const HOME: Record<string, { tagline?: string; label: string; href?: string }> = {
  moodies: { label: "Visit moodies.life" },
  osto: { label: "Join the pilot" },
  res360: { label: "Visit res360.org" },
  "elections-intelligence": { tagline: "Every national election, tied to its source.", label: "Visit electionsintelligence.org" },
};

const HomeVentures = () => (
  <section id="ventures" aria-labelledby="ventures-title" className="section-home bg-offwhite">
    <div className="container-wide">
      <Reveal>
        <span className="block h-px w-12 bg-gold mb-6" aria-hidden="true" />
        <p className="eyebrow-sm text-muted-foreground">Our ventures</p>
        <h2 id="ventures-title" className="home-h2 mt-4 text-ink">Four companies. One standard.</h2>
      </Reveal>

      <ul className="mt-16 space-y-12 lg:space-y-16">
        {ventures.map((v, i) => {
          const h = HOME[v.slug] ?? { label: v.primaryCta.label };
          const href = h.href || v.primaryCta.href;
          const chip = v.stage === "Pilot" ? "Pilot" : "Live";
          return (
            <li key={v.slug}>
              <Reveal className="relative grid overflow-hidden rounded-xl border border-border bg-card lg:h-[480px] lg:grid-cols-2">
                <div className={`relative h-64 sm:h-80 lg:h-full ${i % 2 ? "lg:order-2" : ""}`}>
                  {v.cover ? (
                    <img
                      src={v.cover.src}
                      alt={v.cover.alt}
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-navy" role="img" aria-label={`${v.name} monogram`}>
                      <span className="text-8xl font-bold tracking-tight text-gold">{v.slug === "elections-intelligence" ? "EI" : v.name}</span>
                    </div>
                  )}
                  {v.cover?.credit && (
                    <p className="absolute bottom-2 right-2 z-20 rounded bg-navy/80 px-2 py-1 text-[11px] text-white">
                      Photo:{" "}
                      <a href={v.cover.credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{v.cover.credit.text.split(" (")[0]}</a>{" "}
                      (<a href={v.cover.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 3.0</a>)
                    </p>
                  )}
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-14">
                  <span className="w-fit rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy">{chip}</span>
                  <h3 className="mt-5 text-3xl lg:text-[40px] font-semibold leading-tight text-ink">
                    <Link to={`/ventures/${v.slug}`} aria-label={`${v.name}: read more`} className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-gold">
                      {v.name}
                    </Link>
                  </h3>
                  <p className="mt-3 text-lg text-muted-foreground">{h.tagline ?? v.tagline}</p>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow relative z-20 mt-8 w-fit text-ink">
                    {h.label} <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default HomeVentures;
