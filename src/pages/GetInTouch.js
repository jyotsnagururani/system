import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function GetInTouch() {
  return (
    <section className="get-in-touch-section" id="get-in-touch">
      <h2>Get in Touch</h2>
      <p>We’re always happy to hear from you. Contact us via any of the methods below!</p>

      <div className="get-in-touch-options">
        <div className="contact-option">
          <FaPhoneAlt className="icon" />
          <a href="tel:+919711411526">+91 97114 11526</a>
        </div>
        <div className="contact-option">
          <FaEnvelope className="icon" />
          <a href="mailto:contact@zuree.in">contact@zuree.in</a>
        </div>
        <div className="contact-option">
          <Link to="/contact" className="contact-btn">
            Contact Form
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
