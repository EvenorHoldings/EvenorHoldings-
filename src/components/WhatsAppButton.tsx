import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const MSG = encodeURIComponent("Hello Evenor Holdings, I would like to get in touch.");

/** Floating WhatsApp link; hides while the homepage closing band is visible. */
const WhatsAppButton = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const band = document.getElementById("closing-band");
    if (!band || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting));
    io.observe(band);
    return () => io.disconnect();
  }, []);
  return (
    <a
      href={`https://wa.me/27782340831?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Evenor on WhatsApp"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={`fixed bottom-6 right-6 z-40 flex h-12 items-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${hidden ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
};
export default WhatsAppButton;
