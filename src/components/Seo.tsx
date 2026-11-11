import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG, SITE, canonicalFor } from "@/lib/site";
import { HeadContext } from "@/lib/head";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const Seo = ({ title, description, image, type = "website", jsonLd, noindex }: SeoProps) => {
  const { pathname } = useLocation();
  const url = canonicalFor(pathname);
  const ogImage = image ? (image.startsWith("http") ? image : `${SITE}${image}`) : DEFAULT_OG;

  // Pre-render: hand the head data to the server renderer.
  const ssr = useContext(HeadContext);
  if (ssr) ssr.head = { title, description, url, image: ogImage, type, noindex, jsonLd };

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", url);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:site_name", "Evenor Holdings");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    // Page JSON-LD. Remove any copy the pre-renderer baked in so it is never duplicated.
    document.head.querySelectorAll('script[data-seo="page"]').forEach((s) => s.remove());
    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "page");
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (script) script.remove();
    };
  }, [title, description, url, ogImage, type, noindex, jsonLd]);

  return null;
};

export default Seo;
