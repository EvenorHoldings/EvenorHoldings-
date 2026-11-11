import { Suspense, lazy, useEffect, useState } from "react";

const CookieConsent = lazy(() => import("./CookieConsent"));

/** Loads the cookie banner only after the page is idle, keeping it off the critical path. */
const LazyCookieConsent = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 3000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <CookieConsent />
    </Suspense>
  );
};

export default LazyCookieConsent;
