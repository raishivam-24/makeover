import AppointmentForm from "./AppointmentForm.jsx";
import { business } from "../data/siteData.js";
import { contact } from "../data/contact.js";
import "../css/contact.css";

export default function ContactLocation() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`;

  return (
    <section className="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <dl className="contact-list">
            <div className="contact-row">
              <dt>Address</dt>
              <dd>
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </dd>
            </div>
            <div className="contact-row">
              <dt>Phone</dt>
              <dd>
                {contact.phones.map((p) => (
                  <a key={p} href={`tel:+91${p}`} className="contact-link">
                    {p}
                  </a>
                ))}
              </dd>
            </div>
            <div className="contact-row">
              <dt>Instagram</dt>
              <dd>
                <a href={business.instagram} target="_blank" rel="noreferrer" className="contact-link">
                  @makeover_by_renurani
                </a>
                <a
                  href={contact.instagramSecondary.url}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link contact-link-secondary"
                >
                  @{contact.instagramSecondary.handle} — {contact.instagramSecondary.label}
                </a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>Hours</dt>
              <dd className="placeholder-note">Add business hours here</dd>
            </div>
          </dl>

          <a
            className="btn btn-solid contact-cta"
            href={`https://wa.me/91${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>

        <AppointmentForm />
      </div>

      <div className="container">
        <div className="contact-map">
          <iframe title="RR Makeup Studio & Academy location" src={mapSrc} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
