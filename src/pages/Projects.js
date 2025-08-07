import React, { useEffect } from "react";
import Footer from "../components/Footer";
import projectImage from "../image/Project.jpg";

const projects = [
  {
    title: "Innovative Consultancy Website",
    description:
      "A modern platform for consultants to showcase services and connect with clients effectively.",
    src: projectImage,
  },
  {
    title: "Creative Portfolio",
    description:
      "A personalized digital portfolio to display creative work with elegance and interactivity.",
    src: projectImage,
  },
  {
    title: "Corporate Website",
    description:
      "A clean and informative corporate site to establish digital presence and boost credibility.",
    src: projectImage,
  },
  {
    title: "E-commerce Platform",
    description:
      "An intuitive online shopping experience with user-friendly features and secure transactions.",
    src: projectImage,
  },
  {
    title: "Analytical Dashboard",
    description:
      "A dynamic dashboard with visual insights and real-time data for decision making.",
    src: projectImage,
  },
];

function HighlightProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="projects">
        <h2>Highlight Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <img src={project.src} alt={project.title} />
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
