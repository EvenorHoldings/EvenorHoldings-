import type { Venture } from "@/data/ventures";

/**
 * Brand wordmark for a venture, set in type so it stays crisp and readable by crawlers.
 * Moodies uses its brown serif wordmark; others use the group display face.
 */
const VentureWordmark = ({ venture: v, className = "" }: { venture: Venture; className?: string }) => (
  <span
    className={`inline-block leading-none ${
      v.theme.serifWordmark
        ? "font-brandserif font-medium tracking-tight"
        : "font-display font-bold tracking-[0.12em]"
    } ${className}`}
    style={v.theme.wordmark ? { color: v.theme.wordmark } : undefined}
  >
    {v.wordmarkText ?? v.name}
  </span>
);

export default VentureWordmark;
