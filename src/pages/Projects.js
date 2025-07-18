import React from 'react';

const projects = [
  {
    title: "Innovative Consultancy Website",
    description: "A modern platform for consultants to showcase services and connect with clients effectively.",
    image: "https://via.placeholder.com/400x250?text=Consultancy+Website"
  },
  {
    title: "Creative Portfolio",
    description: "A personalized digital portfolio to display creative work with elegance and interactivity.",
    image: "https://via.placeholder.com/400x250?text=Creative+Portfolio"
  },
  {
    title: "Corporate Website",
    description: "A clean and informative corporate site to establish digital presence and boost credibility.",
    image: "https://via.placeholder.com/400x250?text=Corporate+Website"
  },
  {
    title: "E-commerce Platform",
    description: "An intuitive online shopping experience with user-friendly features and secure transactions.",
    image: "https://via.placeholder.com/400x250?text=E-commerce+Platform"
  },
  {
    title: "Analytical Dashboard",
    description: "A dynamic dashboard with visual insights and real-time data for decision making.",
    image: "https://via.placeholder.com/400x250?text=Analytical+Dashboard"
  },
];

function HighlightProjects() {
  return (
    <section className="highlight-projects">
      <h2>Highlight Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightProjects;
