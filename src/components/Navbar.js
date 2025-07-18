import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Zuree Global"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline';
            }}
          />
          <span className="fallback-logo-text" style={{ display: 'none' }}>Zuree Global</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/get-in-touch">Get in Touch</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
