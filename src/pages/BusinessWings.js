import React from 'react';
import Footer from '../components/Footer';

const services = [
  {
    label: "IoT Devices & Ecosystem",
    link: null,
  },
  {
    label: "Application Development & Services",
    link: null,
  },
  {
    label: "Telecom-Design & Transformation",
    link: "https://zureediseno.com",
  },
  {
    label: "Boutique Online & Bulk Contract Manufacturing",
    link: "https://zureetelecom.com",
  },
  {
    label: "Talent Management",
    link: null,
  },
];

function BusinessWings() {
  return (
    <>
      <section className="services">
        <h1>Business Wings</h1>
        <div className="services-grid">
          {services.map((service, idx) => (
            service.link ? (
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="service-box"
                key={idx}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
              {service.label}
              </a>

            ) : (
              <div className="service-box" key={idx}>
                {service.label}
              </div>
            )
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BusinessWings;
