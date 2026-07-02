import hairPhoto from "../assets/images/hair-treatment.jpg";
import { offers } from "../data/siteData.js";
import "../css/offer-grand-opening.css";

export default function GrandOpeningOffer() {
  const o = offers.grandOpening;
  return (
    <div className="grand-offer">
      <div className="grand-offer-copy">
        <span className="offer-badge">{o.badge}</span>
        <h2 className="grand-offer-title">{o.title}</h2>
        <p className="grand-offer-subtitle">{o.subtitle}</p>

        <div className="grand-offer-price">
          <span className="price-label">Just</span>
          <span className="price-value">₹{o.price}</span>
          <span className="price-note">{o.priceNote}</span>
        </div>

        <p className="grand-offer-choose">{o.chooseNote}</p>
        <ul className="grand-offer-list">
          {o.treatments.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <p className="grand-offer-result">{o.resultNote}</p>
      </div>

      <div className="grand-offer-visual">
        <img src={hairPhoto} alt="Healthy, frizz-free hair after treatment" />
      </div>
    </div>
  );
}
