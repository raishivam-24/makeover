import portfolioShot from "../assets/images/portfolio-1.jpg";
import salonReception from "../assets/images/salon-reception.jpg";
import salonBridalStation1 from "../assets/images/salon-bridal-station-1.jpg";
import salonStylingStation from "../assets/images/salon-styling-station.jpg";
import salonBridalStation2 from "../assets/images/salon-bridal-station-2.jpg";
import salonSignboard from "../assets/images/salon-signboard.jpg";
import PlaceholderTile from "./PlaceholderTile.jsx";
import { portfolioPlaceholders } from "../data/siteData.js";
import "../css/gallery.css";

const realPhotos = [
  { src: portfolioShot, alt: "Reception desk styling by Renu Rani", label: "Reception" },
  { src: salonReception, alt: "RR Makeup Studio reception area", label: "Reception Area" },
  { src: salonBridalStation1, alt: "Bridal styling station with mirror lighting", label: "Bridal Styling Station" },
  { src: salonStylingStation, alt: "Styling station with glass partition", label: "Styling Station" },
  { src: salonBridalStation2, alt: "Bridal styling station, alternate view", label: "Bridal Styling Station" },
  { src: salonSignboard, alt: "RR Makeup Studio & Beauty Salon illuminated signboard", label: "Studio Signage" },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <p className="gallery-note">
          Real studio photos below. The requirements document still asks for 40+ portfolio shots
          plus waiting-area, product-display and full-salon views — drop them in and each
          placeholder tile becomes a real photo.
        </p>

        <div className="gallery-grid">
          {realPhotos.map((photo) => (
            <div className="gallery-item gallery-item--real" key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <span className="gallery-item-label">{photo.label}</span>
            </div>
          ))}
          {portfolioPlaceholders.map((p) => (
            <div className="gallery-item" key={p.id}>
              <PlaceholderTile label={p.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
