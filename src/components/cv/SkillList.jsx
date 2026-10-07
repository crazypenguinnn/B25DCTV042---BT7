export default function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">
          {skill}
        </li>
      ))}
    </ul>
  );
}