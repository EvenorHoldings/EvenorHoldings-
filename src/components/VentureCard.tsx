import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Flame } from "lucide-react";
import type { Venture } from "@/data/ventures";
import { isExternal } from "@/data/ventures";
import VentureWordmark from "@/components/VentureWordmark";

const VentureCard = ({ venture: v }: { venture: Venture }) => {
  const { surface, ink, accent } = v.theme;
  const external = isExternal(v.primaryCta.href);
  return (
    <article
      className="group relative grid overflow-hidden rounded-sm md:grid-cols-2 transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(11,37,69,0.45)]"
      style={{ background: surface, color: ink }}
    >
      <div className="flex flex-col p-8 md:p-10 lg:p-12">
        <p className="eyebrow mb-6" style={{ color: accent }}>
          {v.category} · {v.stage}
        </p>
        <h3 className="mb-4">
          <Link
            to={`/ventures/${v.slug}`}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 before:absolute before:inset-0 before:content-['']"
            style={{ outlineColor: accent }}
          >
            <VentureWordmark venture={v} className="text-4xl md:text-5xl" />
          </Link>
        </h3>
        <p className="text-lg leading-snug mb-4" style={{ color: ink }}>{v.tagline}</p>
        <p className="leading-relaxed opacity-80 flex-1">{v.summary}</p>
        <div className="relative z-10 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            Read more <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </span>
          {external ? (
            <a
              href={v.primaryCta.href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
              style={{ color: accent }}
            >
              {v.primaryCta.label} <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <Link to={v.primaryCta.href} className="underline-offset-4 hover:underline" style={{ color: accent }}>
              {v.primaryCta.label}
            </Link>
          )}
        </div>
      </div>
      <div className="relative min-h-[240px] md:min-h-full">
        {v.cover ? (
          <img
            src={v.cover.src}
            alt={v.cover.alt}
            width={v.cover.width}
            height={v.cover.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div
              className="absolute inset-0 opacity-60"
              style={{ background: `radial-gradient(circle at 50% 60%, ${accent}55 0%, transparent 60%)` }}
            />
            <Flame size={96} strokeWidth={1} style={{ color: accent }} />
          </div>
        )}
      </div>
    </article>
  );
};

export default VentureCard;
