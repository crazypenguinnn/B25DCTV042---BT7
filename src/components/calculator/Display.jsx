export default function Display({ value }) {
  return (
    <div className="calc-display">
      {value || "0"}
    </div>
  );
}