import React, { useEffect } from "react";
import { FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  return (
    <>
      <section className="about-section">
        <div className="container">
          <h1>About Zuree Global</h1>

          <p className="intro">
            Zuree Global is a forward-thinking company driving innovation across
            Telecom, IoT, Design, and Consultancy sectors.
          </p>

          <div className="about-columns">
            <div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses through transformative technology, design
                excellence, and personalized consultancy services.
              </p>
            </div>
            <div>
              <h2>Our Vision</h2>
              <p>
                To be a global leader in delivering sustainable solutions that
                shape the connected future.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h2>Core Values</h2>
            <div className="value-cards">
              <div className="value-card">
                <FaLightbulb className="icon" />
                <h3>Innovation</h3>
                <p>
                  We foster a culture of creativity, always aiming to deliver
                  cutting-edge solutions.
                </p>
              </div>
              <div className="value-card">
                <FaUsers className="icon" />
                <h3>Collaboration</h3>
                <p>
                  We believe in building strong partnerships with clients,
                  teams, and communities.
                </p>
              </div>
              <div className="value-card">
                <FaRocket className="icon" />
                <h3>Excellence</h3>
                <p>
                  Quality and integrity are at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Our Team</h2>
            <p>
              We are a group of passionate professionals dedicated to delivering
              the best. Our team blends creativity, tech expertise, and
              strategic thinking.
            </p>
            <p>
              <i>(Team member photos and bios coming soon)</i>
            </p>
          </div>

          <div className="about-cta">
            <h3>Want to know more?</h3>
            <Link to="/get-in-touch" className="contact-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
