import { Link } from "react-router-dom";
import "../css/cta-banner.css";

export default function CtaBanner({
  eyebrow,
  title,
  lede,
  linkTo,
  linkLabel,
}) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="cta-banner-title">{title}</h2>
          {lede && <p className="cta-banner-lede">{lede}</p>}
        </div>
        <Link to={linkTo} className="btn btn-solid">
          {linkLabel}
        </Link>
      </div>
    </section>
  );
}
