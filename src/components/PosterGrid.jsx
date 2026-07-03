import Poster from "./Poster.jsx";
import "../css/poster-grid.css";

export default function PosterGrid({ items, columns = 3 }) {
  return (
    <div className="poster-grid" style={{ "--poster-columns": columns }}>
      {items.map((item) => (
        <div className="poster-grid-item" key={item.src}>
          <Poster {...item} />
        </div>
      ))}
    </div>
  );
}
