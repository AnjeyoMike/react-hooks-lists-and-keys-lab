/*import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array *//*}
      </div>
    </div>
  );
}

export default ProjectItem;*/
import React from 'react';

const ProjectItem = ({ name, about, technologies }) => {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;

