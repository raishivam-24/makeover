import { Link } from "react-router-dom";
import Ornament from "./Ornament.jsx";
import { offers } from "../data/siteData.js";
import "../css/offers-teaser.css";

export default function OffersTeaser() {
  return (
    <section className="offers-teaser">
      <div className="container">
        <div className="services-heading">
          <p className="eyebrow">Current Offers</p>
          <h2 className="section-heading">Limited-Time Deals</h2>
          <Ornament variant="line" />
        </div>

        <div className="offers-teaser-grid">
          <Link to="/offers" className="teaser-card">
            <span className="offer-badge">{offers.grandOpening.badge}</span>
            <h3>{offers.grandOpening.title}</h3>
            <p className="teaser-price">
              ₹{offers.grandOpening.price} <span>{offers.grandOpening.priceNote}</span>
            </p>
            <span className="teaser-link">View treatment options →</span>
          </Link>

          <Link to="/offers" className="teaser-card">
            <span className="offer-badge">{offers.haircut.badge}</span>
            <h3>{offers.haircut.title}</h3>
            <p className="teaser-price">
              ₹{offers.haircut.price} <span>{offers.haircut.priceNote}</span>
            </p>
            <span className="teaser-link">See package deals →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
