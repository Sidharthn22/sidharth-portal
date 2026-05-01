import "./Skills.css";

function Skills() {
  const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", size: "big" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", size: "small" },
  { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png", size: "small" },
  { name: "Data Analysis", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149677.png", size: "big" },

  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", size: "small" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", size: "small" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", size: "big" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: "big" },


  { name: "OOP", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png", size: "small" },
  { name: "Data Structures", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", size: "small" },
  { name: "DBMS", icon: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png", size: "small" },


  { name: "Problem Solving", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149658.png", size: "small" },
  { name: "Algorithms", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", size: "small" },
  { name: "Text Processing", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png", size: "small" },


  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", size: "small" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", size: "small" }
];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className={`skill-card ${skill.size}`} key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;