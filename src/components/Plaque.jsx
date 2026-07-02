import "../css/plaque.css";

export default function Plaque({ children, className = "" }) {
  return (
    <div className={`plaque ${className}`}>
      <span className="plaque-corner tl" aria-hidden="true" />
      <span className="plaque-corner tr" aria-hidden="true" />
      <span className="plaque-corner bl" aria-hidden="true" />
      <span className="plaque-corner br" aria-hidden="true" />
      <div className="plaque-inner">{children}</div>
    </div>
  );
}
