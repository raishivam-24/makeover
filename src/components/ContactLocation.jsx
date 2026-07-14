import AppointmentForm from "./AppointmentForm.jsx";
import { business } from "../data/siteData.js";
import { contact } from "../data/contact.js";
import "../css/contact.css";

export default function ContactLocation() {
  const mapSrc =
  "https://www.google.com/maps?q=22.0710402,82.1597024&z=17&output=embed";

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
              </dd>
            </div>
            <div className="contact-row">
              <dt>Hours</dt>
              <dd className="contact-hours">
                {contact.hours.map((h) => (
                  <span className="contact-hours-line" key={h.day}>
                    <strong>{h.day}:</strong> {h.time}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          
          <a className="btn btn-solid contact-cta"
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
          
          <a href="https://maps.app.goo.gl/MwNWiF4PzuEiDx3h6?g_st=ac"
            target="_blank"
            rel="noreferrer"
            className="contact-map-link"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}