import Poster from "./Poster.jsx";
import grandOpeningPoster from "../assets/images/poster-grand-opening.jpg";
import packagesPoster from "../assets/images/poster-packages.jpg";
import "../css/offers.css";

export default function Offers() {
  return (
    <div className="offers-section">
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
    </div>
  );
}