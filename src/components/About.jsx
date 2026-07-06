import signboard from "../assets/images/about-signboard.jpg";
import awardPhoto from "../assets/images/about-award.jpg";
import Ornament from "./Ornament.jsx";
import { about, award, business } from "../data/siteData.js";
import "../css/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-photos">
          <img src={awardPhoto} alt="" className="about-photo about-photo-main" />
          <img src={signboard} alt="" className="about-photo about-photo-small" />
        </div>

        <div className="about-copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section-heading">{business.ownerName}</h2>
          <p className="about-role">{business.ownerTitle}</p>
          <p className="about-line">{about.line}</p>

          <blockquote className="about-quote">“{about.quote}”</blockquote>

          <div className="about-tags">
            {about.tags.map((tag) => (
              <span className="about-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <a className="about-cta"
            href={`https://wa.me/91${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Book an Appointment
          </a>
        </div>
      </div>

      <div className="container">
        <div className="recognition">
          <p className="eyebrow">{award.eyebrow}</p>
          <h3 className="recognition-title">{award.title}</h3>
          <Ornament />
          <div className="recognition-card">
            <p className="recognition-event">{award.event}</p>
            <p className="recognition-meta">
              {award.date} · {award.location}
            </p>
            <p className="recognition-presenter">Presented by {award.presenter}</p>
          </div>
        </div>
      </div>
    </section>
  );
}