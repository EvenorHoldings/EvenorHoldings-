import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const ClosingBand = () => (
  <section id="closing-band" aria-labelledby="closing-title" className="section-home bg-navy">
    <Reveal className="container-wide">
      <h2 id="closing-title" className="home-h2 text-white">Building something? Let's talk.</h2>
      <ul className="mt-8 flex flex-col gap-3 text-lg text-white/85 sm:flex-row sm:gap-10">
        <li><a href="mailto:info@evenor.org" className="hover:underline underline-offset-4">info@evenor.org</a></li>
        <li><a href="https://wa.me/27782340831" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">WhatsApp</a></li>
        <li><a href="tel:+27782340831" className="hover:underline underline-offset-4">+27 78 234 0831</a></li>
      </ul>
      <Link to="/contact" className="btn-primary mt-10">Start a conversation</Link>
    </Reveal>
  </section>
);
export default ClosingBand;
