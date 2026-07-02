import { offers } from "../data/siteData.js";
import "../css/offer-haircut.css";

export default function HaircutOffer() {
  const o = offers.haircut;
  return (
    <div className="haircut-offer">
      <span className="offer-badge">{o.badge}</span>
      <h2 className="haircut-title">{o.title}</h2>

      <div className="haircut-price">
        <span className="haircut-price-value">₹{o.price}</span>
        <span className="haircut-price-note">Only — {o.priceNote}</span>
      </div>

      <div className="haircut-advance">
        <span>{o.advanceCut.label}</span>
        <span className="haircut-advance-price">₹{o.advanceCut.price}</span>
      </div>
    </div>
  );
}
