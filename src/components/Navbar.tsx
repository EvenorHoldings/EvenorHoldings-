import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

type NavLink = { label: string; href: string; type: "route" | "hash" };

const links: NavLink[] = [
  { label: "HOME", href: "/", type: "route" },
  { label: "ABOUT", href: "/about", type: "route" },
  { label: "SERVICES", href: "#sectors", type: "hash" },
  { label: "PROJECTS", href: "/projects", type: "route" },
  { label: "LEADERSHIP", href: "/leadership", type: "route" },
  { label: "CONTACT", href: "/contact", type: "route" },
];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: escape to close, focus trap, restore focus, lock scroll
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = menuRef.current?.querySelector<HTMLElement>("button, a");
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusables = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>("button, a, [tabindex]:not([tabindex='-1'])")
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusables.length === 0) return;
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  const onHome = pathname === "/";

  const handleClick = (l: NavLink) => {
    setOpen(false);
    if (l.type === "route") {
      navigate(l.href);
      window.scrollTo(0, 0);
      return;
    }
    // hash: scroll if on home, else navigate to home then scroll
    if (onHome) {
      document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: l.href } });
      setTimeout(() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }), 250);
    }
  };

  const forceOpaque = !onHome;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-gold focus:text-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:tracking-wide"
      >
        Skip to main content
      </a>
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || forceOpaque ? "bg-navy shadow-lg py-4" : "bg-navy/70 backdrop-blur-sm py-6"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          <button
            onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
            className="text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            aria-label="Evenor Holdings — go to home page"
          >
            <span className="font-display text-white text-xl md:text-2xl tracking-wide">Evenor Holdings</span>
            <div className="h-[2px] w-10 bg-gold mt-1" aria-hidden="true" />
          </button>

          <div className="hidden xl:flex items-center gap-7">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleClick(l)}
                aria-current={l.type === "route" && pathname === l.href ? "page" : undefined}
                className="nav-underline text-white text-[11px] font-medium tracking-[0.2em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleClick({ label: "CONTACT", href: "/contact", type: "route" })}
              className="btn-gold !py-2.5 !px-5 !text-[11px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Partner With Us
            </button>
          </div>

          <button
            ref={triggerRef}
            onClick={() => setOpen(true)}
            className="xl:hidden text-white min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <Menu size={26} aria-hidden="true" />
          </button>
        </div>

        {open && (
          <div
            id="mobile-nav"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 bg-navy z-50 flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="text-white min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Close navigation menu"
              >
                <X size={28} aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => handleClick(l)}
                  aria-current={l.type === "route" && pathname === l.href ? "page" : undefined}
                  className="text-white text-lg font-medium tracking-[0.22em] min-h-11 px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleClick({ label: "CONTACT", href: "/contact", type: "route" })}
                className="btn-gold mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};


export default Navbar;
