import PageHeader from "../components/PageHeader.jsx";
import Services from "../components/Services.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title="Services & Pricing"
        lede="Threading, cleanup, facials, waxing, hair care and spa — the full in-studio price list."
      />
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
