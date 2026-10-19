import { createContext } from "react";

export interface HeadData {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * During pre-rendering the server passes a mutable object here and <Seo/> writes
 * the page's head tags into it while rendering. In the browser it is null.
 */
export const HeadContext = createContext<{ head?: HeadData } | null>(null);
