import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
    text: "Semantic & accessible web structure"
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
    text: "Modern & responsive styling"
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    text: "Interactive web functionality"
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    text: "Type-safe development"
  },
  {
    icon: <FaReact />,
    name: "React",
    text: "Component-based UI development"
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    text: "Full-stack React framework"
  },
  {
    icon: <SiNodedotjs />,
    name: "Node.js",
    text: "Server-side runtime"
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    text: "NoSQL database solutions"
  },
  {
    icon: <FaGitAlt />,
    name: "Git & GitHub",
    text: "Version control & collaboration"
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    text: "Utility-first CSS framework"
  },
  {
    icon: <SiFramer />,
    name: "Framer Motion",
    text: "Smooth animations & transitions"
  }
];

function Skills() {
  return (
    <section className="section skills" id="skills">

      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">
            MY SKILLS
          </span>

          <h2>
            Technologies I Work With
          </h2>

          <p>
            Turning ideas into reality with the right tools.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.text}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;