import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";
import { HeadContext, type HeadData } from "./lib/head";

/** Render one route to HTML (waiting for lazy routes) and return it with the page's head data. */
export function render(url: string): Promise<{ html: string; head?: HeadData }> {
  const ctx: { head?: HeadData } = {};
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new PassThrough();
    sink.on("data", (c) => (html += c.toString()));
    sink.on("end", () => resolve({ html, head: ctx.head }));
    const stream = renderToPipeableStream(
      <HeadContext.Provider value={ctx}>
        <StaticRouter location={url}>
          <AppRoutes queryClient={new QueryClient()} />
        </StaticRouter>
      </HeadContext.Provider>,
      {
        onAllReady() {
          stream.pipe(sink);
        },
        onShellError: reject,
        onError(err) {
          reject(err);
        },
      },
    );
  });
}
