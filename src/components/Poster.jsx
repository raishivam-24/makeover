import { useState } from "react";
import Lightbox from "./Lightbox.jsx";
import "../css/poster.css";

export default function Poster({ src, alt, caption }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="poster-card">
        <button
          className="poster"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge: ${alt}`}
        >
          <img src={src} alt={alt} loading="lazy" />
          <span className="poster-zoom">View Full Size</span>
        </button>

        {caption && <p className="poster-caption">{caption}</p>}
      </div>

      {open && (
        <Lightbox
          src={src}
          alt={alt}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}