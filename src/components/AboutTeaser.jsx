import { Link } from "react-router-dom";
import Ornament from "./Ornament.jsx";
import Plaque from "./Plaque.jsx";
import { about, business } from "../data/siteData.js";
import "../css/about.css";

export default function AboutTeaser() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">The Studio</p>
          <h2 className="section-heading">About {business.ownerName}</h2>
          <Ornament variant="line" />
          <p className="about-text">{about.intro}</p>
          <Link to="/about" className="btn btn-line about-teaser-link">
            Read the Full Story
          </Link>
        </div>

        <div className="about-highlights">
          {about.highlights.slice(0, 2).map((h) => (
            <Plaque key={h.label} className="highlight-card">
              <span className="highlight-label">{h.label}</span>
              <span className="highlight-detail">{h.detail}</span>
            </Plaque>
          ))}
        </div>
      </div>
    </section>
  );
}
