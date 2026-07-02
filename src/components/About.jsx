import Plaque from "./Plaque.jsx";
import { about } from "../data/siteData.js";
import "../css/about.css";

export default function About() {
  return (
    <section className="about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="about-text">{about.intro}</p>
          <p className="about-text about-mission">{about.mission}</p>
          <p className="about-note">
            Note for the client: this introduction is placeholder copy drafted to match your
            studio's tone — swap in your real story, founding year and mission whenever it's
            ready.
          </p>
        </div>

        <div className="about-highlights">
          {about.highlights.map((h) => (
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
