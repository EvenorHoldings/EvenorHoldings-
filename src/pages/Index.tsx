import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import VenturesSection from "@/components/VenturesSection";
import SectorsSection from "@/components/SectorsSection";
import ApproachSection from "@/components/ApproachSection";
import FounderLink from "@/components/FounderLink";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";

const Index = () => (
  <div className="min-h-dvh bg-offwhite">
    <Seo
      title="Evenor Holdings | Building African Ventures That Change Lives"
      description="Evenor Holdings is an emerging South African holding company, founded in 2025, building ventures that change lives, starting with Moodies and OSTO, across logistics, ICT, consulting, petrochemicals and mining."
    />
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <VenturesSection />
      <SectorsSection />
      <ApproachSection />
      <FounderLink />
      <InsightsSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
    <CookieConsent />
  </div>
);

export default Index;
