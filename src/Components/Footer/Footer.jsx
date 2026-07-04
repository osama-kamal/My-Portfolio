import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMode } from "../../Utils/Context/ModeContext";
import { useLanguage } from "../../Utils/Context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { mode } = useMode();
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  // الترجمات للغتين
  const translations = {
    en: {
      title: "Osama Kamal",
      subtitle: "MERN Stack Developer",
      connect: "Let's Connect",
      copyright: `© ${new Date().getFullYear()} Osama Kamal. All Rights Reserved`,
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      movingText: "Osama Kamal - MERN Stack Developer"
    },
    ar: {
      title: "اسامه",
      subtitle: "مطور MERN Stack",
      connect: "لنتواصل",
      copyright: `© ${new Date().getFullYear()} اسامه كمال. جميع الحقوق محفوظة`,
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      movingText: "اسامه كمال - مطور MERN Stack"
    }
  };

  const t = translations[language];

  const socialLinks = [
    {
      href: "https://github.com/osama-kamal",
      icon: "bi bi-github",
      label: "GitHub",
      color: mode === "dark" ? "#f0f0f0" : "#333",
    },
    {
      href: "https://www.linkedin.com/in/osama-hamroush/",
      icon: "bi bi-linkedin",
      label: "LinkedIn",
      color: mode === "dark" ? "#80c8ff" : "#0077B5",
    },
    {
      href: "mailto:osamahamroush9@gmail.com",
      icon: "bi bi-envelope-fill",
      label: "Email",
      color: mode === "dark" ? "#ff8a80" : "#EA4335",
    },
    {
      href: "https://x.com/HamroushOs53067?s=09",
      icon: "bi bi-twitter-x",
      label: "Twitter",
      color: mode === "dark" ? "#80d4ff" : "#1DA1F2",
    },
  ];

  return (
    <>
      {/* Moving Text Bar */}
      <div className={`moving-text-bar ${mode}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="moving-text">
          <span>{t.movingText}</span>
          <span>{t.movingText}</span>
          <span>{t.movingText}</span>
        </div>
      </div>

      <footer
        id="footer"
        className={`footer-enhanced ${mode} ${isVisible ? "footer-visible" : ""}`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Animated Background Elements */}
        <div className="footer-bg-animation">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>

        <Container className="footer-content">
          {/* Main Footer Content */}
          <Row className="align-items-center mb-4">
            {/* Left Side - Brand */}
            <Col md={6} className={`text-center ${language === 'ar' ? 'text-md-end' : 'text-md-start'} mb-3 mb-md-0`}>
              <div className="brand-section">
                <h3 className="brand-title">
                  <span className="gradient-text">{t.title}</span>
                </h3>
                <p className="brand-subtitle">{t.subtitle}</p>
                <div className="skills-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Express</span>
                </div>
              </div>
            </Col>

            {/* Right Side - Social Links */}
            <Col md={6} className={`text-center ${language === 'ar' ? 'text-md-start' : 'text-md-end'}`}>
              <div className="social-section">
                <h5 className="social-title">{t.connect}</h5>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                      style={{
                        "--hover-color": link.color,
                        "--delay": `${index * 0.1}s`,
                      }}
                      aria-label={link.label}
                    >
                      <i className={link.icon}></i>
                      <span className="social-tooltip">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Divider */}
          <div className="footer-divider">
            <div className="divider-line"></div>
          </div>

          {/* Bottom Section */}
          <Row className="footer-bottom">
            <Col md={6} className={`text-center ${language === 'ar' ? 'text-md-end' : 'text-md-start'}`}>
              <p className="copyright">
                {t.copyright}
              </p>
            </Col>
            <Col md={6} className={`text-center ${language === 'ar' ? 'text-md-start' : 'text-md-end'}`}>
              <div className="footer-links">
                <a href="#privacy" className="footer-link">
                  {t.privacy}
                </a>
                <a href="#terms" className="footer-link">
                  {t.terms}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}