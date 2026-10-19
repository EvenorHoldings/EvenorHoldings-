import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import VenturesSection from "@/components/VenturesSection";
import SectorsSection from "@/components/SectorsSection";
import ApproachSection from "@/components/ApproachSection";
import FounderSection from "@/components/FounderSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";

const Index = () => (
  <div className="min-h-dvh bg-offwhite">
    <Seo
      title="Evenor Holdings | A Holding Company Building African Ventures"
      description="Evenor Holdings is a South African holding company that builds and operates African ventures, including Moodies and OSTO, backed by capabilities in logistics, ICT, consulting, petrochemicals and mining."
    />
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <VenturesSection />
      <SectorsSection />
      <ApproachSection />
      <FounderSection />
      <InsightsSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
    <CookieConsent />
  </div>
);

export default Index;
