import grandOpeningPoster from "../assets/images/poster-grand-opening.jpg";
import haircutOfferPoster from "../assets/images/poster-haircut-offer.jpg";
import lehengaCollection from "../assets/images/salon-lehenga-2.jpg";
import PageHeader from "./PageHeader.jsx";
import Poster from "./Poster.jsx";
import { business, lehengaOffer } from "../data/siteData.js";
import "../css/offers.css";

export default function Offers() {
  return (
    <section id="offers" className="offers">
      <PageHeader
        eyebrow="Current Offers"
        title="Limited-Time Deals"
        lede="Grand opening pricing on hair treatments, a flat-rate haircut offer, and three ready-made service packages."
      />

      <div className="container">
        <div className="offers-grid">
          <Poster
            src={grandOpeningPoster}
            alt="Grand Opening Offer — any hair length just ₹2999, choose any one hair treatment"
            caption="Grand Opening Offer — tap to view full size"
          />
          <Poster
            src={haircutOfferPoster}
            alt="Hair cut offer ₹99 and Silver, Gold, Diamond package pricing with Renu Rani"
            caption="Haircut & Packages — tap to view full size"
          />
        </div>

        <div className="lehenga-offer-card">
          <div className="lehenga-offer-photo">
            <img src={lehengaCollection} alt="Rental lehenga collection at RR Studio" />
          </div>

          <div className="lehenga-offer-content">
            <p className="eyebrow">{lehengaOffer.eyebrow}</p>
            <h3 className="lehenga-offer-title">{lehengaOffer.title}</h3>
            <p className="lehenga-offer-line">{lehengaOffer.line}</p>
            <div className="lehenga-offer-price">
              <span className="lehenga-offer-price-note">{lehengaOffer.priceNote}</span>
              <span className="lehenga-offer-price-amount">₹{lehengaOffer.price}</span>
            </div>
            
            <a className="lehenga-offer-cta"
              href={`https://wa.me/91${business.whatsapp}?text=${encodeURIComponent(
                "Hi, I'd like to know more about the rental lehenga collection."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}