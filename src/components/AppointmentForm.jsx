import { useState } from "react";
import { business, appointmentServices } from "../data/siteData.js";
import "../css/appointment-form.css";

const initialState = { name: "", phone: "", service: appointmentServices[0], date: "", message: "" };

export default function AppointmentForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "Hi RR Makeup Studio, I'd like to book an appointment.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.date ? `Preferred date: ${form.date}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/91${business.whatsapp}?text=${text}`, "_blank", "noreferrer");
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h3 className="appointment-form-title">Request an Appointment</h3>
      <p className="appointment-form-note">
        Fill this in and it opens WhatsApp with your details ready to send — nothing is stored on
        this site.
      </p>

      <div className="form-row">
        <label htmlFor="af-name">Name</label>
        <input
          id="af-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      <div className="form-row">
        <label htmlFor="af-phone">Phone Number</label>
        <input
          id="af-phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
        />
      </div>

      <div className="form-row">
        <label htmlFor="af-service">Service</label>
        <select id="af-service" name="service" value={form.service} onChange={handleChange}>
          {appointmentServices.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="af-date">Preferred Date (optional)</label>
        <input id="af-date" name="date" type="date" value={form.date} onChange={handleChange} />
      </div>

      <div className="form-row">
        <label htmlFor="af-message">Message (optional)</label>
        <textarea
          id="af-message"
          name="message"
          rows="3"
          value={form.message}
          onChange={handleChange}
          placeholder="Anything specific we should know?"
        />
      </div>

      <button type="submit" className="btn btn-solid appointment-form-submit">
        Send via WhatsApp
      </button>
    </form>
  );
}
