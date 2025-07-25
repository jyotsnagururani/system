import React from 'react';
import { Link } from 'react-router-dom';
import testimonialsImg from '../image/Person.jpg';

function Testimonials() {
  return (
    <section className="section testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        <div className="testimonial">CEO A: Amazing support!</div>
        <div className="testimonial">CTO B: Great team!</div>
        <div className="testimonial">Manager C: Exceptional delivery!</div>
      </div>
      <div className="see-all-btn">
        <Link to="/testimonials">
          <button>See All</button>
        </Link>
      </div>
    </section>
  );
}
export default Testimonials;