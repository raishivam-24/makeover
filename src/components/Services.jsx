import { useState } from "react";
import serviceBridal from "../assets/images/service-bridal.jpg";
import serviceHair from "../assets/images/service-hair.jpg";
import serviceParty from "../assets/images/service-party.jpg";
import serviceSkin from "../assets/images/service-skin.jpg";
import priceListPoster from "../assets/images/poster-price-list.jpg";
import Poster from "./Poster.jsx";
import { services, serviceCategories } from "../data/siteData.js";
import "../css/services.css";

const IMAGE_MAP = {
  "service-bridal": serviceBridal,
  "service-hair": serviceHair,
  "service-party": serviceParty,
  "service-skin": serviceSkin,
};

export default function Services() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const active = serviceCategories.find((c) => c.id === activeId);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-heading">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-heading">Services</h2>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <img src={IMAGE_MAP[s.image]} alt={s.title} />
              <span className="service-label">{s.title}</span>
            </div>
          ))}
        </div>

        <div className="price-list-poster">
          <Poster
            src={priceListPoster}
            alt="RR Makeup Studio & Academy price list"
            caption="Full price list — tap to view full size"
          />
        </div>

        <div className="price-tabs" role="tablist">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={cat.id === activeId}
              className={`price-tab-btn ${cat.id === activeId ? "is-active" : ""}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="price-panel">
          {active.groups.map((group) => (
            <div className="price-group" key={group.title}>
              <h3 className="price-group-title">{group.title}</h3>
              <ul className="price-item-list">
                {group.items.map((item) => (
                  <li className="price-item" key={item.name}>
                    <span className="price-item-name">{item.name}</span>
                    <span className="price-item-dots" aria-hidden="true" />
                    <span className="price-item-value">₹{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
