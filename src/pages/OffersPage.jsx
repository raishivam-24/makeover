import PageHeader from "../components/PageHeader.jsx";
import Poster from "../components/Poster.jsx";
import GrandOpeningOffer from "../components/GrandOpeningOffer.jsx";
import HaircutOffer from "../components/HaircutOffer.jsx";
import Packages from "../components/Packages.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import grandOpeningPoster from "../assets/images/poster-grand-opening.jpg";
import packagesPoster from "../assets/images/poster-packages.jpg";
import "../css/offers-page.css";

export default function OffersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Current Offers"
        title="Limited-Time Deals"
        lede="Grand opening pricing on hair treatments, a flat-rate haircut offer, and three ready-made service packages."
      />

      <section className="offers-page offers-page--posters">
        <div className="container offers-poster-grid">
          <div className="offers-poster-cell">
            <Poster
              src={grandOpeningPoster}
              alt="Grand Opening Offer — any hair length just ₹2999"
              caption="Grand Opening Offer — tap to view full size"
            />
          </div>
          <div className="offers-poster-cell">
            <Poster
              src={packagesPoster}
              alt="Hair cut offer and Silver, Gold, Diamond packages"
              caption="Haircut Offer & Packages — tap to view full size"
            />
          </div>
        </div>
      </section>

      <section className="offers-page">
        <div className="container offers-page-stack">
          <GrandOpeningOffer />
          <HaircutOffer />
          <Packages />
        </div>
      </section>

      <CtaBanner
        eyebrow="Offers won't last"
        title="Lock in your slot today"
        lede="Message the studio on WhatsApp with the offer you'd like and a preferred time."
        linkTo="/contact"
        linkLabel="Get in Touch to Book"
      />
    </>
  );
}
