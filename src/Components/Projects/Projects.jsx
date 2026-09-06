import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { useMode } from '../../Utils/Context/ModeContext';
import { useLanguage } from '../../Utils/Context/LanguageContext';
import projectsData from '../../data/projectsData';

const Projects = () => {
  const { mode } = useMode();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const data = projectsData[language];

  const handleProjectDetails = (projectId) => navigate(`/project/${projectId}`);

  return (
    <section id="portfolio" className="pf-section">
      <Container>
        <div className="pf-section-head" data-aos="fade-up">
          <div className="section-label"><i className="fas fa-layer-group"></i> {language === 'en' ? 'Our Work' : 'أعمالنا'}</div>
          <h2>{data.title.split(' ')[0]} <span className="gradient-text">{data.title.split(' ').slice(1).join(' ')}</span></h2>
          <p className="section-sub">{data.subtitle}</p>
          <div className="accent-line"></div>
        </div>

        <div className="pf-grid">
          {data.projects.map((project, index) => (
            <div key={project.id} className="pf-card project-item" data-aos="fade-up" data-aos-delay={(index % 3) * 120}>
              <div className="pf-card-img">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="pf-card-hover">
                  <a onClick={() => handleProjectDetails(project.id)} className="pf-hover-btn primary" style={{cursor:'pointer'}}>
                    <i className="fas fa-eye"></i> {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
                  </a>
                  {project.demoLink ? (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="pf-hover-btn secondary">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  ) : project.codeLink ? (
                    <a href={project.codeLink} target="_blank" rel="noreferrer" className="pf-hover-btn secondary">
                      <i className="fab fa-github"></i>
                    </a>
                  ) : null}
                </div>
                <div className="pf-card-badge">{project.category}</div>
                <div className="pf-card-num">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="pf-card-body">
                <h3>{project.shortTitle}</h3>
                <p>{project.shortDescription}</p>
                <a onClick={() => handleProjectDetails(project.id)} className="pf-card-link" style={{cursor:'pointer'}}>
                  {data.moreDetails} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
