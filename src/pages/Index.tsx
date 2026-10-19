import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import SectorsSection from "@/components/SectorsSection";
import WhyEvenorSection from "@/components/WhyEvenorSection";
import LeadershipSection from "@/components/LeadershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectorDeepDive from "@/components/SectorDeepDive";
import IndustriesTeaserSection from "@/components/IndustriesTeaserSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";

const Index = () => {
  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title="Evenor Holdings | Always Better | Africa's Multi-Sector Infrastructure Group"
        description="Evenor Holdings is a South African industrial and technology conglomerate delivering turnkey solutions across Logistics, ICT, Consulting, Petrochemicals and Mining in Sub-Saharan Africa."
      />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <section id="philosophy"><PhilosophySection /></section>
        <SectorsSection />
        <SectorDeepDive />
        <WhyEvenorSection />
        <IndustriesTeaserSection />
        <LeadershipSection />
        <ProjectsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>

  );
};

export default Index;
