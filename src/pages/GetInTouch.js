import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "../App.css";
import Footer from "../components/Footer";

function GetInTouch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="contact-section">
        <h1>Contact Us</h1>
        <p className="subtitle">We'd love to hear from you</p>

        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our products, orders, or anything else? We're
              here to help!
            </p>
            <p>
              Fill out the form, and our team will get back to you as soon as
              possible.
            </p>

            <h3>Visit Us</h3>
            <p>
              <strong>USA:</strong>{" "}
              <a
                href="https://www.google.com/maps/place/2320+Ponce+De+Leon+Blvd,+Coral+Gables,+FL+33134"
                target="_blank"
                rel="noopener noreferrer"
              >
                2320 Ponce De Leon Blvd, Coral Gables, FL 33134
              </a>
            </p>
            <p>
              <strong>India:</strong>{" "}
              <a
                href="https://www.google.com/maps/place/Udyog+Vihar+Phase+I,+Sector+20,+Gurugram,+Haryana+122016"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plot no. 23, Udyog Vihar Phase 1, Sector 20, Gurugram, Haryana
                122022
              </a>
            </p>

            <h3>Call Us</h3>
            <p>
              <FaPhoneAlt className="icon" />{" "}
              <a
                href="https://wa.me/919711411526"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 97114 11526
              </a>
              ,{" "}
              <a
                href="https://wa.me/919711308198"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 97113 08198
              </a>
            </p>

            <h3>Email Us</h3>
            <p>
              <FaEnvelope className="icon" />{" "}
              <a href="mailto:contact@zuree.in">contact@zuree.in</a>
            </p>

            <h3>Business Hours</h3>
            <p>Monday–Friday: 9am – 6pm</p>
            <p>Saturday: 10am – 4pm</p>
            <p>Sunday: Closed</p>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default GetInTouch;
