import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";

/** Standard page chrome: nav, main landmark, footer, WhatsApp and cookie banner. */
const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-dvh bg-offwhite">
    <Navbar />
    <main id="main-content">{children}</main>
    <Footer />
    <WhatsAppButton />
    <CookieConsent />
  </div>
);

export default PageLayout;
