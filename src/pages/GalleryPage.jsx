import PageHeader from "../components/PageHeader.jsx";
import Gallery from "../components/Gallery.jsx";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Recent Work"
        lede="A look at the studio and the work coming out of it — growing as more shoots are added."
      />
      <Gallery />
    </>
  );
}
