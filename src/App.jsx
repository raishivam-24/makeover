import "./css/variables.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AwardStrip from "./components/AwardStrip.jsx";
import About from "./components/About.jsx";
import Offers from "./components/Offers.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Reviews from "./components/Reviews.jsx";
import PageHeader from "./components/PageHeader.jsx";
import CtaBanner from "./components/CtaBanner.jsx";
import ContactLocation from "./components/ContactLocation.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AwardStrip />
        <Offers />
        <Services />
        <About />
        <Gallery />
        {/* <Reviews /> */}

        <CtaBanner
          eyebrow="Ready to Book?"
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
