import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { business } from "../data/siteData.js";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div className="footer-brand">
          <img src={logo} alt={`${business.studioName} crest`} />
          <div>
            <p className="footer-brand-name">{business.brandName}</p>
            <p className="footer-brand-sub">{business.studioName}</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Visit</Link>
          <a href={business.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={business.instagramSecondary.url} target="_blank" rel="noreferrer">
            Lehenga Studio
          </a>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} {business.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
