import { Link } from "react-router-dom";
import { sourceFor } from "@/assets/images";
import ResponsiveImage from "@/components/ResponsiveImage";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  breadcrumb: { label: string; href?: string }[];
  image: string;
  height?: string;
}

const PageHero = ({ eyebrow, title, breadcrumb, image, height = "60vh" }: PageHeroProps) => {
  const source = sourceFor(image);
  return (
    <section
      className="relative w-full flex items-end bg-navy overflow-hidden"
      style={
        source
          ? { minHeight: height }
          : { minHeight: height, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
      }
    >
      {source && (
        <ResponsiveImage
          image={source}
          alt=""
          aria-hidden
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/85 to-navy/60" />
      <div className="relative container-wide pt-40 pb-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-white/70 text-[11px] tracking-[0.2em] uppercase font-medium">
          {breadcrumb.map((b, i) => (
            <span key={b.label}>
              {b.href ? (
                <Link to={b.href} className="hover:text-gold transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-gold">{b.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="mx-3 text-white/40">/</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="gold-label mb-4">{eyebrow}</p>}
        <h1 className="display-xl text-white max-w-4xl">
          {title}
        </h1>
        <div className="mt-8 h-[3px] w-16 bg-gold" />
      </div>
    </section>
  );
};

export default PageHero;
