import { award } from "../data/siteData.js";
import "../css/award-strip.css";

const MESSAGE = `${award.title} · ${award.event} · ${award.date} · ${award.location}`;

export default function AwardStrip() {
  const items = Array.from({ length: 6 }).map((_, i) => (
    <span className="strip-item" key={i}>
      {MESSAGE}
    </span>
  ));

  return (
    <div className="award-strip" role="presentation">
      <div className="strip-track">
        {items}
        {items}
      </div>
    </div>
  );
}
