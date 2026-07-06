import ownerPhoto from "../assets/images/owner-photo.jpg";
import heroVideo from "../assets/videos/hero-video.mp4";
import { business, hero, award } from "../data/siteData.js";
import "../css/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            {hero.title}
            <span className="hero-script">{hero.script}</span>
          </h1>

          <p className="hero-tagline">{hero.tagline}</p>

          <div className="hero-actions">
            
            <a className="btn btn-solid"
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

          <p className="hero-award">
            <span className="hero-award-tag">Award-Winning</span>
            {award.title} — {award.event}
          </p>
        </div>

        <div className="hero-frame-wrap">
          <div className="hero-frame">
            <img src={ownerPhoto} alt={business.ownerName} />
          </div>
          <div className="hero-badge">
            <span className="hero-badge-initials">RR</span>
            <span className="hero-badge-label">Studio &amp; Academy</span>
          </div>
        </div>
      </div>
    </section>
  );
}