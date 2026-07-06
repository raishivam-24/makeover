import salonReception from "../assets/images/salon-reception.jpg";
import ownerPhoto from "../assets/images/owner-photo.jpg";
import salonBridalStation1 from "../assets/images/salon-bridal-station-1.jpg";
import salonStylingStation from "../assets/images/salon-styling-station.jpg";
import salonBridalStation2 from "../assets/images/salon-bridal-station-2.jpg";
import salonStylingStation2 from "../assets/images/salon-styling-station-2.jpg";
import salonStylingStation3 from "../assets/images/salon-styling-station-3.jpg";
import salonSignboard from "../assets/images/salon-signboard.jpg";
import salonFullView from "../assets/images/salon-full-view.jpg";
import salonProductDisplay from "../assets/images/salon-product-display.jpg";
import salonTreatmentRoom from "../assets/images/salon-treatment-room.jpg";
import salonLehenga1 from "../assets/images/salon-lehenga-1.jpg";
import salonLehenga2 from "../assets/images/salon-lehenga-2.jpg";
import salonJewellery from "../assets/images/salon-jewellery.jpg";
import portfolioBridal2 from "../assets/images/portfolio-bridal-2.jpg";
import portfolioBridal4 from "../assets/images/portfolio-bridal-4.jpg";
import salonInterior1 from "../assets/images/salon-interior-1.jpg";
import salonInterior2 from "../assets/images/salon-interior-2.jpg";
import salonProductCounter from "../assets/images/salon-product-counter.jpg";
import salonTrainingHeads from "../assets/images/salon-training-heads.jpg";
import salonInterior3 from "../assets/images/salon-interior-3.jpg";
import salonProductsShelf from "../assets/images/salon-products-shelf.jpg";
import "../css/gallery.css";

const categories = [
  {
    title: "Reception",
    photos: [
      ownerPhoto,
      salonReception,
      salonSignboard,
    ],
  },

  {
    title: "Salon Interior",
    photos: [
      salonInterior1,
      salonInterior2,
      salonInterior3,
    ],
  },

  {
    title: "Styling Stations",
    photos: [
      salonBridalStation1,
      salonStylingStation,
      salonBridalStation2,
      salonStylingStation2,
      salonStylingStation3,
      salonTrainingHeads,
    ],
  },

  {
    title: "Hair Care & Products",
    photos: [
      salonProductCounter,
      salonProductDisplay,
      salonProductsShelf,
    ],
  },

  {
    title: "Treatment Room",
    photos: [
      salonTreatmentRoom,
      salonFullView,
    ],
  },

  {
    title: "Bridal Collection",
    photos: [
      salonLehenga1,
      salonLehenga2,
      salonJewellery,
    ],
  },

  {
    title: "Our Work",
    photos: [
      portfolioBridal2,
      portfolioBridal4,
    ],
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="services-heading">
          <p className="eyebrow">A Peek Inside</p>
          <h2 className="section-heading">Gallery</h2>
        </div>

        {categories.map((cat) => (
          <div className="gallery-category" key={cat.title}>
            <h3 className="gallery-category-title">{cat.title}</h3>
            <div className="gallery-grid">
              {cat.photos.map((src, i) => (
                <div className="gallery-item" key={i}>
                  <img src={src} alt={cat.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
