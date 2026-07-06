import PageHeader from "./PageHeader.jsx";
import { testimonials } from "../data/siteData.js";
import "../css/reviews.css";

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <PageHeader
        eyebrow="Word of Mouth"
        title="Client Reviews"
        lede="A mix of bridal, party and everyday-service feedback — real reviews replace these as they come in."
      />

      <div className="container">
        <div className="reviews-grid">
          {testimonials.map((t, i) => (
            <div className="review-card" key={i}>
              <span className="review-stars" aria-label={`${t.rating} out of 5 stars`}>
                {"★".repeat(t.rating)}
              </span>
              <p className="review-text">{t.text}</p>
              <span className="review-name">
                {t.placeholder ? "— placeholder —" : `— ${t.name}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
