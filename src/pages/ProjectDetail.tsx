import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/projects";
import Seo from "@/components/Seo";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const related = projects.filter((p) => p.slug !== project.slug && p.sector === project.sector).slice(0, 2);
  const fallback = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const recommend = related.length ? related : fallback;

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title={`${project.title} | ${project.sector} | Evenor Holdings`}
        description={project.summary}
        image={project.image}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          about: project.sector,
          locationCreated: project.country,
          dateCreated: project.year,
          creator: { "@type": "Organization", name: "Evenor Holdings (Pty) Ltd" },
          description: project.summary,
        }}
      />
      <Navbar />
      <main id="main-content">

      <PageHero
        eyebrow={`${project.sector} · ${project.status}`}
        title={project.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.sector },
        ]}
        image={project.image}
        height="65vh"
      />

      {/* Fact strip */}
      <section className="bg-navy-deep text-white">
        <div className="container-wide py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { l: "Client", v: project.client },
            { l: "Geography", v: project.country },
            { l: "Period", v: project.year },
            { l: "Mandate", v: project.value ?? project.status },
          ].map((f) => (
            <div key={f.l}>
              <div className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">{f.l}</div>
              <div className="text-white text-sm md:text-base font-medium leading-snug">{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary + scope */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide grid lg:grid-cols-[1.4fr_1fr] gap-14 items-start">
          <div>
            <p className="gold-label mb-4">Engagement Summary</p>
            <div className="h-[3px] w-16 bg-gold mb-6" />
            <p className="text-charcoal text-[17px] md:text-[18px] font-light leading-relaxed">
              {project.summary}
            </p>
            <div className="mt-10">
              <h3 className="font-display text-navy text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-charcoal/80 font-light leading-relaxed">{project.challenge}</p>
            </div>
          </div>
          <aside className="bg-white border border-navy/10 p-8 shadow-sm">
            <p className="text-navy text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">Scope of Works</p>
            <ul className="space-y-3">
              {project.scope.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-charcoal/85">
                  <Check size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            {project.partners && (
              <>
                <p className="text-navy text-[11px] tracking-[0.2em] uppercase font-semibold mt-8 mb-3">Delivery Partners</p>
                <ul className="space-y-1.5 text-sm text-charcoal/70 font-light">
                  {project.partners.map((p) => <li key={p}>· {p}</li>)}
                </ul>
              </>
            )}
          </aside>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-navy text-white">
        <div className="container-wide">
          <p className="gold-label gold-ink mb-4">Evenor Approach</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 max-w-3xl">
            How the mandate was structured, sequenced, and governed.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.approach.map((a, i) => (
              <div key={a} className="border-l-2 border-gold bg-white/[0.03] p-6">
                <div className="text-gold font-display text-2xl font-bold mb-2">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-white/85 font-light leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="section-pad bg-offwhite">
        <div className="container-wide">
          <p className="gold-label gold-ink mb-4">Measured Outcome</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-bold mb-10 max-w-3xl">
            Results the client took to their board.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {project.outcome.map((o) => (
              <div key={o.label} className="bg-white border-t-4 border-gold p-6 shadow-sm">
                <div className="font-display text-navy text-3xl md:text-4xl font-bold mb-2">{o.metric}</div>
                <div className="text-charcoal/70 text-xs leading-snug">{o.label}</div>
              </div>
            ))}
          </div>
          <blockquote className="border-l-4 border-gold pl-6 py-2 max-w-3xl text-lg italic text-charcoal font-light leading-relaxed">
            {project.narrative}
          </blockquote>
        </div>
      </section>

      {/* Related */}
      <section className="bg-navy-deep text-white py-20">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="gold-label gold-ink mb-3">Continue Reading</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Related engagements</h3>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.2em] uppercase font-bold hover:text-white transition-colors">
              <ArrowLeft size={14} /> All Projects
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {recommend.map((r) => (
              <Link
                key={r.slug}
                to={`/projects/${r.slug}`}
                className="group flex gap-5 bg-white/[0.03] border border-white/10 hover:border-gold p-5 transition-colors"
              >
                <div
                  className="w-32 h-32 shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${r.image})` }}
                />
                <div className="flex-1">
                  <div className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2">{r.sector}</div>
                  <h4 className="font-display text-white text-lg font-bold leading-snug mb-2 group-hover:text-gold transition-colors">
                    {r.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-white/70 text-[11px] tracking-[0.18em] uppercase">
                    Read <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold text-navy py-14">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
              A similar mandate on your desk?
            </h3>
            <p className="text-navy/80 mt-2">Speak to an Evenor principal — not a sales team.</p>
          </div>
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-navy-deep transition-colors">Initiate Engagement</Link>
        </div>
      </section>
      </main>


      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectDetail;
