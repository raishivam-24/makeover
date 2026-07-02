import Ornament from "./Ornament.jsx";
import Plaque from "./Plaque.jsx";
import { testimonials } from "../data/siteData.js";
import "../css/testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="services-heading">
          <p className="eyebrow">Word of Mouth</p>
          <h2 className="section-heading">Client Testimonials</h2>
          <Ornament variant="line" />
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <Plaque key={i} className="testimonial-card">
              <span className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                {"★".repeat(t.rating)}
              </span>
              <p className="testimonial-text">{t.text}</p>
              <span className="testimonial-name">
                {t.placeholder ? "— placeholder —" : `— ${t.name}`}
              </span>
            </Plaque>
          ))}
        </div>
        <p className="services-note">
          The requirements list asks for 20+ real reviews — send them over and these cards get
          swapped for the real thing.
        </p>
      </div>
    </section>
  );
}
