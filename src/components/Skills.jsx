const skills = [
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/FFD600" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" },
    { name: "Blender", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
];

export default function SkillsCard() {
  return (
    <div className="skills">
      <h3 className="card-title">Skills</h3>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <img src={skill.logo} alt={`${skill.name} logo`} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}