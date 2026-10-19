import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { IMG } from "@/assets/images";

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="min-h-dvh bg-navy flex flex-col">
      <Seo
        title="Page Not Found | Evenor Holdings"
        description="The page you are looking for is no longer available or has been relocated. Return to the Evenor Holdings homepage."
        noindex
      />
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
      <section className="flex-1 flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${IMG.capetown})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy-deep" />

        <div className="container-wide relative py-32 md:py-40 text-white">
          <p className="gold-label mb-6">Error 404 · Route Unavailable</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold leading-none mb-6">
            Off the Map.
          </h1>
          <div className="h-[3px] w-16 bg-gold mb-8" />
          <p className="text-white/75 font-light text-[17px] md:text-[18px] max-w-2xl leading-relaxed mb-10">
            The page you sought is no longer at this address. It may have been
            relocated, retired, or was never charted. Our principals' office
            invites you to continue elsewhere on the estate.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link to="/" className="btn-gold">
              <Home size={16} className="mr-2" />
              Return Home
            </Link>
            <Link to="/projects" className="btn-outline-white">
              <Compass size={16} className="mr-2" />
              Explore Projects
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline-white"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 max-w-4xl border border-white/10">
            {[
              { label: "About the Group", href: "/about" },
              { label: "Sectors", href: "/sectors/logistics" },
              { label: "Leadership", href: "/leadership" },
              { label: "Contact", href: "/#contact" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="bg-navy-deep hover:bg-navy-light transition-colors p-6 group"
              >
                <div className="text-[10px] tracking-[0.22em] uppercase text-gold mb-2">
                  Continue to
                </div>
                <div className="font-display text-white text-lg group-hover:text-gold transition-colors">
                  {l.label} →
                </div>
              </Link>
            ))}
          </div>

          <p className="text-white/40 text-xs tracking-[0.22em] uppercase mt-12">
            Attempted path: <span className="text-white/70">{location.pathname}</span>
          </p>
        </div>
      </section>
      </main>


      <Footer />
    </div>
  );
};

export default NotFound;
