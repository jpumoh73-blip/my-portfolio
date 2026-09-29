import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  return (

    <footer className="footer">

      <h2>Phinehas John</h2>

      <p>
        Frontend React Developer
      </p>
      <div className="footer-contact">
  <a
    href="https://wa.me/2348125374873"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://www.linkedin.com/in/john-peter-0385482bb"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
</div>
      <p> 📍Nigeria </p>

      <div className="footer-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

      </div>

      <p className="copyright">
        © 2026 Phinehas John. All Rights Reserved.
      </p>

    </footer>

  );
}

export default Footer;