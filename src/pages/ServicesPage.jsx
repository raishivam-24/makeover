import PageHeader from "../components/PageHeader.jsx";
import Services from "../components/Services.jsx";
import Poster from "../components/Poster.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import priceListPoster from "../assets/images/poster-price-list.jpg";
import "../css/services-poster.css";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title="Services & Pricing"
        lede="Threading, cleanup, facials, waxing, hair care and spa — the full in-studio price list."
      />

      <section className="services-poster-section">
        <div className="container services-poster-wrap">
          <Poster
            src={priceListPoster}
            alt="RR Makeup Studio & Academy official price list"
            caption="Official in-studio price list — tap to view full size"
          />
        </div>
      </section>

      <Services />
      <CtaBanner
        eyebrow="Ready to book?"
        title="Reserve your slot on WhatsApp"
        lede="Send your preferred date, time and service — we'll confirm within the day."
        linkTo="/contact"
        linkLabel="Get in Touch"
      />
    </>
  );
}
