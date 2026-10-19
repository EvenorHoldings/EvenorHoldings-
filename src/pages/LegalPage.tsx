import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";
import NotFound from "@/pages/NotFound";
import { getLegalDoc } from "@/data/legal";

const LegalPage = () => {
  const { doc } = useParams<{ doc: string }>();
  const legal = doc ? getLegalDoc(doc) : undefined;
  if (!legal) return <NotFound />;

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo title={legal.meta} description={legal.description} />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={legal.eyebrow}
          title={legal.title}
          breadcrumb={[{ label: "Home", href: "/" }, { label: legal.title }]}
          image={IMG.corridor}
          height="45vh"
        />
        <section className="section-pad bg-offwhite">
          <div className="container-wide max-w-3xl">
            {legal.sections.map((s) => (
              <section key={s.heading} className="mb-10">
                <h2 className="font-display text-navy text-2xl font-semibold mb-4">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-charcoal/85 font-light leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
            <p className="text-navy/70 text-sm mt-12 pt-6 border-t border-navy/15">
              Evenor Holdings (Pty) Ltd · Reg. No. K2025/717968 · 1st Floor, Cape Dahlia, 80 Coral
              Road, West Beach, Cape Town, 7441 · info@evenor.org
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LegalPage;
