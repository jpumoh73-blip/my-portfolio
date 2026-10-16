import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-brand">

          <div className="logo">
            JP<span>.</span>
          </div>

          <p>
            Building digital experiences
            <br />
            one project at a time.
          </p>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-right">

          <div>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>

          <small>
            © 2026 Phinehas John. All rights reserved.
          </small>

        </div>

      </div>

    </footer>
  );
}

export default Footer;