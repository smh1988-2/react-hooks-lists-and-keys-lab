import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <ProjectItem projectInfo = {projects} key={projects.id}/>
    </div>
  );
}

export default ProjectList;
