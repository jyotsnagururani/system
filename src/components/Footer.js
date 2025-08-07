import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ZUREE GLOBAL</h3>
          <p>
            A clothing brand that celebrates the artistry of design, combining
            modern style with timeless elegance.
          </p>
          <p>2025 @ Business Showcase</p>
        </div>

        <div className="footer-section">
          <h4>Important Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/business-wings">BusinessWings</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/get-in-touch">Get In Touch</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>
            India:{" "}
            <a
              href="https://www.google.com/maps/place/Udyog+Vihar+Phase+I,+Sector+20,+Gurugram,+Haryana+122016"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plot no. 23, Udyog Vihar Phase 1, Dundahera Village, Sector 20,
              Gurugram, Haryana 122022
            </a>
          </p>
          <p>
            Mobile:{" "}
            <a
              href="https://wa.me/919711411526"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 97114 11526
            </a>{" "}
            <a
              href="https://wa.me/919711308198"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 97113 08198
            </a>
          </p>
          <p>
            Email: <a href="mailto:contact@zuree.in">contact@zuree.in</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul className="social-links">
            <li>
              <a
                href="https://www.instagram.com/zureeglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919711411526"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/zureeglobal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/zureeglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/zureeglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Zuree Global. All rights reserved. |{" "}
          <Link to="/terms">Terms & Conditions</Link> |{" "}
          <Link to="/privacy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
