import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";

const Contact = () => (
  <div className="min-h-dvh bg-offwhite">
    <Seo
      title="Contact Evenor Holdings | Enquiries, Tenders & Partnerships"
      description="Contact Evenor Holdings — head office in Cape Town, South Africa. Route your enquiry to sales, tenders, partnerships or the executive office."
    />
    <Navbar />
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Speak With Our Principals' Office."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image={IMG.corridor}
      />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
    <CookieConsent />
  </div>
);

export default Contact;
