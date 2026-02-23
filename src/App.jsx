import "./App.css";
import sphereImage from "./assets/sphere.png";
import LogoQ from "./assets/logo.png";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github-icon-2.svg";
import lattesIcon from "./assets/lattes.png";
import SkillsCarousel from "./SkillsCarousel";
import EducationBlock from "./EducationBlock";
import ArticlesBlock from "./ArticlesBlock";
import ProjectsBlock from "./ProjectsBlock";
import ContactBlock from "./ContactBlock";
import FOTO from "./assets/eu.jpg";
import Typewriter from "./Typewriter";

function App() {
  return (
    <>
      <header>
        <div className="header-inner">
          <div>
            <img src={LogoQ} alt="Sphere" className="logo-image" />
          </div>
          <nav>
            <a href="#about"><strong>About me</strong></a>
            <a href="#skills"><strong>Skills</strong></a>
            <a href="#education"><strong>Education</strong></a>
            <a href="#articles"><strong>Articles</strong></a>
            <a href="#projects"><strong>Projects</strong></a>
            <a href="#contact" className="contact-cta"><strong>Contact Me</strong></a>
          </nav>
        </div>
      </header>

      <section className="section hero">
        <div className="section-inner hero-content">
          <div>
            <h1>
              <br />
              <Typewriter
                text="Hi, I’m Miguel, a Quantum Software Developer."
                speed={100}
                pause={1200}
              />
            </h1>
          </div>
            <div className="card-sphere">
              <img src={sphereImage} alt="Sphere" className="hero-image" />
            </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-inner about">
          <div className="about-photo card">
            <img src={FOTO} alt="Miguel" className="hero-image" />
          </div>

          <div className="about-text">
            <h2>Who am I</h2>

            <div className="about-text-content">
              <p>
              I’m a Computer Science student at UFSC and a software developer focused on quantum computing and educational technology. I work mainly with Python and scientific programming, and I’m one of the developers of Aprenda Ket, an educational platform aimed at democratizing access to quantum computing. 
              </p>
              <p>
                My interests include quantum algorithms, quantum information, cryptography, and simulation. I enjoy turning complex concepts into clear, accessible learning materials and practical tools, and I’m always looking to learn, research, and contribute to impactful projects in the field.
              </p>
            </div>

            <div className="about-links">
              <a href="https://www.linkedin.com/in/miguel-estivalet-pinto-7a2075267" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>

              <a href="https://github.com/MiguelEstP" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>

              <a href="http://lattes.cnpq.br/2134987174583495" target="_blank" rel="noreferrer">
                <img src={lattesIcon} alt="Lattes" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-inner">

          <div className="skills-block">
            <SkillsCarousel />
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-inner">
          <EducationBlock />
        </div>
      </section>

      <section id="articles" className="section">
        <div className="section-inner">
          <ArticlesBlock />
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-inner">
          <ProjectsBlock />
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-inner">
          <ContactBlock />
        </div>
      </section>

      <footer className="footer">
        <div className="section-inner">
          <p>© 2026 Miguel Estivalet</p>
        </div>
      </footer>
    </>
  );
}

export default App;