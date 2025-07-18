import React from 'react';
import '../App.css';

function Contact() {
  return (
    <>
      <section className="contact-section">
        <h1>Contact Us</h1>
        <p className="subtitle">We'd love to hear from you</p>

        <div className="contact-container">
          {/* === Contact Info Box === */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about our products, orders, or anything else? We're here to help!</p>
            <p>Fill out the form, and our team will get back to you as soon as possible.</p>

            <h3>Visit Us</h3>
            <p><strong>USA:</strong> <a href="https://www.google.com/maps/place/2320+Ponce+De+Leon+Blvd,+Coral+Gables,+FL+33134" target="_blank" rel="noopener noreferrer">
              2320 Ponce De Leon Blvd, Coral Gables, FL 33134</a></p>
            <p><strong>India:</strong> <a href="https://www.google.com/maps/place/Udyog+Vihar+Phase+I,+Sector+20,+Gurugram,+Haryana+122016" target="_blank" rel="noopener noreferrer">
              Plot no. 23, Udyog Vihar Phase 1, Dundahera Village, Sector 20, Gurugram, Haryana 122022</a></p>

            <h3>Call Us</h3>
            <p>
              <a href="https://wa.me/919711411526" target="_blank" rel="noopener noreferrer">+91 97114 11526</a>,{' '}
              <a href="https://wa.me/919711308198" target="_blank" rel="noopener noreferrer">+91 97113 08198</a>
            </p>

            <h3>Email Us</h3>
            <p><a href="mailto:contact@zuree.in">contact@zuree.in</a></p>

            <h3>Business Hours</h3>
            <p>Monday–Friday: 9am – 6pm</p>
            <p>Saturday: 10am – 4pm</p>
            <p>Sunday: Closed</p>
          </div>

          {/* === Contact Form Box === */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />

              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />

              <label>Subject</label>
              <input type="text" placeholder="How can we help you?" />

              <label>Message</label>
              <textarea placeholder="Tell us more about your inquiry..."></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* === Footer === */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>ZUREE GLOBAL</h3>
            <p>A clothing brand that celebrates the artistry of design, combining modern style with timeless elegance.</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>
              USA: <a href="https://www.google.com/maps/place/2320+Ponce+De+Leon+Blvd,+Coral+Gables,+FL+33134" target="_blank" rel="noopener noreferrer">
                2320 Ponce De Leon Blvd, Coral Gables, FL 33134
              </a>
            </p>
            <p>
              India: <a href="https://www.google.com/maps/place/Udyog+Vihar+Phase+I,+Sector+20,+Gurugram,+Haryana+122016" target="_blank" rel="noopener noreferrer">
                Plot no. 23, Udyog Vihar Phase 1, Dundahera Village, Sector 20, Gurugram, Haryana 122022
              </a>
            </p>
            <p>
              Mobile: <a href="https://wa.me/919711411526" target="_blank" rel="noopener noreferrer">+91 97114 11526</a> 
              <a href="https://wa.me/919711308198" target="_blank" rel="noopener noreferrer">+91 97113 08198</a>
            </p>
            <p>Email: <a href="mailto:contact@zuree.in">contact@zuree.in</a></p>
          </div>
        </div>

        <p className="copyright">
          © 2025 Zuree Global. All rights reserved. | <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </footer>
    </>
  );
}

export default Contact;
