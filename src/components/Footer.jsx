import { business, footerInfo } from "../data/siteData.js";
import rrLogo from "../assets/images/logo.png";
import "../css/footer.css";

function ScrollTopButton() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={rrLogo} alt={business.brandName} className="footer-logo-img" />
          <p className="footer-brand-name">
            {business.brandName}
            <br />
            <span>{business.studioName}</span>
          </p>

          <div className="footer-social">
  
            <a href={footerInfo.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer-social-icon"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.74 4.27 9.06 4.27 12s.01 3.26.06 4.31c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.31s-.01-3.26-.06-4.31c-.04-.87-.18-1.34-.3-1.65a2.75 2.75 0 00-.66-1.02 2.75 2.75 0 00-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8zm0 3.05a5.15 5.15 0 110 10.3 5.15 5.15 0 010-10.3zm0 1.8a3.35 3.35 0 100 6.7 3.35 3.35 0 000-6.7zm5.35-1.99a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>
            
            <a href={footerInfo.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="footer-social-icon"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>
            
            <a href={`https://wa.me/91${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="footer-social-icon"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.06h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.29c0-4.52 3.68-8.2 8.25-8.2 4.55 0 8.25 3.68 8.25 8.2 0 4.53-3.7 8.15-8.25 8.15zm4.52-6.15c-.25-.12-1.47-.72-1.69-.8-.23-.08-.4-.12-.56.13-.17.24-.65.8-.8.96-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Helpful Links</p>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#offers">Offers</a>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Contact</p>
          <a href={footerInfo.mapsUrl} target="_blank" rel="noreferrer" className="footer-contact-line">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
            </svg>
            {footerInfo.address}
          </a>
          <a href={`tel:+91${business.phones[0]}`} className="footer-contact-line">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.5 21 3 12.5 3 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1L6.6 10.8z" />
            </svg>
            {business.phones[0]}
          </a>
          <a href={`mailto:${footerInfo.email}`} className="footer-contact-line">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24l-7.4 5.55a1 1 0 01-1.2 0L4 8.24V18h16V8.24z" />
            </svg>
            {footerInfo.email}
          </a>
        </div>

        <div className="footer-col footer-hours">
          <p className="footer-col-title">Hours</p>
          {footerInfo.hours.map((h) => (
            <p className="footer-hours-line" key={h.day}>
              <span className="footer-hours-day">{h.day}:</span> {h.time}
            </p>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} {business.brandName} | All Rights Reserved
        </p>
      </div>

      <ScrollTopButton />
    </footer>
  );
}