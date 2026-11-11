import { Link, useParams } from "react-router-dom";
import { Briefcase, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { IMG } from "@/assets/images";
import { getRole } from "@/data/roles";
import { ORG_ID } from "@/lib/site";

const RoleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const role = slug ? getRole(slug) : undefined;
  if (!role) return <NotFound />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: `<p>${role.summary}</p><ul>${role.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>`,
    employmentType: role.type.toLowerCase().includes("full") ? "FULL_TIME" : "OTHER",
    industry: role.sector,
    hiringOrganization: { "@type": "Organization", "@id": ORG_ID, name: "Evenor Holdings (Pty) Ltd", sameAs: "https://evenor.org" },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: role.location, addressCountry: "ZA" },
    },
  };

  return (
    <PageLayout>
      <Seo
        title={`${role.title} | Careers at Evenor Holdings`}
        description={role.summary.slice(0, 158)}
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow={role.sector}
        title={role.title}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: role.title }]}
        image={IMG.capetown}
        height="45vh"
      />
      <section className="section-pad bg-offwhite">
        <div className="container-wide max-w-4xl">
          <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal/70 mb-8">
            <span className="inline-flex items-center gap-2"><Briefcase size={14} aria-hidden="true" />{role.sector}</span>
            <span className="inline-flex items-center gap-2"><MapPin size={14} aria-hidden="true" />{role.location}</span>
            <span className="uppercase tracking-[0.14em] text-xs pt-[2px]">{role.type}</span>
          </p>
          <p className="text-lg leading-relaxed text-charcoal/85 mb-12">{role.summary}</p>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-navy mb-4">Responsibilities</h2>
              <ul className="space-y-3 text-charcoal/80">
                {role.responsibilities.map((x) => <li key={x} className="pl-4 border-l-2 border-gold/60">{x}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy mb-4">Requirements</h2>
              <ul className="space-y-3 text-charcoal/80">
                {role.requirements.map((x) => <li key={x} className="pl-4 border-l-2 border-gold/60">{x}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link to={`/careers?role=${role.slug}#apply`} className="btn-gold">Apply for this role</Link>
            <Link to="/careers" className="btn-outline-navy">All open roles</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RoleDetail;
