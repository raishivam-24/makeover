import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { business } from "../data/siteData.js";
import "../css/header.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#offers", label: "Offers" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  // { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-row">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="brand-mark" />
          <span className="brand-name">
            {business.brandName}
            <span className="brand-sub">{business.studioName}</span>
          </span>
        </a>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={`https://wa.me/91${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </nav>

        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
