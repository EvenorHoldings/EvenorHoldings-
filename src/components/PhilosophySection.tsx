import { useEffect, useRef, useState } from "react";
import { IMG } from "@/assets/images";

const stats = [
  { value: "12+", label: "Countries Active", numeric: true },
  { value: "Turnkey", label: "End-to-End Delivery Model", numeric: false },
  { value: "5", label: "Core Sectors", numeric: true },
  { value: "200+", label: "Strategic Partners", numeric: true },
];

const Counter = ({ to }: { to: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);
  const started = useRef(false);
  const num = parseInt(to.replace(/\D/g, ""), 10);
  const isNumeric = !isNaN(num) && /^\d/.test(to);

  useEffect(() => {
    if (!isNumeric) return;
    const suffix = to.replace(/^\d+/, "");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const n = Math.round(num * (0.5 - Math.cos(Math.PI * p) / 2));
            setVal(`${n}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, num, isNumeric]);

  return <span ref={ref}>{val}</span>;
};

const PhilosophySection = () => {
  return (
    <>
      <section className="bg-navy section-pad text-white">
        <div className="container-wide max-w-4xl text-center">
          <p className="gold-label mb-6">Our Philosophy</p>
          <h2 className="font-display italic text-white text-2xl md:text-[28px] mb-8">
            "Always Better."
          </h2>
          <p className="text-white/75 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            We do not accept the ordinary. In every contract we sign, every cable we lay, every barrel we handle, and every strategy we deliver, Evenor Holdings holds itself to a single standard: the outcome must be better than what existed before. Better infrastructure. Better governance. Better returns. Better Africa.
          </p>
          <div className="w-20 h-[2px] bg-gold mx-auto my-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-gold text-3xl md:text-[44px] font-bold mb-2 leading-tight">
                  <Counter to={s.value} />
                </div>
                <div className="text-white/70 text-[11px] md:text-xs uppercase tracking-[0.18em] font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-offwhite">
        <div className="h-[2px] bg-gold w-full" />
        <div
          className="h-[280px] md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.corridor})` }}
          aria-hidden
        />
        <div className="h-[2px] bg-gold w-full" />
      </div>
    </>
  );
};

export default PhilosophySection;
