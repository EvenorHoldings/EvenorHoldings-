import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { projects, sectorFilters } from "@/data/projects";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";

const statusColor: Record<string, string> = {
  "Delivered": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "In Execution": "bg-gold/15 text-gold border-gold/40",
  "Advisory Mandate": "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "Framework Agreement": "bg-purple-500/15 text-purple-300 border-purple-500/30",
};

const Projects = () => {
  const [active, setActive] = useState<(typeof sectorFilters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.sector === active)),
    [active],
  );

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title="Projects & Portfolio | Evenor Holdings | Case Studies Across Africa"
        description="Selected engagements from Evenor Holdings — corridor logistics, national fibre backbones, public-sector digital transformation, coastal fuel terminals and mine-to-port optimisation."
      />
      <Navbar />
      <main id="main-content">

      <PageHero
        eyebrow="Portfolio — Representative Engagements"
        title="Delivered. In Execution. Under Framework."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        image={IMG.corridor}
        height="60vh"
      />

      {/* Intro strip */}
      <section className="bg-navy-deep text-white">
        <div className="container-wide py-14 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <div>
            <p className="gold-label mb-4">The Evenor Portfolio</p>
            <h2 className="display-lg mb-5">
              Engagements chosen for the standard they set — not the noise they make.
            </h2>
            <p className="text-white/75 font-light leading-relaxed max-w-2xl">
              Every mandate below was executed under principal-led governance, with named accountability at the partner, ministerial, or board level. Selected details have been abstracted at the client's request; full case briefings are made available under NDA to qualified counterparties.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: `${projects.length}+`, l: "Active engagements" },
              { v: "5", l: "Sectors under mandate" },
              { v: "7", l: "Countries of operation" },
              { v: "100%", l: "Principal-led governance" },
            ].map((m) => (
              <div key={m.l} className="border border-white/10 p-5 bg-white/[0.03]">
                <div className="font-display text-gold text-3xl font-bold">{m.v}</div>
                <div className="text-white/60 text-[11px] tracking-[0.18em] uppercase mt-1">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-offwhite sticky top-[72px] z-30 border-b border-navy/10 backdrop-blur">
        <div className="container-wide py-4 flex items-center gap-4 overflow-x-auto">
          <span className="flex items-center gap-2 text-navy/80 text-[11px] tracking-[0.2em] uppercase font-semibold shrink-0">
            <Filter size={14} /> Filter by sector
          </span>
          <div className="flex gap-2">
            {sectorFilters.map((s) => {
              const on = active === s;
              return (
                <button
                  key={s}
                  onClick={() => setActive(s)}
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
          <span className="ml-auto text-navy/75 text-xs shrink-0">
            {filtered.length} {filtered.length === 1 ? "engagement" : "engagements"}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group block bg-white border border-navy/10 hover:border-gold transition-all shadow-sm hover:shadow-xl overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/40 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-gold text-navy text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
                    {p.sector}
                  </span>
                  <span
                    className={`text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1 border ${
                      statusColor[p.status] ?? "bg-white/10 text-white border-white/30"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-white/75">{p.country} · {p.year}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-charcoal/70 text-sm font-light leading-relaxed mb-5 line-clamp-3">
                  {p.summary}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-navy/10">
                  <span className="text-navy/80 text-[11px] tracking-[0.16em] uppercase font-semibold">
                    {p.client}
                  </span>
                  <span className="inline-flex items-center gap-1 text-navy text-[11px] tracking-[0.16em] uppercase font-bold group-hover:text-gold">
                    Case Brief <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-navy/75">
            <p>No engagements listed in this sector yet.</p>
          </div>
        )}
      </section>

      {/* Confidentiality strip */}
      <section className="bg-navy text-white py-16">
        <div className="container-wide grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <p className="gold-label mb-3">Client Confidentiality</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-4">
              Selected engagements are not disclosed on public channels.
            </h3>
            <p className="text-white/70 font-light leading-relaxed max-w-2xl">
              Sovereign, defence, and sensitive commercial mandates are omitted from this portfolio by design. Qualified counterparties may request a full capability dossier under a signed non-disclosure agreement.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link to="/#contact" className="btn-gold">Request Capability Dossier</Link>
          </div>
        </div>
      </section>
      </main>


      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;
