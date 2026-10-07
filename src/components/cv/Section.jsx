export default function Section({ title, children }) {
  return (
    <section className="cv-section">
      <h3 className="section-title">{title}</h3>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}