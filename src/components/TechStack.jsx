import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

import "../css/TechStack.css";

const technologies = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Vite", icon: <SiVite />, color: "#a78bfa" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#5fa04e" },
  { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
];

function TechStack() {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-container">
        <motion.div
          className="tech-stack-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="tech-stack-subtitle">MY TECHNOLOGIES</span>
          <h2>Tools I Use to Build</h2>
          <p>
            Technologies I use to create modern, responsive,
            and engaging digital experiences.
          </p>
        </motion.div>

        <div className="tech-stack-grid">
          {technologies.map((tech, index) => (
            <motion.div
              className="tech-item"
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              style={{ "--tech-color": tech.color }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;