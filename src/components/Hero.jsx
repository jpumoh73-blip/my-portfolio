import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Phinehas John</span>
        </h1>

        <h2>Frontend React Developer</h2>

        <p>
          I build beautiful, responsive and modern web
          applications using React, JavaScript, HTML and CSS.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="/Phinehas-John-CV.pdf" className="secondary-btn" download>
            Download CV
          </a>

        </div>

      </div>

      <div className="hero-image">
        <img src="/images/developer.jpg" alt="Developer" />
      </div>

    </section>
  );
}

export default Hero;