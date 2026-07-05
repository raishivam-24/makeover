import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { business } from "../data/siteData.js";
import "../css/header.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#offers", label: "Offers" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Visit" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-row">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt={`${business.studioName} crest`} className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">{business.brandName}</span>
            <span className="brand-sub">{business.studioName}</span>
          </span>
        </a>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={activeId === link.href.slice(1) ? "is-active-link" : ""}
            >
              {link.label}
            </a>
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
