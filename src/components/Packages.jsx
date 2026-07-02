import modelsPhoto from "../assets/images/package-models.jpg";
import Ornament from "./Ornament.jsx";
import { packages } from "../data/siteData.js";
import "../css/packages.css";

export default function Packages() {
  return (
    <div className="packages-section">
      <div className="packages-heading">
        <img src={modelsPhoto} alt="Clients styled by Renu Rani" className="packages-photo" />
        <div>
          <p className="eyebrow">Offer Packages</p>
          <h2 className="section-heading">Choose Your Package</h2>
          <Ornament variant="line" />
        </div>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div className={`package-card ${pkg.featured ? "is-featured" : ""}`} key={pkg.tier}>
            {pkg.featured && <span className="package-flag">Most Popular</span>}
            <span className="package-tier">{pkg.tier}</span>
            <span className="package-price">₹{pkg.price}</span>
            <span className="package-price-note">Only</span>
            <ul className="package-items">
              {pkg.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
