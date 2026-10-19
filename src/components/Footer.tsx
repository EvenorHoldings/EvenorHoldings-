import { Link } from "react-router-dom";
import { ventures } from "@/data/ventures";
import { sectorNav } from "@/data/sectorNav";
import { contactHref } from "@/lib/site";

const heading = "text-white text-xs font-semibold tracking-[0.18em] uppercase mb-5";
const link = "hover:text-gold transition-colors";

const Footer = () => {
  const yr = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep text-white/70 pt-20 pb-10">
      <div className="container-wide grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-white text-xl font-semibold leading-tight">Evenor Holdings</p>
          <p className="text-gold text-sm mt-1 mb-5">Always Better.</p>
          <p className="text-sm leading-relaxed max-w-xs">
            A South African holding company that builds and operates African ventures.
          </p>
          <p className="text-xs leading-relaxed mt-6">Evenor Holdings (Pty) Ltd · Reg. No. K2025/717968</p>
          <p className="text-xs leading-relaxed">CIPC South Africa · B-BBEE Level 2</p>
        </div>

        <nav aria-label="Ventures">
          <p className={heading}>Ventures</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/ventures" className={link}>All ventures</Link></li>
            {ventures.map((v) => (
              <li key={v.slug}><Link to={`/ventures/${v.slug}`} className={link}>{v.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Capabilities">
          <p className={heading}>Capabilities</p>
          <ul className="space-y-2.5 text-sm">
            {sectorNav.map((s) => (
              <li key={s.slug}><Link to={`/sectors/${s.slug}`} className={link}>{s.nav}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className={heading}>Company</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className={link}>About</Link></li>
            <li><Link to="/leadership" className={link}>Leadership</Link></li>
            <li><Link to="/projects" className={link}>Projects</Link></li>
            <li><Link to="/insights" className={link}>Insights</Link></li>
            <li><Link to="/careers" className={link}>Careers</Link></li>
            <li><Link to={contactHref("investors")} className={link}>Investor relations</Link></li>
            <li><Link to={contactHref("tenders")} className={link}>Tender opportunities</Link></li>
          </ul>
        </nav>

        <div>
          <p className={heading}>Contact</p>
          <address className="not-italic text-sm leading-relaxed">
            1st Floor, Cape Dahlia<br />
            80 Coral Road, West Beach<br />
            Cape Town, 7441, South Africa
          </address>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:info@evenor.org" className={link}>info@evenor.org</a></li>
            <li><a href="tel:+27815402781" className={link}>+27 81 540 2781</a></li>
            <li>
              <a href="https://wa.me/27815402781" target="_blank" rel="noopener noreferrer" className={link}>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wide mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs">
        <p>© {yr} Evenor Holdings (Pty) Ltd. All rights reserved.</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li><Link to="/legal/privacy" className={link}>Privacy policy</Link></li>
          <li><Link to="/legal/terms" className={link}>Terms</Link></li>
          <li><Link to="/legal/compliance" className={link}>POPIA compliance</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
