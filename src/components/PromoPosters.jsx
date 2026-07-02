import grandOpeningPoster from "../assets/images/promos/grand-opening-poster.jpg";
import haircutOfferPoster from "../assets/images/promos/haircut-offer-poster.jpg";
import priceListPoster from "../assets/images/promos/price-list-poster.jpg";
import Ornament from "./Ornament.jsx";
import { business } from "../data/siteData.js";
import "../css/promo-posters.css";

const posters = [
  {
    src: grandOpeningPoster,
    alt: "Grand Opening Offer — any hair length just ₹2999, choose any one hair treatment",
    tag: "Grand Opening Offer",
    caption: "Any hair length, one flat price — pick your treatment.",
  },
  {
    src: haircutOfferPoster,
    alt: "Hair cut offer ₹99 and Silver, Gold, Diamond package pricing with Renu Rani",
    tag: "Haircut & Packages",
    caption: "₹99 haircuts, plus Silver, Gold & Diamond bundles.",
  },
  {
    src: priceListPoster,
    alt: "Full RR Makeup Studio & Academy price list — threading, facial, waxing, hair & spa",
    tag: "Full Price List",
    caption: "Every service, every price — threading to bridal.",
  },
];

export default function PromoPosters() {
  return (
    <section className="promo-posters">
      <div className="container">
        <div className="services-heading">
          <p className="eyebrow">Fresh Off The Studio Wall</p>
          <h2 className="section-heading">Open Offers</h2>
          <Ornament variant="line" />
        </div>

        <div className="promo-posters-grid">
          {posters.map((poster) => (
            
             <a key={poster.tag}
              className="promo-poster-card"
              href={`https://wa.me/91${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="promo-poster-frame">
                <img src={poster.src} alt={poster.alt} loading="lazy" />
                <span className="promo-poster-shine" aria-hidden="true" />
              </div>
              <div className="promo-poster-info">
                <span className="promo-poster-tag">{poster.tag}</span>
                <p>{poster.caption}</p>
                <span className="promo-poster-cta">Book on WhatsApp →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
