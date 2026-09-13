const Footer = () => {
  const yr = new Date().getFullYear();
  return (
    <footer style={{ background: "hsl(var(--navy-deep))" }} className="text-white/70 pt-20 pb-8">
      <div className="container-wide grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        {/* Column 1 — Identity */}
        <div className="lg:col-span-1">
          <p className="font-display text-white text-xl leading-tight mb-1">Evenor Holdings <span className="text-white/75">(Pty) Ltd</span></p>
          <p className="text-gold italic text-sm mb-5">Always Better.</p>
          <div className="h-[2px] w-10 bg-gold mb-5" />
          <p className="text-xs leading-relaxed text-white/75">Reg. No. K2025/717968</p>
          <p className="text-xs leading-relaxed text-white/75">CIPC South Africa · B-BBEE Level 2</p>
          <p className="text-xs text-white/70 mt-6">© {yr} Evenor Holdings (Pty) Ltd.<br/>All rights reserved.</p>
        </div>

        {/* Column 2 — Services */}
        <div>
          <p className="text-white text-[11px] tracking-[0.22em] uppercase mb-5">Services</p>
          <ul className="space-y-2.5 text-sm font-light">
            <li><a href="/sectors/logistics" className="hover:text-gold transition-colors">Logistics & Supply Chain</a></li>
            <li><a href="/sectors/ict" className="hover:text-gold transition-colors">ICT Infrastructure</a></li>
            <li><a href="/sectors/consulting" className="hover:text-gold transition-colors">Management Consulting</a></li>
            <li><a href="/sectors/petrochemicals" className="hover:text-gold transition-colors">Petrochemicals Solutions</a></li>
            <li><a href="/sectors/mining" className="hover:text-gold transition-colors">Mining Solutions</a></li>
          </ul>
        </div>

        {/* Column 3 — Company */}
        <div>
          <p className="text-white text-[11px] tracking-[0.22em] uppercase mb-5">Company</p>
          <ul className="space-y-2.5 text-sm font-light">
            <li><a href="/about" className="hover:text-gold transition-colors">About Evenor</a></li>
            <li><a href="/leadership" className="hover:text-gold transition-colors">Leadership</a></li>
            <li><a href="/projects" className="hover:text-gold transition-colors">Projects & Portfolio</a></li>
            <li><a href="/insights" className="hover:text-gold transition-colors">Perspectives & Insights</a></li>
            <li><a href="/careers" className="hover:text-gold transition-colors">Careers</a></li>
            <li><a href="/contact" className="hover:text-gold transition-colors">Investor Relations</a></li>
            <li><a href="/contact" className="hover:text-gold transition-colors">Tender Opportunities</a></li>
          </ul>
        </div>

        {/* Column 4 — Direct Correspondence */}
        <div>
          <p className="text-white text-[11px] tracking-[0.22em] uppercase mb-5">Direct Correspondence</p>
          <ul className="space-y-2.5 text-sm font-light">
            <li><span className="text-white/70 text-[11px] uppercase tracking-wider">General</span><br/><a href="mailto:info@evenor.org" className="hover:text-gold transition-colors">info@evenor.org</a></li>
            <li><span className="text-white/70 text-[11px] uppercase tracking-wider">Sales</span><br/><a href="mailto:sales@evenor.org" className="hover:text-gold transition-colors">sales@evenor.org</a></li>
            <li><span className="text-white/70 text-[11px] uppercase tracking-wider">Tenders</span><br/><a href="mailto:tenders@evenor.org" className="hover:text-gold transition-colors">tenders@evenor.org</a></li>
            <li><span className="text-white/70 text-[11px] uppercase tracking-wider">Partners</span><br/><a href="mailto:partners@evenor.org" className="hover:text-gold transition-colors">partners@evenor.org</a></li>
          </ul>
        </div>

        {/* Column 5 — HQ + Legal */}
        <div>
          <p className="text-white text-[11px] tracking-[0.22em] uppercase mb-5">Head Office</p>
          <address className="not-italic text-sm font-light leading-relaxed text-white/70">
            1st Floor, Cape Dahlia<br/>
            80 Coral Road, West Beach<br/>
            Cape Town, 7441<br/>
            South Africa
          </address>
          <div className="mt-4 space-y-1.5 text-sm font-light">
            <a href="tel:+27815402781" className="block hover:text-gold transition-colors">+27 81 540 2781</a>
            <a href={`https://wa.me/27815402781`} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">WhatsApp Enquiry</a>
          </div>
          <p className="text-white text-[11px] tracking-[0.22em] uppercase mt-6 mb-3">Legal</p>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="/legal/privacy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="/legal/terms" className="hover:text-gold transition-colors">Terms of Engagement</a></li>
            <li><a href="/legal/compliance" className="hover:text-gold transition-colors">POPIA Compliance</a></li>
          </ul>
        </div>
      </div>

      <div
        className="container-wide mt-14 pt-6 border-t flex flex-col md:flex-row justify-between gap-2 text-[12px] text-white/70"
        style={{ borderColor: "hsl(var(--navy-light))" }}
      >
        <span>Evenor Holdings (Pty) Ltd — www.evenor.org</span>
        <span className="italic">Designed with purpose. Built for Africa.</span>
      </div>
    </footer>
  );
};

export default Footer;
