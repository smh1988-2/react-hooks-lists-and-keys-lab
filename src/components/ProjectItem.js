import React from "react";

function ProjectItem(props) {

  return props.projectInfo.map(project => {

  return ( 
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div className="technologies">
        {project.technologies.map(((tech) => <span>{tech}</span>))}
      </div>
    </div>
    );
  })
} 

export default ProjectItem;