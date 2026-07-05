import portfolioShot from "../assets/images/portfolio-1.jpg";
import { business, ownerProfile } from "../data/siteData.js";
import "../css/profile-card.css";

export default function OwnerProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card-photo">
        <img src={portfolioShot} alt={`${business.ownerName}, ${business.ownerTitle}`} />
        <span className="profile-card-badge">{ownerProfile.badge}</span>
      </div>

      <div className="profile-card-body">
        <p className="eyebrow">{ownerProfile.role}</p>
        <h3 className="profile-card-name">{business.ownerName}</h3>
        <p className="profile-card-credentials">{business.ownerTitle}</p>

        <p className="profile-card-quote">&ldquo;{ownerProfile.quote}&rdquo;</p>

        <div className="profile-card-chips">
          {ownerProfile.specialties.map((s) => (
            <span className="profile-chip" key={s}>
              {s}
            </span>
          ))}
        </div>

        <a
          className="btn btn-solid profile-card-cta"
          href={`https://wa.me/91${business.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          Book an Appointment
        </a>
      </div>
    </div>
  );
}
