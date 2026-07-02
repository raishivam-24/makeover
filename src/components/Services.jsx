import { useState } from "react";
import { serviceCategories } from "../data/siteData.js";
import "../css/services.css";

export default function Services() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const active = serviceCategories.find((c) => c.id === activeId);

  return (
    <section className="services">
      <div className="container">
        <div className="services-tabs" role="tablist" aria-label="Service categories">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={cat.id === activeId}
              className={`tab-btn ${cat.id === activeId ? "is-active" : ""}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="services-panel">
          {active.groups.map((group) => (
            <div className="service-group" key={group.title}>
              <h3 className="service-group-title">{group.title}</h3>
              <ul className="service-list">
                {group.items.map((item) => (
                  <li className="service-item" key={item.name}>
                    <span className="service-name">{item.name}</span>
                    <span className="service-dots" aria-hidden="true" />
                    <span className="service-price">₹{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="services-note">Prices as listed in-studio and subject to revision.</p>
      </div>
    </section>
  );
}
