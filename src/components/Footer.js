import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
<footer className="footer">
  <div className="footer-left">
    <h3>Zuree Studio</h3>
    <p>2025 @ Business Showcase</p>
  </div>

  <div className="footer-center">
    <h4>Important Links</h4>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/services">Our Services</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </div>

  <div className="footer-right">
    <h4>Connect</h4>
    <ul>
    <li>
      <a href="https://www.instagram.com/zureeglobal" target="_blank" rel="noopener noreferrer">
        <FaInstagram /> Instagram
      </a>
    </li>
    <li>
      <a href="https://wa.me/919711411526" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp /> WhatsApp
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/zureeglobal/" target="_blank" rel="noopener noreferrer">
        <FaFacebook /> Facebook
      </a>
    </li>
    <li>
      <a href="https://twitter.com/zureeglobal" target="_blank" rel="noopener noreferrer">
        <FaTwitter /> Twitter
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/company/zureeglobal" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> LinkedIn
      </a>
    </li>
  </ul>
</div>

</footer>
  );
}
export default Footer;