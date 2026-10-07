export default function Button({ label, color, onClick }) {
  return (
    <button
      className="calc-btn"
      style={{ backgroundColor: color || "#4CAF50" }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}