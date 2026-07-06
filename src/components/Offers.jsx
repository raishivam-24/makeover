import grandOpeningPoster from "../assets/images/poster-grand-opening.jpg";
import haircutOfferPoster from "../assets/images/poster-haircut-offer.jpg";
import PageHeader from "./PageHeader.jsx";
import Poster from "./Poster.jsx";
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
      </div>
    </section>
  );
}
