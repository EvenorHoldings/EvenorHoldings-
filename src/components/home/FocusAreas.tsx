import { Link } from "react-router-dom";
import { sectorNav } from "@/data/sectorNav";
import Reveal from "./Reveal";

const FocusAreas = () => (
  <section id="capabilities" aria-labelledby="focus-title" className="section-home bg-offwhite">
    <Reveal className="container-wide">
      <span className="block h-px w-12 bg-gold mb-6" aria-hidden="true" />
      <h2 id="focus-title" className="eyebrow-sm text-muted-foreground">Focus areas</h2>
      <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-2xl md:text-4xl font-semibold text-ink">
        {sectorNav.map((s, i) => (
          <li key={s.slug} className="flex items-center gap-4">
            {i > 0 && <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />}
            <Link to={`/sectors/${s.slug}`} className="underline-offset-8 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">{s.short}</Link>
          </li>
        ))}
      </ul>
      <p className="home-body mt-8 text-ink">Capabilities the group draws on as ventures grow.</p>
      <p className="mt-2 text-sm text-muted-foreground">Procurement supports all five.</p>
    </Reveal>
  </section>
);
export default FocusAreas;
