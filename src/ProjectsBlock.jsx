import "./ProjectsBlock.css";
import aprendaKetCover from "./assets/AprendaKet - FP.png";

const projects = [
  {
    title: "Aprenda Ket",
    description:
      "Educational platform focused on quantum computing and interactive learning.",
    cover: aprendaKetCover,
    link: "https://aprenda.quantumket.org", // ou site do projeto
  },
];

export default function ProjectsBlock() {
  return (
    <div className="projects-block">
      <h2 className="projects-title">Ongoing Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-preview">
              <img src={project.cover} alt={project.title} />
            </div>

            <div className="project-text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a
                href={project.link}
                className="project-button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}