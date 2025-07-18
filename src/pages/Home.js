import React from 'react';
import Footer from '../components/Footer';
import '../App.css';

const Home = () => (
  <>

    <section className="hero">
      <div className="hero-text">
        <h1>Enabling Entity Towards Connected World</h1>
        <p>
          Zuree Telecom was founded in 2014 by experienced telecom professionals.
          Established as dependable partner for leading service provider in USA
          and looks to expand across fast growing markets in Asia.
        </p>
      </div>
      <img src="/images/hero-image.jpg" alt="Zuree Company" />
    </section>

    <section className="services-overview">
      <h2>Exploring our tailored services for your business</h2>
      <img src="/images/quality-service.jpg" alt="Quality" />
    </section>

    <section className="business-wings">
      <h2>Business Wings</h2>
      <div className="wings-grid">
        <div>IoT Devices & Ecosystem</div>
        <div>Application Development & Services</div>
        <div>Telecom-Design & Transformation</div>
        <div>Boutique Online & Bulk Contract Manufacturing</div>
        <div>Talent Management</div>
      </div>
    </section>

    <section className="highlight-projects">
      <h2>Highlight Projects</h2>
      <div className="projects-grid">
        <div>
          <img src="/images/consultancy.jpg" alt="Consultancy" />
          <p>Innovative Consultancy Website</p>
          <a href="/projects">Learn More</a>
        </div>
        <div>
          <img src="/images/portfolio.jpg" alt="Portfolio" />
          <p>Creative Portfolio</p>
          <a href="/projects">Learn More</a>
        </div>
        <div>
          <img src="/images/corporate.jpg" alt="Corporate" />
          <p>Corporate Website</p>
          <a href="/projects">Learn More</a>
        </div>
        <div>
          <img src="/images/ecommerce.jpg" alt="E-commerce" />
          <p>E-Commerce Platform</p>
          <a href="/projects">Learn More</a>
        </div>
        <div>
          <img src="/images/dashboard.jpg" alt="Dashboard" />
          <p>Analytical Dashboard</p>
          <a href="/projects">Learn More</a>
        </div>
      </div>
      <div className="center-btn">
        <a href="/projects" className="btn">View All Projects</a>
      </div>
    </section>

    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        <div>
          <h4>Company A</h4>
          <p>Zuree delivers on its promises. Great service!</p>
        </div>
        <div>
          <h4>Company B</h4>
          <p>Very innovative and customer focused.</p>
        </div>
        <div>
          <h4>Company C</h4>
          <p>True professionals in telecom and development.</p>
        </div>
      </div>
      <div className="center-btn">
        <a href="/testimonials" className="btn">See All</a>
      </div>
    </section>

    <Footer />
  </>
);

export default Home;
