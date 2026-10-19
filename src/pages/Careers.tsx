import { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/LazyCookieConsent";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";
import { roles } from "@/data/roles";
import { supabase } from "@/integrations/supabase/client";
import { checkThrottle, recordSubmission } from "@/lib/formThrottle";
import { toast } from "@/hooks/use-toast";
import { applicationSchema, toApplicationRow } from "@/lib/applicationSchema";

const inp =
  "w-full bg-white border-2 border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-midgray/70 focus:outline-none focus:border-gold transition-colors";

const Careers = () => {
  const [openRole, setOpenRole] = useState<string | null>(roles[0]?.slug ?? null);
  const [selected, setSelected] = useState(roles[0]?.slug ?? "");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const applyFor = (slug: string) => {
    setSelected(slug);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => document.getElementById("full_name")?.focus(), 400);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    const fd = new FormData(e.currentTarget);

    if ((fd.get("website") as string)?.length) {
      setSubmitted(true);
      return;
    }

    const slug = String(fd.get("role_slug") ?? "");
    const parsed = applicationSchema.safeParse({
      full_name: fd.get("full_name"),
      email: fd.get("email"),
      phone: fd.get("phone") ?? "",
      role_slug: slug,
      role_title: roles.find((r) => r.slug === slug)?.title ?? "",
      location: fd.get("location") ?? "",
      years_experience: fd.get("years_experience") ?? "",
      portfolio_url: fd.get("portfolio_url") ?? "",
      cover_note: fd.get("cover_note"),
    });

    if (!parsed.success) {
      toast({
        title: "Please check the form",
        description: parsed.error.issues[0]?.message ?? "Please review your details",
        variant: "destructive",
      });
      return;
    }

    const throttle = checkThrottle("careers");
    if (!throttle.ok) {
      toast({ title: "Please wait", description: throttle.reason, variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("job_applications").insert(toApplicationRow(parsed.data));
    setLoading(false);

    if (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or email careers@evenor.org",
        variant: "destructive",
      });
      return;
    }
    recordSubmission("careers");
    setSubmitted(true);
  };

  const jsonLd = roles.map((r) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: r.title,
    description: r.summary,
    employmentType: "FULL_TIME",
    industry: r.sector,
    hiringOrganization: {
      "@type": "Organization",
      name: "Evenor Holdings (Pty) Ltd",
      sameAs: "https://evenor.org",
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: r.location, addressCountry: "ZA" },
    },
  }));

  return (
    <div className="min-h-dvh bg-offwhite">
      <Seo
        title="Careers at Evenor Holdings | Roles Across Logistics, ICT & Mining"
        description="Explore open roles at Evenor Holdings across logistics, ICT infrastructure, consulting, petrochemicals, mining and procurement. Review requirements and apply online."
        jsonLd={jsonLd}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Careers"
          title="Build Africa's Infrastructure With Us."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          image={IMG.capetown}
        />

        <section className="section-pad">
          <div className="container-wide max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="gold-label gold-ink mb-4">Working at Evenor</p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-navy mb-6">
                Disciplined People, Measurable Delivery.
              </h2>
              <p className="text-charcoal/80 font-light leading-relaxed text-base md:text-lg max-w-3xl">
                We recruit operators — people who are accountable for a corridor, a network, a site or a
                submission, and who can show the numbers behind their work. Every role below is open to
                candidates who meet the stated requirements. Applications are reviewed by the relevant
                sector lead and the principals' office.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 md:pb-28" aria-labelledby="open-roles">
          <div className="container-wide max-w-5xl">
            <h2 id="open-roles" className="font-display text-navy text-2xl md:text-3xl font-semibold mb-8">
              Open Roles
            </h2>
            <ul className="space-y-4">
              {roles.map((r, i) => {
                const expanded = openRole === r.slug;
                return (
                  <motion.li
                    key={r.slug}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.2) }}
                    className="bg-white border border-navy/10 border-l-[3px] border-l-gold rounded-[4px]"
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenRole(expanded ? null : r.slug)}
                        aria-expanded={expanded}
                        aria-controls={`panel-${r.slug}`}
                        className="w-full text-left p-6 md:p-7 flex items-start justify-between gap-4 min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        <span>
                          <span className="block font-display text-navy text-xl md:text-2xl font-bold">
                            {r.title}
                          </span>
                          <span className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-charcoal/70 text-sm font-light">
                            <span className="inline-flex items-center gap-2">
                              <Briefcase size={14} className="text-gold-ink" aria-hidden="true" />
                              {r.sector}
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <MapPin size={14} className="text-gold-ink" aria-hidden="true" />
                              {r.location}
                            </span>
                            <span className="uppercase tracking-[0.18em] text-[11px] pt-[3px]">{r.type}</span>
                          </span>
                        </span>
                        <ChevronDown
                          size={20}
                          aria-hidden="true"
                          className={`shrink-0 mt-1 text-navy transition-transform ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    </h3>

                    {expanded && (
                      <div id={`panel-${r.slug}`} className="px-6 md:px-7 pb-7 -mt-1">
                        <p className="text-charcoal/80 font-light leading-relaxed mb-6 max-w-3xl">
                          {r.summary}
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <p className="gold-label gold-ink mb-3">Responsibilities</p>
                            <ul className="space-y-2 text-sm text-charcoal/80 font-light">
                              {r.responsibilities.map((x) => (
                                <li key={x} className="pl-4 border-l border-navy/15">{x}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="gold-label gold-ink mb-3">Requirements</p>
                            <ul className="space-y-2 text-sm text-charcoal/80 font-light">
                              {r.requirements.map((x) => (
                                <li key={x} className="pl-4 border-l border-navy/15">{x}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => applyFor(r.slug)}
                          className="btn-gold mt-8 !py-3 !px-6 !text-[11px]"
                        >
                          Apply for this role
                        </button>
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          id="apply"
          ref={formRef}
          className="section-pad"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 100%)" }}
          aria-labelledby="apply-heading"
        >
          <div className="container-wide max-w-3xl">
            <div className="text-center mb-10">
              <p className="gold-label mb-4">Application</p>
              <h2 id="apply-heading" className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-white">
                Submit Your Application
              </h2>
              <p className="text-white/75 font-light mt-5 leading-relaxed">
                Complete the form below. If your experience matches the role, our office will contact you
                within 15 business days.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 shadow-2xl">
              {submitted ? (
                <div className="bg-navy-deep/5 border-l-4 border-gold p-10 text-center" role="status" aria-live="polite">
                  <p className="gold-label gold-ink mb-4">Received</p>
                  <p className="text-navy font-display text-2xl md:text-3xl mb-4">Thank you.</p>
                  <p className="text-charcoal/80 font-light leading-relaxed max-w-md mx-auto">
                    Your application has been logged with our office. Shortlisted candidates will be
                    contacted directly at the email address you provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Job application form">
                  <label htmlFor="role_slug" className="gold-label gold-ink mb-3 block">Role applied for</label>
                  <select
                    id="role_slug"
                    name="role_slug"
                    required
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className={`${inp} mb-5`}
                  >
                    {roles.map((r) => (
                      <option key={r.slug} value={r.slug}>{r.title}</option>
                    ))}
                  </select>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="full_name" className="sr-only">Full name</label>
                      <input id="full_name" name="full_name" required maxLength={120} placeholder="Full name *" className={inp} />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input id="email" name="email" type="email" required maxLength={254} placeholder="Email address *" className={inp} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">Phone number</label>
                      <input id="phone" name="phone" maxLength={40} placeholder="Phone number" className={inp} />
                    </div>
                    <div>
                      <label htmlFor="location" className="sr-only">Current location</label>
                      <input id="location" name="location" maxLength={120} placeholder="Current location" className={inp} />
                    </div>
                    <div>
                      <label htmlFor="years_experience" className="sr-only">Years of relevant experience</label>
                      <input id="years_experience" name="years_experience" maxLength={40} placeholder="Years of relevant experience" className={inp} />
                    </div>
                    <div>
                      <label htmlFor="portfolio_url" className="sr-only">LinkedIn or CV link</label>
                      <input id="portfolio_url" name="portfolio_url" type="url" maxLength={300} placeholder="LinkedIn or CV link (https://)" className={inp} />
                    </div>
                  </div>

                  <label htmlFor="cover_note" className="sr-only">Motivation</label>
                  <textarea
                    id="cover_note"
                    name="cover_note"
                    required
                    rows={6}
                    maxLength={5000}
                    placeholder="Tell us why you are suited to this role — and the results you have delivered. *"
                    className={`${inp} mt-4 resize-y`}
                  />

                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                  <p className="text-charcoal/60 text-xs font-light mt-4 leading-relaxed">
                    By applying you consent to Evenor Holdings processing your details for recruitment
                    purposes in line with our{" "}
                    <a href="/legal/privacy" className="underline hover:text-navy">Privacy Policy</a>.
                  </p>

                  <button type="submit" disabled={loading} className="btn-gold w-full mt-6 min-h-11 disabled:opacity-60">
                    {loading ? "Submitting…" : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default Careers;
