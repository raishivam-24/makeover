import portfolioShot from "../assets/images/portfolio-1.jpg";
import Ornament from "./Ornament.jsx";
import { business, award } from "../data/siteData.js";
import "../css/hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{business.studioName} · Bilaspur</p>
          <h1 className="hero-title">
            Every bride, every face,
            <br />
            made <span className="hero-script">royal</span>.
          </h1>
          <Ornament variant="line" />
          <p className="hero-lede">{business.tagline}</p>
          <div className="hero-actions">
            <a
              className="btn btn-solid"
              href={`https://wa.me/91${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Book an Appointment
            </a>
            <a className="btn btn-line" href={`tel:+91${business.phones[0]}`}>
              Call {business.phones[0]}
            </a>
          </div>

          <div className="hero-award">
            <span className="hero-award-tag">Award-winning</span>
            <span>
              {award.title} — {award.event}
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <img src={portfolioShot} alt="Bridal makeup artistry by Renu Rani" />
          </div>
          <div className="hero-frame-caption">
            <span className="brand-script">RR</span>
            <span>Studio &amp; Academy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
