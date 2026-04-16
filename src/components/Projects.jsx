import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();
  const projectsData = [
    {
      id: 1,
      title: t.experience.jobs[0].title,
      date: t.experience.jobs[0].date,
      description: t.experience.jobs[0].description,
      tech: ['Node.js', 'MySQL', 'Express.js', 'React'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: t.experience.jobs[1].title,
      date: t.experience.jobs[1].date,
      description: t.experience.jobs[1].description,
      tech: ['React.js', 'Material-UI', 'JavaScript', 'APIs'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: t.experience.jobs[2].title,
      date: t.experience.jobs[2].date,
      description: t.experience.jobs[2].description,
      tech: ['Java', 'Spring Boot', 'Maven', 'Angular API'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="experience" className="projects section">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">
          <span className="accent"></span> {t.experience.title}
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={project.id} className="project-card glass-panel" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="project-header">
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="project-links">
                  <a href={project.github} aria-label="GitHub Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href={project.link} aria-label="External Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
