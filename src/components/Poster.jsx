import { useState } from "react";
import Lightbox from "./Lightbox.jsx";
import "../css/poster.css";

export default function Poster({ src, alt, caption }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="poster" onClick={() => setOpen(true)} aria-label={`Enlarge: ${alt}`}>
        <span className="poster-corner tl" aria-hidden="true" />
        <span className="poster-corner tr" aria-hidden="true" />
        <span className="poster-corner bl" aria-hidden="true" />
        <span className="poster-corner br" aria-hidden="true" />
        <img src={src} alt={alt} loading="lazy" />
        <span className="poster-zoom" aria-hidden="true">
          View Full Size
        </span>
      </button>
      {caption && <p className="poster-caption">{caption}</p>}
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
