import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contactHref } from "@/lib/site";

const links = [
  { label: "Ventures", to: "/ventures" },
  { label: "Capabilities", to: "/#capabilities" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const linkBase =
  "text-[13px] font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Mobile menu: escape to close, focus trap, restore focus, lock scroll.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setOpen(false);
      if (e.key !== "Tab" || !menuRef.current) return;
      const f = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a, button"));
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) {
        e.preventDefault();
        f[f.length - 1].focus();
      } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
        e.preventDefault();
        f[0].focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [open]);

  const solid = scrolled || pathname !== "/";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-gold focus:text-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-navy/95 backdrop-blur border-b border-white/10" : "bg-transparent"
        }`}
      >
        <nav aria-label="Primary" className="container-wide flex h-16 md:h-20 items-center justify-between">
          <Link
            to="/"
            className="flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            aria-label="Evenor Holdings home"
          >
            <span className="font-display text-white text-lg md:text-xl font-semibold tracking-tight">Evenor Holdings</span>
            <span className="h-[2px] w-8 bg-gold mt-1" aria-hidden="true" />
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive && !l.to.includes("#") ? "text-gold" : "text-white/85 hover:text-white"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to={contactHref("partnership")} className="btn-gold !py-2.5 !px-5">
                Partner with us
              </Link>
            </li>
          </ul>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden text-white min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </nav>

        {open && (
          <div
            id="mobile-nav"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-navy"
          >
            <div className="container-wide flex h-16 items-center justify-between">
              <span className="font-display text-white text-lg font-semibold">Evenor Holdings</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-label="Close menu"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>
            <ul className="container-wide flex-1 flex flex-col justify-center gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl text-white hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-6">
                <Link to={contactHref("partnership")} onClick={() => setOpen(false)} className="btn-gold w-full">
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
