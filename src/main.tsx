import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


const root = document.getElementById("root");
if (!root) throw new Error("Application root is missing");
// Pre-rendered pages ship real HTML in #root: hydrate it. The SPA fallback shell is empty: render.
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
