import React from 'react';
import Footer from '../components/Footer';
import projectImg from '../image/Project.jpg';


const projects = [
  {
    title: "Innovative Consultancy Website",
    description: "A modern platform for consultants to showcase services and connect with clients effectively.",
    image: "projectImg"
  },
  {
    title: "Creative Portfolio",
    description: "A personalized digital portfolio to display creative work with elegance and interactivity.",
    image: "projectImg"
  },
  {
    title: "Corporate Website",
    description: "A clean and informative corporate site to establish digital presence and boost credibility.",
    image: "projectImg"
  },
  {
    title: "E-commerce Platform",
    description: "An intuitive online shopping experience with user-friendly features and secure transactions.",
    image: "projectImg"
  },
  {
    title: "Analytical Dashboard",
    description: "A dynamic dashboard with visual insights and real-time data for decision making.",
    image: "projectImg"
  },
];

function HighlightProjects() {
  return (
    <>
      <section className="projects">
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
      <Footer />
    </>
  );
}

export default HighlightProjects;
