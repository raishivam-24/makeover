import PageHeader from "../components/PageHeader.jsx";
import ContactLocation from "../components/ContactLocation.jsx";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visit the Studio"
        title="Find Us in Bilaspur"
        lede="Walk in, call, or message on WhatsApp — whichever is easiest."
      />
      <ContactLocation />
    </>
  );
}
