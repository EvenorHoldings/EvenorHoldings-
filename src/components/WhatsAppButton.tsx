import { MessageCircle } from "lucide-react";

const PHONE = "27815402781"; // wa.me format, no +
const MSG = encodeURIComponent(
  "Hello Evenor Holdings, I would like to open a conversation with your principals' office."
);

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${MSG}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp Our Office"
    className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-navy border border-gold/50 hover:border-gold hover:bg-navy-deep shadow-2xl px-4 py-3 md:px-5 md:py-4 transition-all duration-300"
    style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.35)" }}
  >
    <span className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-navy">
      <MessageCircle size={18} strokeWidth={2.5} />
    </span>
    <span className="hidden md:flex flex-col leading-tight">
      <span className="text-[10px] tracking-[0.22em] uppercase text-gold">Direct Line</span>
      <span className="text-white text-sm font-medium">WhatsApp Our Office</span>
    </span>
  </a>
);

export default WhatsAppButton;
