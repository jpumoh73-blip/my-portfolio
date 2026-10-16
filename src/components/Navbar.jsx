import { useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          PJ<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-menu mobile-open" : "nav-menu"}>
          <a href="#home" className="active" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <FaArrowUpRightFromSquare />
        </a>

        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
