import Ornament from "./Ornament.jsx";
import "../css/page-header.css";

export default function PageHeader({ eyebrow, title, lede }) {
  return (
    <div className="page-header">
      <div className="container page-header-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-heading">{title}</h2>
        <Ornament />
        {lede && <p className="page-header-lede">{lede}</p>}
      </div>
    </div>
  );
}
