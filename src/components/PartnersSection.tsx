import { IMG } from "@/assets/images";
import { Suspense, lazy } from "react";

const OperationsMap = lazy(() => import("@/components/OperationsMap"));

const partners = [

  "SinoConnect Infrastructure", "FNB Corporate Banking", "SEACOM Subsea", "Tanzania Ports Authority",
  "Vodacom Business", "SADC Trade Facilitation", "TCRA — Tanzania", "Lovable (Technology Partner)",
];

const PartnersSection = () => {
  return (
    <section className="relative bg-navy section-pad text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${IMG.corridor})`,
          opacity: 0.08,
        }}
        aria-hidden
      />
      <div className="relative container-wide max-w-5xl text-center">
        <p className="gold-label mb-4">Ecosystem</p>
        <h2 className="font-display text-white text-3xl md:text-[44px] font-bold mb-6">
          Global Partners. African Mandate.
        </h2>
        <p className="text-white/75 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-[17px] mb-14">
          Evenor Holdings does not work alone. Our project delivery capacity is underpinned by a curated network of Tier-1 technical partners, licensed ISPs, engineering subcontractors, and financial institutions — selected for their excellence, their African experience, and their alignment with our Always Better standard.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {partners.map((p) => (
            <div
              key={p}
              className="border border-white/30 h-20 flex items-center justify-center text-white text-[11px] md:text-sm font-semibold text-center px-3 hover:border-gold hover:text-gold transition-colors"
            >
              {p}
            </div>
          ))}
        </div>

        <div className="mt-16 text-left">
          <p className="gold-label mb-4 text-center">Where We Operate</p>
          <Suspense
            fallback={
              <div
                className="h-[380px] md:h-[560px] w-full max-w-3xl mx-auto border border-gold/30 bg-navy-deep"
                role="status"
                aria-live="polite"
              >
                <span className="sr-only">Loading operations map…</span>
              </div>
            }
          >
            <OperationsMap />
          </Suspense>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
