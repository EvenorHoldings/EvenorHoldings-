import { Link } from "react-router-dom";

const link = "hover:text-gold transition-colors";
const nav = [
  ["Ventures", "/ventures"],
  ["About", "/about"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

const Footer = () => (
  <footer className="bg-navy-footer text-white/75 py-12">
    <div className="container-wide flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-lg font-semibold text-white">Evenor Holdings</p>
        <p className="text-sm text-gold">Always Better.</p>
      </div>
      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {nav.map(([l, to]) => <li key={to}><Link to={to} className={link}>{l}</Link></li>)}
        </ul>
      </nav>
    </div>
    <div className="container-wide mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] md:flex-row md:justify-between">
      <p>Evenor Holdings (Pty) Ltd · Reg. No. K2025/717968 · Cape Town · © 2026</p>
      <ul className="flex gap-6">
        <li><Link to="/legal/privacy" className={link}>Privacy</Link></li>
        <li><Link to="/legal/terms" className={link}>Terms</Link></li>
        <li><Link to="/legal/compliance" className={link}>POPIA</Link></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
