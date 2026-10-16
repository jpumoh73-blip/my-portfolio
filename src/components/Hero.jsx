import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";

import { SiTypescript, SiMongodb } from "react-icons/si";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow"></div>

      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="eyebrow">
            SOFTWARE DEVELOPER
          </span>

          <h1>
            Hi, I'm Phinehas John  👋
            <br />
            I Build Modern Web
            <span> Experiences.</span>
          </h1>

          <p>
            I'm a passionate frontend developer who turns
            ideas into fast, responsive and beautiful web
            applications using modern technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Projects
              <FaArrowRight />
            </a>

            <a href="/cv.pdf" className="secondary-button">
              Download CV
              <FaDownload />
            </a>

          </div>

          <div className="tech-stack">

            <div>
              <FaReact />
              <span>React</span>
            </div>

            <div>
              <FaJs />
              <span>JavaScript</span>
            </div>

            <div>
              <SiTypescript />
              <span>TypeScript</span>
            </div>

            <div>
              <FaHtml5 />
              <span>HTML</span>
            </div>

            <div>
              <FaCss3Alt />
              <span>CSS</span>
            </div>

            <div>
              <FaGitAlt />
              <span>Git</span>
            </div>

            <div>
              <SiMongodb />
              <span>MongoDB</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-image-area"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="hero-ring"></div>

          <img
            src="/images/profile-main.jpg"
            alt="Phinehas John"
            className="hero-image"
          />

          <div className="code-note">
            Code
            <br />
            Build
            <br />
            Improve
          </div>

          <div className="availability">
            <span></span>
            <div>
              <strong>Available for freelance</strong>
              <small>Let's build something great</small>
            </div>
            <FaArrowRight />
          </div>

        </motion.div>

      </div>

      <div className="scroll-text">
        ↓ Scroll
      </div>

    </section>
  );
}

export default Hero;