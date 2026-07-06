import logo from "../assets/images/logo.png";
import { business } from "../data/siteData.js";
import "../css/footer.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#offers", label: "Offers" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Visit" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <a href="#home" className="footer-brand">
          <img src={logo} alt="" className="footer-logo" />
          <span className="footer-brand-text">
            {business.brandName}
            <span className="footer-brand-sub">{business.studioName}</span>
          </span>
        </a>

        <nav className="footer-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={business.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={business.instagramLehenga} target="_blank" rel="noreferrer">
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
