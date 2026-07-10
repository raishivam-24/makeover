import awardPhoto from "../assets/images/award-central-india-season5.jpg";
import celebrityPhoto from "../assets/images/celebrity-rashmi-gupta-ramp.jpg";
import "../css/press-highlight.css";

export default function PressHighlight() {
  return (
    <section className="press-highlight">
      <div className="container press-highlight-inner">
        <div className="press-highlight-item">
          <div className="press-highlight-photo">
            <img
              src={awardPhoto}
              alt="Renu Rani receiving the Makeup Artist award at Central India Season 5"
            />
          </div>
          <p className="press-highlight-caption">
            <span className="press-highlight-tag">Award-Winning</span>
            Makeup Artist — Central India Season 5
          </p>
        </div>

        <div className="press-highlight-item">
          <div className="press-highlight-photo">
            <img
              src={celebrityPhoto}
              alt="Renu Rani with TV actress Rashmi Gupta on the ramp"
            />
          </div>
          <p className="press-highlight-caption">
            <span className="press-highlight-tag">Celebrity Work</span>
            Makeup for TV actress Rashmi Gupta
          </p>
        </div>
      </div>
    </section>
  );
}