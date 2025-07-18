import React from 'react';

const services = [
  "IoT Devices & Ecosystem",
  "Application Development & Services",
  "Telecom-Design & Transformation",
  "Boutique Online & Bulk Contract Manufacturing",
  "Talent Management",
];

function Services() {
  return (
    <section className="services">
      <h1>Business Wings</h1>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-box" key={idx}>{service}</div>
        ))}
      </div>
    </section>
  );
}

export default Services;