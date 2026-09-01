import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { IMG } from "@/assets/images";
import { contactSchema, toContactRow, ROUTING } from "@/lib/contactSchema";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enquiryType, setEnquiryType] = useState("General");

  const inp =
    "w-full bg-white border-2 border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-midgray/70 focus:outline-none focus:border-gold transition-colors";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const fd = new FormData(e.currentTarget);

    // Honeypot — silently drop
    if ((fd.get("website") as string)?.length) {
      setSubmitted(true);
      return;
    }

    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      organisation: fd.get("organisation") ?? "",
      country: fd.get("country") ?? "",
      enquiry_type: fd.get("enquiry_type"),
      email: fd.get("email"),
      phone: fd.get("phone") ?? "",
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Please review the form";
      toast({ title: "Please check the form", description: first, variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contacts").insert(toContactRow(parsed.data));

    setLoading(false);

    if (error) {
      toast({
        title: "Submission failed",
        description: `Please try again or email support@evenor.org`,
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 100%)",
      }}
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14 text-white max-w-4xl mx-auto"
        >
          <p className="gold-label mb-4">Start a Conversation</p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-bold mb-6">
            The Right Project Deserves<br />the Right Partner.
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
            Select the nature of your enquiry and our principals' office will
            route your correspondence to the appropriate desk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] shadow-2xl max-w-6xl mx-auto">
          <div
            className="hidden lg:flex relative bg-cover bg-center min-h-full border-r-4 border-gold flex-col justify-end p-10 text-white"
            style={{
              backgroundImage:
                `url(${IMG.corridor})`,
            }}
          >
            <div className="absolute inset-0 bg-navy/60" />
            <div className="relative space-y-6">
              <p className="gold-label">Head Office · Cape Town</p>
              <div className="space-y-4 text-sm font-light">
                <p className="flex gap-3"><MapPin size={16} className="text-gold shrink-0 mt-0.5" /><span>1st Floor, Cape Dahlia<br/>80 Coral Road, West Beach<br/>Cape Town, 7441</span></p>
                <p className="flex gap-3"><Phone size={16} className="text-gold shrink-0 mt-0.5" /><a href="tel:+27815402781" className="hover:text-gold transition-colors">+27 81 540 2781</a></p>
                <p className="flex gap-3"><Mail size={16} className="text-gold shrink-0 mt-0.5" /><a href="mailto:info@evenor.org" className="hover:text-gold transition-colors">info@evenor.org</a></p>
                <p className="flex gap-3"><Clock size={16} className="text-gold shrink-0 mt-0.5" /><span>Mon–Fri · 08:00–17:00 SAST</span></p>
              </div>
              <p className="text-white/60 text-[11px] tracking-[0.2em] uppercase pt-4 border-t border-white/20">
                By appointment · Discreet counsel
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10">
            {submitted ? (
              <div className="bg-navy-deep/5 border-l-4 border-gold p-10 text-center" role="status" aria-live="polite">
                <p className="gold-label gold-ink mb-4">Received</p>
                <p className="text-navy font-display text-2xl md:text-3xl leading-snug mb-4">
                  Thank you.
                </p>
                <p className="text-charcoal/80 font-light leading-relaxed max-w-md mx-auto">
                  A member of our principals' office will be in contact with you
                  within 48 business hours at the correspondence address you provided.
                </p>
              </div>

            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Enquiry form">
                <label htmlFor="enquiry_type" className="gold-label gold-ink mb-6 block">Nature of Enquiry</label>
                <select
                  id="enquiry_type"
                  name="enquiry_type"
                  required
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className={`${inp} mb-5`}
                >
                  {Object.keys(ROUTING).map((k) => (
                    <option key={k} value={k}>{k}</option>
                  ))}
                </select>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Full name</label>
                    <input id="name" required name="name" placeholder="Full Name" className={inp} maxLength={120} autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="organisation" className="sr-only">Organisation or institution</label>
                    <input id="organisation" name="organisation" placeholder="Organisation / Institution" className={inp} maxLength={200} autoComplete="organization" />
                  </div>
                  <div>
                    <label htmlFor="country" className="sr-only">Country</label>
                    <input id="country" name="country" placeholder="Country" className={inp} maxLength={100} autoComplete="country-name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone number with country code</label>
                    <input id="phone" name="phone" type="tel" placeholder="Phone (with country code)" className={inp} maxLength={40} autoComplete="tel" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input id="email" required type="email" name="email" placeholder="Email Address" className={inp} maxLength={254} autoComplete="email" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="sr-only">Message or nature of enquiry</label>
                    <textarea
                      id="message"
                      required
                      name="message"
                      placeholder="Message / Nature of Enquiry"
                      rows={6}
                      maxLength={5000}
                      className={`${inp} resize-none`}
                    />
                  </div>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />


                <p className="text-[11px] text-charcoal/80 mt-5 mb-6 leading-relaxed">
                  Your enquiry will be routed to{" "}
                  <span className="text-navy font-medium">{ROUTING[enquiryType]}</span>. By submitting,
                  you consent to Evenor Holdings storing your details in accordance with POPIA.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting…" : "Submit Enquiry →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
