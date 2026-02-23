import { useRef, useState } from "react";
import "./SkillsCarousel.css";

const skills = [
  { name: "Python", value: 88 },
  { name: "Quantum Computing", value: 65 },
  { name: "Quantum Circuits", value: 70 },
  { name: "Quantum Algorithms", value: 62 },
  { name: "Scientific Programming", value: 75 },
  { name: "Simulation", value: 72 },
  { name: "Linear Algebra", value: 78 },
  { name: "Git & GitHub", value: 80 },
];

export default function SkillsCarousel() {
  const trackRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const duplicated = [...skills, ...skills, ...skills]; // pra dar efeito infinito

  const onMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <div
        className="skills-carousel"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="skills-track">
          {duplicated.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div
                className="progress-circle"
                style={{
                  background: `conic-gradient(#5A1F6E ${skill.value * 3.6}deg, #1C0424 0deg)`,
                }}
              >
                <div className="progress-inner">
                  <span>{skill.value}%</span>
                </div>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}