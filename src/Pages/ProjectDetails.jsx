import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Carousel, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useMode } from '../Utils/Context/ModeContext';
import { useLanguage } from '../Utils/Context/LanguageContext';
import projectsData from '../data/projectsData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { mode }     = useMode();
  const { language } = useLanguage();
  const { id }       = useParams();
  const navigate     = useNavigate();
  const [project, setProject]         = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const selectedProject = projectsData[language].projects.find(p => p.id === id);
    setProject(selectedProject || null);

    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('animated');
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [id, language]);

  if (!project) {
    return (
      <Container className="project-details-loading">
        <div className="loading-spinner"></div>
      </Container>
    );
  }

  return (
    <div className={`project-details-page ${mode}-mode`}>
      <div className="project-hero">
        <Container>
          <Button
            variant="outline-light"
            className="back-button animate-on-scroll"
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left me-2"></i>
            {language === 'en' ? 'Back to Projects' : 'العودة إلى المشاريع'}
          </Button>

          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content animate-on-scroll">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-period">{project.period}</p>
              <p className="project-description">{project.description}</p>
              <div className="hero-buttons">
                {project.demoLink && (
                  <Button variant="primary" href={project.demoLink} target="_blank">
                    <i className="fas fa-external-link-alt me-2"></i>
                    {language === 'en' ? 'Live Demo' : 'عرض التجريب'}
                  </Button>
                )}
                {project.codeLink && (
                  <Button variant="outline-light" href={project.codeLink} target="_blank">
                    <i className="fab fa-github me-2"></i>
                    {language === 'en' ? 'View Code' : 'عرض الكود'}
                  </Button>
                )}
              </div>
            </Col>
            <Col lg={6} className="hero-image animate-on-scroll">
              <div className="image-container">
                <img src={project.images[0]} alt={project.title} className="main-image" />
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="project-content">
        <Container>
          {/* Gallery */}
          <Row className="project-gallery mb-5">
            <Col lg={12}>
              <h2 className="section-title animate-on-scroll">
                {language === 'en' ? 'Project Gallery' : 'معرض المشروع'}
              </h2>
              <Carousel
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                className="project-carousel animate-on-scroll"
                indicators={false}
              >
                {project.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-image-container">
                      <img
                        className="d-block w-100"
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="carousel-indicators-custom">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={index === activeIndex ? 'active' : ''}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </Col>
          </Row>

          {/* Full Description */}
          <Row className="project-full-details mb-5">
            <Col lg={8} className="mx-auto">
              <Card className={`detail-card ${mode}-card animate-on-scroll`}>
                <Card.Body className="p-4 p-md-5">
                  <h3 className="mb-4">
                    {language === 'en' ? 'Project Details' : 'تفاصيل المشروع'}
                  </h3>
                  <p>{project.fullDescription}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Features & Impact */}
          <Row className="project-features-impact">
            <Col lg={6} className="mb-4 animate-on-scroll">
              <Card className={`feature-card ${mode}-card h-100`}>
                <Card.Body className="p-4">
                  <h4 className="mb-4">
                    <i className="fas fa-star me-2"></i>
                    {language === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
                  </h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4 animate-on-scroll">
              <Card className={`impact-card ${mode}-card h-100`}>
                <Card.Body className="p-4">
                  <h4 className="mb-4">
                    <i className="fas fa-chart-line me-2"></i>
                    {language === 'en' ? 'Impact' : 'التأثير'}
                  </h4>
                  <ul>
                    {project.impact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Technologies */}
          <Row className="project-technologies">
            <Col lg={12} className="animate-on-scroll">
              <h3 className="section-title mb-4">
                {language === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'}
              </h3>
              <div className="tech-badges">
                {project.tech.map((tech, index) => (
                  <Badge key={index} className="tech-badge">{tech}</Badge>
                ))}
              </div>
            </Col>
          </Row>

          {/* CTA */}
          <Row className="project-cta mt-5">
            <Col lg={8} className="mx-auto text-center animate-on-scroll">
              <Card className={`cta-card ${mode}-card`}>
                <Card.Body className="p-5">
                  <h3 className="mb-3">
                    {language === 'en' ? 'Interested in this project?' : 'مهتم بهذا المشروع؟'}
                  </h3>
                  <p className="mb-4">
                    {language === 'en'
                      ? "Let's discuss how we can work together on similar projects"
                      : 'لنتناقش حول كيفية العمل معًا على مشاريع مماثلة'}
                  </p>
                  <Button variant="primary" size="lg" href="https://wa.me/201033928114" target="_blank">
                    {language === 'en' ? 'Get In Touch' : 'تواصل معي'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProjectDetails;
