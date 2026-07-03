import Hero from "../components/Hero.jsx";
import AwardStrip from "../components/AwardStrip.jsx";
import AboutTeaser from "../components/AboutTeaser.jsx";
import OffersTeaser from "../components/OffersTeaser.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <AwardStrip />
      <AboutTeaser />
      <OffersTeaser />
      <CtaBanner
        eyebrow="Full Menu"
        title="30+ services, one price list"
        lede="Threading, facials, waxing, hair care and spa — everything the studio offers, with prices."
        linkTo="/services"
        linkLabel="View Services & Pricing"
      />
      <Testimonials />
    </>
  );
}
