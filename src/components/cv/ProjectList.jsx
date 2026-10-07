export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((proj) => (
        <div key={proj.id} className="project-card">
          <h4>{proj.name}</h4>
          <p>{proj.description}</p>
          <p className="proj-tech"><strong>Công nghệ:</strong> {proj.tech}</p>
        </div>
      ))}
    </div>
  );
}