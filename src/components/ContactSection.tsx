import { useEffect, useState, FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { checkThrottle, recordSubmission } from "@/lib/formThrottle";
import { toast } from "@/hooks/use-toast";
import { IMG } from "@/assets/images";
import { contactSchema, toContactRow, ROUTING } from "@/lib/contactSchema";
import { CONTACT_TOPICS, type ContactTopic } from "@/lib/site";
import { ventures } from "@/data/ventures";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enquiryType, setEnquiryType] = useState("General");
  const [message, setMessage] = useState("");
  const [params] = useSearchParams();

  // Preselect the desk from ?topic=<key> (e.g. investors, tenders) or ?interest=<venture>.
  // Runs after mount so pre-rendered HTML and the first client render match.
  useEffect(() => {
    const topic = params.get("topic") as ContactTopic | null;
    const interest = params.get("interest");
    const venture = interest ? ventures.find((v) => v.slug === interest) : undefined;
    if (venture) {
      setEnquiryType(CONTACT_TOPICS.ventures);
      setMessage((m) => m || `I'm interested in ${venture.name}${venture.stage === "Pilot" ? " and its pilot programme" : ""}. `);
    } else if (topic && topic in CONTACT_TOPICS) {
      setEnquiryType(CONTACT_TOPICS[topic]);
    }
  }, [params]);

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
      consent: fd.get("consent") === "on",
    });

    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Please review the form";
      toast({ title: "Please check the form", description: first, variant: "destructive" });
      return;
    }

    const throttle = checkThrottle("contact");
    if (!throttle.ok) {
      toast({ title: "Please wait", description: "reason" in throttle ? throttle.reason : "Please try again shortly.", variant: "destructive" });
      return;
    }

    setLoading(true);
    // Loaded on demand: keeps the Supabase SDK off the critical path and out of pre-rendering.
    const { supabase } = await import("@/integrations/supabase/client");
    const { error } = await supabase.from("contacts").insert(toContactRow(parsed.data));

    setLoading(false);

    if (error) {
      toast({
        title: "Submission failed",
        description: `Please try again or email info@evenor.org`,
        variant: "destructive",
      });
      return;
    }
    recordSubmission("contact");
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
        <div
          className="text-center mb-14 text-white max-w-4xl mx-auto"
        >
          <p className="gold-label mb-4">Start a Conversation</p>
          <h2 className="display-lg text-white mb-6">
            Building something? Let's talk.
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
            Partnerships, ventures, investor questions or tenders: choose a topic and
            we'll route your message to the right desk.
          </p>
          <p className="lg:hidden mt-5 text-sm text-white/75">Mon–Fri · 08:00–17:00 SAST · Meetings by appointment</p>
        </div>

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
                <p className="flex gap-3"><Phone size={16} className="text-gold shrink-0 mt-0.5" /><a href="tel:+27782340831" className="hover:text-gold transition-colors">+27 78 234 0831</a></p>
                <p className="flex gap-3"><Mail size={16} className="text-gold shrink-0 mt-0.5" /><a href="mailto:info@evenor.org" className="hover:text-gold transition-colors">info@evenor.org</a></p>
                <p className="flex gap-3"><Clock size={16} className="text-gold shrink-0 mt-0.5" /><span>Mon–Fri · 08:00–17:00 SAST · Meetings by appointment</span></p>
              </div>
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
                  A member of our team will be in contact with you
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      maxLength={5000}
                      className={`${inp} resize-none`}
                    />
                  </div>
                </div>

                {/* Honeypot: hidden from people, left for bots to fill */}
                <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <label htmlFor="consent" className="mt-5 mb-6 flex items-start gap-3 text-sm text-charcoal/80 leading-relaxed">
                  <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-navy" />
                  <span>
                    I agree that Evenor Holdings may store and use my details to respond to this enquiry, in line with POPIA and our{" "}
                    <Link to="/legal/privacy" className="text-navy underline underline-offset-2">Privacy Policy</Link>.
                  </span>
                </label>

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
