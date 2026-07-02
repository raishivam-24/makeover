import PageHeader from "../components/PageHeader.jsx";
import About from "../components/About.jsx";
import Recognition from "../components/Recognition.jsx";
import { business } from "../data/siteData.js";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Studio"
        title={`About ${business.ownerName}`}
        lede={business.ownerTitle}
      />
      <About />
      <Recognition />
    </>
  );
}
