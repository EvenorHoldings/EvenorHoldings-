import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Activate the non-render-blocking Google Fonts stylesheet (see index.html).
const gfonts = document.getElementById("gfonts") as HTMLLinkElement | null;
if (gfonts) gfonts.media = "all";

const root = document.getElementById("root")!;
// Pre-rendered pages ship real HTML in #root: hydrate it. The SPA fallback shell is empty: render.
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
