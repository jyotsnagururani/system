import React from 'react';
import heroImg from '../image/cat.jpg'; 

function Hero() {
  return (
    <section className="section hero">
      <div className="hero-content">
        <h1>Enabling Entity Towards Connected World</h1>
        <p>Zuree Telecom was founded in 2014 by experienced telecom professionals. Established as dependable partner for leading service provider in USA and looks to expand across fast growing markets in Asia.</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Connected World" />
      </div>
    </section>
  );
}

export default Hero;
