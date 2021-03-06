import React from 'react';
import { ProjectType } from '../../../constants/projects';
import './ProjectCard.scss';

interface PropType {
  project: ProjectType;
}

function ProjectCard({ project }: PropType) {
  return (
    <div className='project-card'>
      <div
        className='project-image-container'
        onClick={() => window.open(project.link, '_blank')}
      >
        <img
          src={process.env.PUBLIC_URL + project.image}
          alt='project screenshot'
        />
      </div>
      <div className='project-info'>
        <h3>{project.title}</h3>
        <p className='project-card-info'>{project.description}</p>
      </div>
      <div className='project-stack'>
        <h4>Stack</h4>

        <ul className='project-tag-list'>
          {project.tags.map((tag, idx) => {
            return <li key={idx}>{tag}</li>;
          })}
        </ul>
      </div>
      <div className='project-button-container'>
        <ul className='project-link-list'>
          <li>
            <a
              className='external-link'
              href={project.link}
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </li>
          <li>
            <a
              className='external-link'
              href={project.source}
              target='_blank'
              rel='noreferrer'
            >
              Github Repo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
