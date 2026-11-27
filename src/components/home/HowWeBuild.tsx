import Reveal from "./Reveal";

const steps = [
  ["01", "Find", "Start where people are overpaying or underserved."],
  ["02", "Build", "Small teams own each venture end to end."],
  ["03", "Back", "The group supplies capital and capabilities."],
  ["04", "Prove", "Pilots before launches. Evidence before claims."],
];

const HowWeBuild = () => (
  <section aria-labelledby="build-title" className="section-home bg-mist">
    <div className="container-wide">
      <Reveal><h2 id="build-title" className="home-h2 text-ink">Always Better.</h2></Reveal>
      <ol className="mt-16 grid gap-10 md:grid-cols-4">
        {steps.map(([n, w, s]) => (
          <li key={n}>
            <Reveal>
              <span className="block h-px w-full bg-gold" aria-hidden="true" />
              <p className="mt-6 text-sm font-semibold text-muted-foreground">{n}</p>
              <p className="mt-2 text-2xl font-semibold text-ink">{w}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
export default HowWeBuild;
