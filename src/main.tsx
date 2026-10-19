import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Activate the non-render-blocking Google Fonts stylesheet (see index.html).
const gfonts = document.getElementById("gfonts") as HTMLLinkElement | null;
if (gfonts) gfonts.media = "all";

createRoot(document.getElementById("root")!).render(<App />);
