import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top on route changes, or to the element named by the URL hash
 * (e.g. /#capabilities), so plain <Link>s work for in-page sections too.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      // The target may live in a lazily loaded route; retry briefly until it renders.
      const t = setInterval(() => {
        const el = document.getElementById(id);
        if (el || ++tries > 20) {
          clearInterval(t);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
      return () => clearInterval(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
