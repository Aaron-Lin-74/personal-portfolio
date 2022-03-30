import React from 'react';
import { projects } from '../../constants/projects';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.scss';

function Projects() {
  return (
    <section id='project' className='projects-container'>
      <h2 className='section-title'> Projects </h2>
      <div className='projects-grid-container'>
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
