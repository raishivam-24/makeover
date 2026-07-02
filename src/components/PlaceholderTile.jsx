import "../css/placeholder-tile.css";

export default function PlaceholderTile({ label = "Photo needed" }) {
  return (
    <div className="placeholder-tile">
      <span className="placeholder-plus" aria-hidden="true">
        +
      </span>
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
