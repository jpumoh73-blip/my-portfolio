import { FaArrowRight } from "react-icons/fa6";

function About() {
  return (
    <section className="section about" id="about">

      <div className="container about-container">

        <div className="about-text">

          <span className="eyebrow">
            ABOUT ME
          </span>

          <h2>
            Who I Am
          </h2>

          <p>
            I'm a software developer with a strong passion
            for creating clean, responsive and user-friendly
            web applications.
          </p>

          <p>
            I enjoy solving problems, learning new technologies
            and turning ideas into real products.
          </p>

          <div className="stats">

            <div>
              <strong>2+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Technologies</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Projects Completed</span>
            </div>

          </div>

          <a href="#skills" className="outline-button">
            More About Me
            <FaArrowRight />
          </a>

        </div>

        <div className="about-visual">

          <div className="about-card">

            <img
              src="/images/coding.jpg"
              alt="Coding"
            />

            <div className="about-note">
              Better Code
              <br />
              Bigger Dreams.
            </div>

          </div>

          <div className="journey">

            <h3>My Journey</h3>

            <div className="journey-item">
              <span>2023</span>
              <p>
                Started my coding journey with HTML,
                CSS & JavaScript
              </p>
            </div>

            <div className="journey-item">
              <span>2024</span>
              <p>
                Learned React and built my first real projects
              </p>
            </div>

            <div className="journey-item">
              <span>2025</span>
              <p>
                Started working with full-stack technologies
              </p>
            </div>

            <div className="journey-item">
              <span>Now</span>
              <p>
                Building real-world projects and growing
                my career
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;