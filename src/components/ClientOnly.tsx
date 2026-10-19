import { useEffect, useState, type ReactNode } from "react";

/** Renders children only in the browser, after hydration (e.g. Leaflet, which needs `window`). */
const ClientOnly = ({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <>{mounted ? children : fallback}</>;
};

export default ClientOnly;
