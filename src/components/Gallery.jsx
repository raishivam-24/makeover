import portfolioShot from "../assets/images/portfolio-1.jpg";
import salonReception from "../assets/images/salon-reception.jpg";
import salonBridalStation1 from "../assets/images/salon-bridal-station-1.jpg";
import salonStylingStation from "../assets/images/salon-styling-station.jpg";
import salonBridalStation2 from "../assets/images/salon-bridal-station-2.jpg";
import salonSignboard from "../assets/images/salon-signboard.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import PlaceholderTile from "./PlaceholderTile.jsx";
import "../css/gallery.css";

const categories = [
  {
    title: "Reception",
    photos: [
      { src: portfolioShot, alt: "Reception desk styling by Renu Rani" },
      { src: salonReception, alt: "RR Makeup Studio reception area" },
    ],
    placeholders: [],
  },
  {
    title: "Styling Stations",
    photos: [
      { src: salonBridalStation1, alt: "Bridal styling station with mirror lighting" },
      { src: salonStylingStation, alt: "Styling station with glass partition" },
      { src: salonBridalStation2, alt: "Bridal styling station, alternate view" },
    ],
    placeholders: ["Bridal Room (styled) photo needed"],
  },
  {
    title: "Studio Ambience",
    photos: [
      { src: salonSignboard, alt: "RR Makeup Studio & Beauty Salon illuminated signboard" },
    ],
    placeholders: ["Full Salon View photo needed", "Waiting Area photo needed", "Product Display photo needed"],
  },
  {
    title: "Portfolio & Client Work",
    photos: [
      { src: portfolio2, alt: "Bridal makeup application" },
      { src: portfolio3, alt: "Event styling session" },
    ],
    placeholders: ["Team photo needed"],
  },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        {/* <p className="gallery-note">
          Real studio photos below, organized by area. The requirements document still asks for
          40+ portfolio shots plus waiting-area, product-display and full-salon views — drop them
          in and each placeholder tile becomes a real photo.
        </p> */}

        {categories.map((cat) => (
          <div className="gallery-category" key={cat.title}>
            <h3 className="gallery-category-title">{cat.title}</h3>
            <div className="gallery-grid">
              {cat.photos.map((photo) => (
                <div className="gallery-item gallery-item--real" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} />
                </div>
              ))}
              {cat.placeholders.map((label, i) => (
                <div className="gallery-item" key={`${cat.title}-ph-${i}`}>
                  <PlaceholderTile label={label} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
