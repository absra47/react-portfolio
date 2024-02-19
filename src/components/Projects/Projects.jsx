import React from "react";
import styles from "./Project.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectsCard";

export const Projects = () => {
  React;
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
