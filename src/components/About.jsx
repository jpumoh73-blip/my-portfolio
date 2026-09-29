import "../css/About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="/images/about.jpg"
          alt="Phinehas John"
        />
      </div>

      <div className="about-content">

        <h2>About Me</h2>

        <p>
          Hi, I'm Phinehas John, a Frontend React Developer who enjoys
          creating modern, responsive, and user-friendly websites.
          I love transforming ideas into beautiful digital experiences
          using React, JavaScript, HTML, and CSS.
        </p>

        <p>
          I'm constantly improving my skills by building real-world
          projects and exploring new technologies.
        </p>

        <a href="#projects" className="about-btn">
          View My Work
        </a>

      </div>

    </section>
  );
}

export default About;