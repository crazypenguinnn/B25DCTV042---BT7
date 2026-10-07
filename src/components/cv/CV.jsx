import Header from "./Header";
import Section from "./Section";
import SkillList from "./SkillList";
import ProjectList from "./ProjectList";

export default function CV() {
  const skillsData = [
    "HTML5, CSS3, JavaScript (ES6+)",
    "ReactJS (Component, Props, State, Hooks)",
    "Responsive Web Design",
    "Git & GitHub"
  ];

  const projectsData = [
    {
      id: 1,
      name: "Trang cá nhân & Máy tính JavaScript",
      description: "Thực hành DOM, addEventListener, đổi màu nền và xử lý tính toán.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      id: 2,
      name: "Virtual Calculator & CV bằng React",
      description: "Xây dựng SPA, tách nhỏ component, truyền props và state với React Vite.",
      tech: "ReactJS, Vite, CSS Grid"
    }
  ];

  return (
    <div className="cv-wrapper">
      <h2 className="section-heading">Bài 2: Trang CV bằng React</h2>
      <Header
        name="Dương Xuân Khôi"
        studentId="B25DCTV042"
        major="Trí tuệ nhân tạo và Vạn vật kết nối (AIoT) - PTIT"
        email="khoidx.b25@ptit.edu.vn"
      />
      <Section title="Mục tiêu nghề nghiệp">
        <p>
          Trở thành lập trình viên Frontend chuyên sâu về ReactJS, làm chủ kiến trúc SPA và xây dựng các sản phẩm công nghệ tối ưu hiệu năng.
        </p>
      </Section>
      <Section title="Kỹ năng chuyên môn">
        <SkillList skills={skillsData} />
      </Section>
      <Section title="Dự án thực hành">
        <ProjectList projects={projectsData} />
      </Section>
    </div>
  );
}