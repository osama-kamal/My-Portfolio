import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import './MySkills.css';
import { useMode } from '../../Utils/Context/ModeContext';
import { useLanguage } from '../../Utils/Context/LanguageContext';

const MySkills = () => {
  const { mode } = useMode();
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const skillsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        if (isVisible) {
          element.classList.add('visible');
        }
      });

      // Animate skill progress bars when they come into view
      const progressBars = document.querySelectorAll('.skill-progress .progress-bar');
      progressBars.forEach((bar, index) => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (!animatedSkills.has(index)) {
            const targetWidth = bar.getAttribute('aria-valuenow');
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.transition = 'width 1.5s ease-in-out';
              bar.style.width = targetWidth + '%';
            }, index * 100);
            setAnimatedSkills(prev => new Set(prev).add(index));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedSkills]);

  // Enhanced skills data with categories and icons
  const skillsData = {
    en: {
      title: "My Skills & Expertise",
      technicalTitle: "Technical Skills",
      softTitle: "Soft Skills",
      languagesTitle: "Languages",
      technicalSkills: [
        { name: "React.js", level: 90, icon: "fab fa-react", category: "Frontend" },
        { name: "Node.js", level: 85, icon: "fab fa-node-js", category: "Backend" },
        { name: "Express.js", level: 85, icon: "fas fa-server", category: "Backend" },
        { name: "MongoDB", level: 80, icon: "fas fa-database", category: "Database" },
        { name: "HTML5/CSS3", level: 95, icon: "fab fa-html5", category: "Frontend" },
        { name: "JavaScript (ES6+)", level: 90, icon: "fab fa-js-square", category: "Language" },
        { name: "TypeScript", level: 75, icon: "fas fa-code", category: "Language" },
        { name: "PostgreSQL", level: 70, icon: "fas fa-database", category: "Database" },
        { name: "Tailwind CSS", level: 85, icon: "fas fa-paint-brush", category: "Frontend" },
        { name: "RESTful APIs", level: 85, icon: "fas fa-exchange-alt", category: "Backend" },
        { name: "Git/GitHub", level: 80, icon: "fab fa-git-alt", category: "Tools" },
        { name: "Docker", level: 65, icon: "fab fa-docker", category: "DevOps" }
      ],
      softSkills: [
        { name: "Problem-solving & Debugging", icon: "fas fa-lightbulb" },
        { name: "Team Collaboration", icon: "fas fa-users" },
        { name: "Time Management", icon: "fas fa-clock" },
        { name: "Self-learning", icon: "fas fa-graduation-cap" },
        { name: "Client Communication", icon: "fas fa-comments" },
        { name: "Analytical Thinking", icon: "fas fa-brain" },
        { name: "Project Leadership", icon: "fas fa-crown" },
        { name: "Agile Methodology", icon: "fas fa-sync-alt" }
      ],
      languages: [
        { name: "Arabic", level: 100, proficiency: "(Native)", flag: "🇪🇬" },
        { name: "English", level: 70, proficiency: "(Intermediate)", flag: "🇬🇧" },
        { name: "German", level: 30, proficiency: "(Basic)", flag: "🇩🇪" }
      ]
    },
    ar: {
      title: "مهاراتي وخبراتي",
      technicalTitle: "المهارات التقنية",
      softTitle: "المهارات الناعمة",
      languagesTitle: "اللغات",
      technicalSkills: [
        { name: "React.js", level: 90, icon: "fab fa-react", category: "الواجهة الأمامية" },
        { name: "Node.js", level: 85, icon: "fab fa-node-js", category: "الخادم" },
        { name: "Express.js", level: 85, icon: "fas fa-server", category: "الخادم" },
        { name: "MongoDB", level: 80, icon: "fas fa-database", category: "قاعدة البيانات" },
        { name: "HTML5/CSS3", level: 95, icon: "fab fa-html5", category: "الواجهة الأمامية" },
        { name: "JavaScript (ES6+)", level: 90, icon: "fab fa-js-square", category: "لغة برمجة" },
        { name: "TypeScript", level: 75, icon: "fas fa-code", category: "لغة برمجة" },
        { name: "PostgreSQL", level: 70, icon: "fas fa-database", category: "قاعدة البيانات" },
        { name: "Tailwind CSS", level: 85, icon: "fas fa-paint-brush", category: "الواجهة الأمامية" },
        { name: "RESTful APIs", level: 85, icon: "fas fa-exchange-alt", category: "الخادم" },
        { name: "Git/GitHub", level: 80, icon: "fab fa-git-alt", category: "أدوات" },
        { name: "Docker", level: 65, icon: "fab fa-docker", category: "DevOps" }
      ],
      softSkills: [
        { name: "حل المشكلات والتصحيح", icon: "fas fa-lightbulb" },
        { name: "العمل الجماعي", icon: "fas fa-users" },
        { name: "إدارة الوقت", icon: "fas fa-clock" },
        { name: "التعلم الذاتي", icon: "fas fa-graduation-cap" },
        { name: "التواصل مع العملاء", icon: "fas fa-comments" },
        { name: "التفكير التحليلي", icon: "fas fa-brain" },
        { name: "قيادة المشاريع", icon: "fas fa-crown" },
        { name: "المنهجية المرنة", icon: "fas fa-sync-alt" }
      ],
      languages: [
        { name: "العربية", level: 100, proficiency: "(اللغة الأم)", flag: "🇪🇬" },
        { name: "الإنجليزية", level: 70, proficiency: "(متوسط)", flag: "🇬🇧" },
        { name: "الألمانية", level: 30, proficiency: "(مبتدئ)", flag: "🇩🇪" }
      ]
    }
  };

  const data = skillsData[language];
  const isRTL = language === 'ar';

  // Group technical skills by category
  const groupedSkills = data.technicalSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getSkillLevelColor = (level) => {
    if (level >= 90) return 'skill-expert';
    if (level >= 75) return 'skill-advanced';
    if (level >= 60) return 'skill-intermediate';
    return 'skill-beginner';
  };

  return (
    <section 
      id="skills" 
      className={`skills-section py-5 ${mode}-mode ${isRTL ? 'rtl' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      ref={skillsRef}
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title fade-in">
              <i className="fas fa-code me-3"></i>
              {data.title}
            </h2>
            <div className="title-underline"></div>
          </Col>
        </Row>
        
        <Row>
          {/* Technical Skills */}
          <Col lg={8} className="mb-4 fade-in">
            <Card className={`skills-card h-100 ${mode}-card technical-skills-card`}>
              <Card.Body>
                <h4 className="mb-4 card-title">
                  <i className="fas fa-laptop-code me-2"></i>
                  {data.technicalTitle}
                </h4>
                
                <Row>
                  {Object.entries(groupedSkills).map(([category, skills]) => (
                    <Col md={6} key={category} className="mb-4">
                      <div className="skill-category">
                        <h6 className="category-title mb-3">
                          <i className="fas fa-tag me-2"></i>
                          {category}
                        </h6>
                        {skills.map((skill, index) => (
                          <div key={index} className="skill-item mb-3">
                            <div className="skill-header d-flex justify-content-between align-items-center">
                              <div className="skill-name">
                                <i className={`${skill.icon} me-2 skill-icon`}></i>
                                <span>{skill.name}</span>
                              </div>
                              <span className={`skill-percentage ${getSkillLevelColor(skill.level)}`}>
                                {skill.level}%
                              </span>
                            </div>
                            <div className="progress skill-progress mt-2">
                              <div 
                                className={`progress-bar ${getSkillLevelColor(skill.level)}`}
                                role="progressbar"
                                style={{ width: '0%' }}
                                aria-valuenow={skill.level}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Soft Skills and Languages */}
          <Col lg={4} className="fade-in">
            {/* Soft Skills */}
            <Card className={`skills-card mb-4 ${mode}-card soft-skills-card`}>
              <Card.Body>
                <h4 className="mb-4 card-title">
                  <i className="fas fa-user-friends me-2"></i>
                  {data.softTitle}
                </h4>
                <Row>
                  {data.softSkills.map((skill, index) => (
                    <Col xs={12} key={index} className="mb-3">
                      <div className="soft-skill-item">
                        <div className="soft-skill-icon">
                          <i className={`${skill.icon} text-primary`}></i>
                        </div>
                        <span className="soft-skill-text">{skill.name}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
            
            {/* Languages */}
            <Card className={`skills-card ${mode}-card languages-card`}>
              <Card.Body>
                <h4 className="mb-4 card-title">
                  <i className="fas fa-globe me-2"></i>
                  {data.languagesTitle}
                </h4>
                {data.languages.map((lang, index) => (
                  <div key={index} className="language-item mb-3">
                    <div className="language-header d-flex justify-content-between align-items-center">
                      <div className="language-name">
                        <span className="flag me-2">{lang.flag}</span>
                        <span>{lang.name}</span>
                        <small className="proficiency ms-2">{lang.proficiency}</small>
                      </div>
                      <span className={`skill-percentage ${getSkillLevelColor(lang.level)}`}>
                        {lang.level}%
                      </span>
                    </div>
                    <div className="progress skill-progress mt-2">
                      <div 
                        className={`progress-bar ${getSkillLevelColor(lang.level)}`}
                        role="progressbar"
                        style={{ width: '0%' }}
                        aria-valuenow={lang.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Skills Summary Statistics */}
        <Row className="mt-5">
          <Col lg={12} className="fade-in">
            <Card className={`skills-card ${mode}-card stats-card`}>
              <Card.Body>
                <Row className="text-center">
                  <Col md={3} className="mb-3">
                    <div className="stat-item">
                      <i className="fas fa-code stat-icon"></i>
                      <h3 className="stat-number">12</h3>
                      <p className="stat-label">
                        {language === 'ar' ? 'تقنية متقنة' : 'Technologies Mastered'}
                      </p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="stat-item">
                      <i className="fas fa-project-diagram stat-icon"></i>
                      <h3 className="stat-number">50+</h3>
                      <p className="stat-label">
                        {language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}
                      </p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="stat-item">
                      <i className="fas fa-clock stat-icon"></i>
                      <h3 className="stat-number">3+</h3>
                      <p className="stat-label">
                        {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                      </p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="stat-item">
                      <i className="fas fa-globe stat-icon"></i>
                      <h3 className="stat-number">3</h3>
                      <p className="stat-label">
                        {language === 'ar' ? 'لغات متحدثة' : 'Languages Spoken'}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MySkills;