const partners = [
  "SinoConnect Infrastructure",
  "FNB Corporate Banking",
  "SEACOM Subsea",
  "Tanzania Ports Authority",
  "Vodacom Business",
  "SADC Trade Facilitation",
  "TCRA — Tanzania",
];

/** Partner names as published on the previous site. See PR notes: each needs written confirmation. */
const PartnersSection = () => (
  <section aria-labelledby="partners-title" className="section-pad bg-white">
    <div className="container-wide">
      <div className="max-w-3xl mb-12">
        <p className="eyebrow gold-ink mb-4">Ecosystem</p>
        <h2 id="partners-title" className="display-lg text-navy">Partners we work with.</h2>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/75">
          Delivery draws on a network of technical partners, licensed operators, subcontractors and
          financial institutions.
        </p>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
        {partners.map((p) => (
          <li key={p} className="bg-white h-20 flex items-center justify-center px-4 text-center text-sm font-medium text-navy">
            {p}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PartnersSection;
