export default function Header({ name, studentId, major, email }) {
  return (
    <header className="cv-header">
      <h1>{name}</h1>
      <p><strong>Mã sinh viên:</strong> {studentId}</p>
      <p><strong>Chuyên ngành:</strong> {major}</p>
      <p><strong>Email:</strong> {email}</p>
    </header>
  );
}