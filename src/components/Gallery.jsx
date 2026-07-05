import portfolioShot from "../assets/images/portfolio-1.jpg";
import salonReception from "../assets/images/salon-reception.jpg";
import salonBridalStation1 from "../assets/images/salon-bridal-station-1.jpg";
import salonStylingStation from "../assets/images/salon-styling-station.jpg";
import salonBridalStation2 from "../assets/images/salon-bridal-station-2.jpg";
import salonStylingStation2 from "../assets/images/salon-styling-station-2.jpg";
import salonStylingStation3 from "../assets/images/salon-styling-station-3.jpg";
import salonStylingStation4 from "../assets/images/salon-styling-station-4.jpg";
import salonStylingStation5 from "../assets/images/salon-styling-station-5.jpg";
import salonTreatmentRoom from "../assets/images/salon-treatment-room.jpg";
import salonSignboard from "../assets/images/salon-signboard.jpg";
import salonFullView from "../assets/images/salon-full-view.jpg";
import salonProductDisplay from "../assets/images/salon-product-display.jpg";
import salonProductDisplay2 from "../assets/images/salon-product-display-2.jpg";
import portfolioBridal2 from "../assets/images/portfolio-bridal-2.jpg";
import portfolioBridal4 from "../assets/images/portfolio-bridal-4.jpg";
import salonLehenga1 from "../assets/images/salon-lehenga-1.jpg";
import salonLehenga2 from "../assets/images/salon-lehenga-2.jpg";
import salonJewellery from "../assets/images/salon-jewellery.jpg";
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
      { src: salonStylingStation2, alt: "Styling station with mirrored drawers" },
      { src: salonStylingStation3, alt: "Styling station close-up with brushes and products" },
      { src: salonStylingStation4, alt: "Styling station with mannequin heads and awards" },
      { src: salonStylingStation5, alt: "Styling station with curtained window and product shelf" },
    ],
    placeholders: [],
  },
  {
    title: "Facial & Treatment Room",
    photos: [
      { src: salonTreatmentRoom, alt: "Facial and treatment room with reclining chair" },
    ],
    placeholders: [],
  },
  {
    title: "Studio Ambience",
    photos: [
      { src: salonSignboard, alt: "RR Makeup Studio & Beauty Salon illuminated signboard" },
      { src: salonFullView, alt: "Full view of the styling area with multiple stations" },
      { src: salonProductDisplay, alt: "Hair care product display on green accent wall" },
      { src: salonProductDisplay2, alt: "Professional hair care product lineup on marble counter" },
    ],
    placeholders: ["Waiting Area photo needed"],
  },
  {
    title: "Bridal Wear & Jewellery",
    photos: [
      { src: salonLehenga1, alt: "Bridal lehenga on display" },
      { src: salonLehenga2, alt: "Lehenga collection rack" },
      { src: salonJewellery, alt: "Bridal jewellery sets on display" },
    ],
    placeholders: [],
  },
  {
    title: "Portfolio & Client Work",
    photos: [
      { src: portfolioBridal2, alt: "Party makeup and hairstyling by Renu Rani" },
      { src: portfolioBridal4, alt: "Bridal makeup and jewellery styling by Renu Rani" },
    ],
    placeholders: ["Portfolio photo needed", "Portfolio photo needed", "Team photo needed"],
  },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <p className="gallery-note">
          Real studio photos below, organized by area. The requirements document still asks for
          40+ portfolio shots plus waiting-area, product-display and full-salon views — drop them
          in and each placeholder tile becomes a real photo.
        </p>

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
