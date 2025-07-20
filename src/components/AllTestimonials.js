import React from 'react';
import "../App.css";
import Footer from '../components/Footer';

const allTestimonials = [
  { id: 1, name: 'CEO A', role: 'CEO', feedback: 'Amazing support!', photo: '/images/ceo-a.jpg' },
  { id: 2, name: 'CTO B', role: 'CTO', feedback: 'Great team!', photo: '/images/cto-b.jpg' },
  { id: 3, name: 'Manager C', role: 'Manager', feedback: 'Exceptional delivery!', photo: '/images/manager-c.jpg' },
  // add more testimonials here
];

function AllTestimonials() {
  return (
    <>
    <section className="section all-testimonials">
      <h2>All Testimonials</h2>
      <div className="testimonial-list">
        {allTestimonials.map(({ id, name, role, feedback, photo }) => (
          <div key={id} className="testimonial-card">
            <img src={photo} alt={`${name} photo`} className="testimonial-photo" />
            <h4>{name}</h4>
            <p><em>{role}</em></p>
            <p>"{feedback}"</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}

export default AllTestimonials;
