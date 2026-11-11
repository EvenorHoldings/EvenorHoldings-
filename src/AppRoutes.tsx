import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollManager from "@/components/ScrollManager";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Ventures = lazy(() => import("./pages/Ventures"));
const VentureDetail = lazy(() => import("./pages/VentureDetail"));
const Sector = lazy(() => import("./pages/Sector"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const RoleDetail = lazy(() => import("./pages/RoleDetail"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightDetail = lazy(() => import("./pages/InsightDetail"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const RouteFallback = () => (
  <div className="min-h-dvh bg-navy" role="status" aria-live="polite">
    <span className="sr-only">Loading page…</span>
  </div>
);

/** Providers + routes, shared by the browser entry (BrowserRouter) and the pre-renderer (StaticRouter). */
const AppRoutes = ({ queryClient }: { queryClient: QueryClient }) => (
  <QueryClientProvider client={queryClient}>
      <Toaster />
      <ScrollManager />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/ventures/:slug" element={<VentureDetail />} />
          <Route path="/sectors/:slug" element={<Sector />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<RoleDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/legal/:doc" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
  </QueryClientProvider>
);

export default AppRoutes;
