import React from "react";

function ProjectCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      <button>View Project</button>
    </div>
  );
}

export default ProjectCard;
