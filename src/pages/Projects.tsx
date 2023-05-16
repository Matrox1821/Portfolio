import React from "react";
import {Card} from "../components/Card";
import {IoDesktopSharp} from "react-icons/io5";
import {PROJECTS} from "../helpers";

export const Proyects = () => {
  return (
    <section id="projects">
      <div>
        <IoDesktopSharp className="projects-icon" />
        <h2 className="project-icon">Proyectos</h2>
      </div>
      <div className="projects-container">
        {PROJECTS.map(({image, title, description, technologies, links}) => {
          return (
            <Card
              image={image}
              title={title}
              description={description}
              technologies={technologies}
              link={links}
              key={title}
            />
          );
        })}
      </div>
    </section>
  );
};
