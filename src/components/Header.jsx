import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { business } from "../data/siteData.js";
import "../css/header.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/offers", label: "Offers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-row">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt={`${business.studioName} crest`} className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">{business.brandName}</span>
            <span className="brand-sub">{business.studioName}</span>
          </span>
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "is-active-link" : "")}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="nav-cta"
            href={`https://wa.me/91${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Book on WhatsApp
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
