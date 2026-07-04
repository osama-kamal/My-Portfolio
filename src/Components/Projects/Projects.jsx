import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import './Projects.css';
import { useMode } from '../../Utils/Context/ModeContext';
import { useLanguage } from '../../Utils/Context/LanguageContext';
import projectsData from '../../data/projectsData';

const Projects = () => {
  const { mode } = useMode();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop    = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if ((elementTop < window.innerHeight - 100) && (elementBottom > 0)) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const data = projectsData[language];

  const getStatusVariant = (status) => {
    const statusMap = {
      'Live'           : 'success',
      'مباشر'          : 'success',
      'In Development' : 'warning',
      'قيد التطوير'    : 'warning',
      'Completed'      : 'info',
      'مكتمل'          : 'info',
    };
    return statusMap[status] || 'secondary';
  };

  return (
    <section id="projects" className={`projects-section py-5 ${mode}-mode`}>
      <Container>
        {/* Header */}
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="projects-header fade-in">
              <h2 className="section-title">{data.title}</h2>
              <p className="section-subtitle">{data.subtitle}</p>
              <div className="title-underline"></div>
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row>
          {data.projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4 fade-in" key={project.id}>
              <Card
                className={`project-card h-100 ${mode}-card`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="project-image-container">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <Badge bg={getStatusVariant(project.status)} className="status-badge">
                      {project.status}
                    </Badge>
                    <Badge bg="secondary" className="category-badge">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="project-header mb-3">
                    <h5 className="project-title">{project.shortTitle}</h5>
                    <span className="project-period">{project.period}</span>
                  </div>

                  <p className="project-description flex-grow-1">{project.shortDescription}</p>

                  {/* Tech Stack Preview */}
                  <div className="tech-stack-preview mb-3">
                    <div className="d-flex flex-wrap">
                      {project.tech.slice(0, 4).map((tech, tIndex) => (
                        <span key={tIndex} className="tech-tag-small">{tech}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="tech-tag-small more-tech">+{project.tech.length - 4}</span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions d-flex justify-content-between">
                    <div className="d-flex gap-2">
                      {project.demoLink && (
                        <Button
                          variant="outline-primary"
                          size="sm"
                          href={project.demoLink}
                          target="_blank"
                          className="action-btn"
                        >
                          <FiExternalLink size={14} className="me-1" />
                          {data.viewDemo}
                        </Button>
                      )}
                      {project.codeLink && (
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          href={project.codeLink}
                          target="_blank"
                          className="action-btn"
                        >
                          <FiGithub size={14} className="me-1" />
                          {data.viewCode}
                        </Button>
                      )}
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleProjectDetails(project.id)}
                      className="details-btn"
                    >
                      {data.moreDetails}
                      <FiArrowRight size={14} className="ms-1" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
