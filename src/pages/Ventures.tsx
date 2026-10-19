import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import VentureCard from "@/components/VentureCard";
import ApproachSection from "@/components/ApproachSection";
import { Link } from "react-router-dom";
import { IMG } from "@/assets/images";
import { ventures } from "@/data/ventures";
import { ORG_ID, SITE, contactHref } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ventures | Evenor Holdings",
  url: `${SITE}/ventures`,
  about: { "@id": ORG_ID },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: ventures.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/ventures/${v.slug}`,
      name: v.name,
    })),
  },
};

const Ventures = () => (
  <PageLayout>
    <Seo
      title="Ventures | Moodies and OSTO | Evenor Holdings"
      description="The ventures Evenor Holdings builds and operates in South Africa: Moodies, a mood-led wellness shop, and OSTO, a cooking appliance that runs on filtered waste oil."
      jsonLd={jsonLd}
    />
    <PageHero
      eyebrow="Ventures"
      title="Companies we build and run."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Ventures" }]}
      image={IMG.capetown}
      height="50vh"
    />
    <section className="section-pad bg-offwhite">
      <div className="container-wide">
        <p className="max-w-3xl text-lg leading-relaxed text-charcoal/80 mb-14">
          Evenor Holdings is a holding company first. We start ventures where we see a clear problem in
          South Africa, own them, and give them the group's capabilities to draw on. Here is what we are
          building today.
        </p>
        <div className="grid gap-8">
          {ventures.map((v) => (
            <VentureCard key={v.slug} venture={v} />
          ))}
        </div>
      </div>
    </section>
    <ApproachSection />
    <section className="section-pad bg-white">
      <div className="container-wide max-w-3xl text-center">
        <h2 className="display-lg text-navy">Have a venture idea, or want to back one?</h2>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/75">
          We talk to founders, operators and investors who want to build in Africa.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={contactHref("ventures")} className="btn-gold">Talk to us about ventures</Link>
          <Link to={contactHref("investors")} className="btn-outline-navy">Investor relations</Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Ventures;
