import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Light text for dark sections. */
  inverse?: boolean;
  align?: "left" | "center";
  id?: string;
}

const SectionHeader = ({ eyebrow, title, intro, inverse, align = "left", id }: SectionHeaderProps) => (
  <div className={`max-w-3xl mb-12 md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}>
    <p className={`eyebrow mb-4 ${inverse ? "text-gold" : "gold-ink"}`}>{eyebrow}</p>
    <h2 id={id} className={`display-lg ${inverse ? "text-white" : "text-navy"}`}>
      {title}
    </h2>
    {intro && (
      <p className={`mt-6 text-lg leading-relaxed ${inverse ? "text-white/75" : "text-charcoal/75"}`}>{intro}</p>
    )}
  </div>
);

export default SectionHeader;
