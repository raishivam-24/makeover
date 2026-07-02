import portfolioShot from "../assets/images/portfolio-1.jpg";
import PlaceholderTile from "./PlaceholderTile.jsx";
import { portfolioPlaceholders } from "../data/siteData.js";
import "../css/gallery.css";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <p className="gallery-note">
          One real portfolio photo is in place below. The requirements document asks for 40+
          portfolio shots — drop them in and each placeholder tile becomes a real photo.
        </p>

        <div className="gallery-grid">
          <div className="gallery-item gallery-item--real">
            <img src={portfolioShot} alt="Makeup and styling work by Renu Rani" />
          </div>
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
