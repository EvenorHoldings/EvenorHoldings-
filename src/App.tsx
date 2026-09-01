import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Sector = lazy(() => import("./pages/Sector"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-dvh bg-navy" role="status" aria-live="polite">
    <span className="sr-only">Loading page…</span>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: "easeOut" }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/sectors/:slug" element={<Sector />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export default App;
