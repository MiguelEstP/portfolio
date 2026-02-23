import "./EducationBlock.css";

export default function EducationBlock() {
  return (
    <div className="education-block">
      <h2 className="education-title">Education</h2>

      <div className="education-item">
        <h3>Bachelor in Computer Science</h3>
        <span className="education-place">Federal University of Santa Catarina (UFSC)</span>
        <span className="education-date">2024 – Present</span>

        <p>
          Focus on quantum computing, scientific programming, and computational
          physics. Developer of the Aprenda Ket platform and involved in academic
          research projects.
        </p>
      </div>
    </div>
  );
}