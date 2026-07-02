import award1 from "../assets/images/award-1.jpg";
import Ornament from "./Ornament.jsx";
import Plaque from "./Plaque.jsx";
import { award } from "../data/siteData.js";
import "../css/recognition.css";

export default function Recognition() {
  return (
    <section id="recognition" className="recognition">
      <div className="container recognition-grid">
        <div className="recognition-copy">
          <p className="eyebrow">Recognition</p>
          <h2 className="section-heading">{award.title}</h2>
          <Ornament variant="crest" />
          <Plaque className="award-plaque">
            <p className="award-event">{award.event}</p>
            <p className="award-meta">
              {award.date} · {award.location}
            </p>
            <p className="award-presenter">Presented by {award.presenter}</p>
          </Plaque>
        </div>

        <div className="recognition-photos">
          <img src={award1} alt="Renu Rani receiving the Best Make-up Artist award on stage" />
        </div>
      </div>
    </section>
  );
}
