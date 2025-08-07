import React, { useEffect } from "react";
import Footer from "../components/Footer";

const services = [
  {
    label: "IoT Devices & Ecosystem",
    description:
      "Smart IoT device development and seamless integration for industries.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
    link: null,
  },
  {
    label: "Application Development & Services",
    description:
      "Custom app solutions tailored to meet business needs across platforms.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    link: null,
  },
  {
    label: "Telecom-Design & Transformation",
    description: "Innovative telecom design and 5G transformation strategies.",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
    link: "https://zureetelecom.com",
  },
  {
  label: "Boutique Online & Bulk Contract Manufacturing",
  description: "High‑quality online manufacturing and B2B contract production.",
  image: 
       "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
  link: "https://zureediseno.com",
}
,
  {
    label: "Talent Management",
    description: "Recruitment, training, and workforce optimization services.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    link: null,
  },
];

function BusinessWings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="business-wings">
        <h1>Our Business Wings</h1>
        <div className="business-grid">
          {services.map((service, idx) => {
            const content = (
              <>
                <img
                  src={service.image}
                  alt={service.label}
                  className="service-image"
                />
                <h3>{service.label}</h3>
                <p>{service.description}</p>
              </>
            );

            return service.link ? (
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="business-card"
                key={idx}
              >
                {content}
              </a>
            ) : (
              <div className="business-card" key={idx}>
                {content}
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BusinessWings;
