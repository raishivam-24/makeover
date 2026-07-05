import { stats } from "../data/siteData.js";
import "../css/stats-bar.css";

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container stats-bar-grid">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
