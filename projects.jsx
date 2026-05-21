import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects";

function Projects() {
  const [projects] = useState(projectsData);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
