import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import image from "../image/logo.png";

function Navbar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-top">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={image} alt="Zuree Global" />
          </Link>
        </div>

        {/* Nav links + Mode toggle inline */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/system" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/business-wings" onClick={closeMenu}>
              Business Wings
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/get-in-touch" onClick={closeMenu}>
              Get In Touch
            </Link>
          </li>

          {/* Theme toggle as last item */}
          <li>
            <button
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              className={`theme-toggle-btn ${darkMode ? "dark" : "light"}`}
              aria-label="Toggle Theme"
              title="Toggle Theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="right-icons">
          <div className="hamburger" onClick={toggleMenu} title="Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
