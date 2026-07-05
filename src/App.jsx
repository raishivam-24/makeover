import "./css/variables.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import StatsBar from "./components/StatsBar.jsx";
import AwardStrip from "./components/AwardStrip.jsx";
import PageHeader from "./components/PageHeader.jsx";
import About from "./components/About.jsx";
import Recognition from "./components/Recognition.jsx";
import Offers from "./components/Offers.jsx";
import Poster from "./components/Poster.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ContactLocation from "./components/ContactLocation.jsx";
import CtaBanner from "./components/CtaBanner.jsx";
import priceListPoster from "./assets/images/poster-price-list.jpg";
import { business } from "./data/siteData.js";
import "./css/services-poster.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <StatsBar />
        <AwardStrip />

        <section id="offers">
          <PageHeader
            eyebrow="Current Offers"
            title="Limited-Time Deals"
            lede="Grand opening pricing on hair treatments, a flat-rate haircut offer, and three ready-made service packages."
          />
          <Offers />
        </section>

        <section id="services">
          <PageHeader
            eyebrow="Menu"
            title="Services & Pricing"
            lede="Threading, cleanup, facials, waxing, hair care and spa — the full in-studio price list."
          />

          <div className="services-poster-section">
            <div className="container services-poster-wrap">
              <Poster
                src={priceListPoster}
                alt="RR Makeup Studio & Academy official price list"
                caption="Official in-studio price list — tap to view full size"
              />
            </div>
          </div>

          <Services />
        </section>

        <section id="about">
          <PageHeader
            eyebrow="The Studio"
            title={`About ${business.ownerName}`}
            lede={business.ownerTitle}
          />
          <About />
          <Recognition />
        </section>
        
        <section id="gallery">
          <PageHeader
            eyebrow="Portfolio"
            title="Recent Work"
            lede="A look at the studio and the work coming out of it, organized by area — growing as more shoots are added."
          />
          <Gallery />
        </section>

        {/* <Testimonials /> */}

        <CtaBanner
          eyebrow="Ready to book?"
          title="Reserve your slot on WhatsApp"
          lede="Send your preferred date, time and service — we'll confirm within the day."
          linkTo="#contact"
          linkLabel="Get in Touch"
        />

        <section id="contact">
          <PageHeader
            eyebrow="Visit the Studio"
            title="Find Us in Bilaspur"
            lede="Walk in, call, or message on WhatsApp — whichever is easiest."
          />
          <ContactLocation />
        </section>
      </main>
      <Footer />
    </>
  );
}
