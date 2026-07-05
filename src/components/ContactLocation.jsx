import AppointmentForm from "./AppointmentForm.jsx";
import { business } from "../data/siteData.js";
import "../css/contact.css";

export default function ContactLocation() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery
  )}&output=embed`;

  return (
    <section className="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <dl className="contact-list">
            <div className="contact-row">
              <dt>Address</dt>
              <dd>
                {business.address.line1}, {business.address.line2}
                <br />
                {business.address.city}
              </dd>
            </div>
            <div className="contact-row">
              <dt>Phone</dt>
              <dd>
                {business.phones.map((p) => (
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
                  href={business.instagramSecondary.url}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link contact-link-secondary"
                >
                  @{business.instagramSecondary.handle} — {business.instagramSecondary.label}
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
        <div className="contact-map contact-map--full">
          <iframe
            title="RR Makeup Studio & Academy location"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
