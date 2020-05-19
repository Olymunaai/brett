import React, { Fragment } from "react";
import project from "../components/project";

const Projects = () => {
  console.log(project);
  return (
    <Fragment>
      <header>
        <div class="pageContainer projectsContainer">
          {project.map((project) => (
            <div class="project projectDiv">
              <a target="_blank" href={project.link}>
                <img src={project.img} alt="project" />
                <div class="imgOverlay"></div>
                <h3>{project.name}</h3>
                <p>{project.info}</p>
              </a>
            </div>
          ))}
        </div>
      </header>
    </Fragment>
  );
};

export default Projects;
