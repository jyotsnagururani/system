import React from 'react';
import "../App.css";
import Footer from '../components/Footer';

// ✅ Import your images directly
import photo1 from '../image/Person.jpg';
import photo2 from '../image/Person.jpg';
import photo3 from '../image/Person.jpg';

const allTestimonials = [
  { id: 1, name: 'CEO A', role: 'CEO', feedback: 'Amazing support!', photo: photo1 },
  { id: 2, name: 'CTO B', role: 'CTO', feedback: 'Great team!', photo: photo2 },
  { id: 3, name: 'Manager C', role: 'Manager', feedback: 'Exceptional delivery!', photo: photo3 },
  { id: 4, name: 'CEO A', role: 'CEO', feedback: 'Amazing support!', photo: photo1 },
  { id: 5, name: 'CTO B', role: 'CTO', feedback: 'Great team!', photo: photo2 },
  { id: 6, name: 'Manager C', role: 'Manager', feedback: 'Exceptional delivery!', photo: photo3 },
  { id: 7, name: 'CEO A', role: 'CEO', feedback: 'Amazing support!', photo: photo1 },
  { id: 8, name: 'CTO B', role: 'CTO', feedback: 'Great team!', photo: photo2 },
  { id: 9, name: 'Manager C', role: 'Manager', feedback: 'Exceptional delivery!', photo: photo3 },
];

function AllTestimonials() {
  return (
    <>
      <section className="section all-testimonials">
        <h2>All Testimonials</h2>
        <div className="testimonial-list">
          {allTestimonials.map(({ id, name, role, feedback, photo }) => (
            <div key={id} className="testimonial-card">
              <img src={photo} alt={`${name}`} className="testimonial-photo" />
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
