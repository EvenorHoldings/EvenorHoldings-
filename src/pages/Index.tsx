import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import HomeVentures from "@/components/home/HomeVentures";
import HowWeBuild from "@/components/home/HowWeBuild";
import FocusAreas from "@/components/home/FocusAreas";
import LatestInsight from "@/components/home/LatestInsight";
import ClosingBand from "@/components/home/ClosingBand";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";

const Index = () => (
  <div className="min-h-dvh bg-offwhite">
    <Seo
      title="Evenor Holdings | Building African Ventures That Change Lives"
      description="Evenor Holdings is an emerging South African holding company, founded in 2025, building ventures that change lives, starting with Moodies, OSTO, RES360 and Elections Intelligence, across logistics, ICT, consulting, petrochemicals and mining."
    />
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <HomeVentures />
      <HowWeBuild />
      <FocusAreas />
      <LatestInsight />
      <ClosingBand />
    </main>
    <Footer />
    <WhatsAppButton />
    <CookieConsent />
  </div>
);

export default Index;
