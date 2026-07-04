import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useLanguage } from "../../Utils/Context/LanguageContext";
import { useMode } from "../../Utils/Context/ModeContext";
import personalImg from "../../assets/personal.jpg";
import cv from "../../assets/Osama-Kamal-Full Stack Developer.pdf";
export default function Hero() {
  const { language } = useLanguage();
  const { mode } = useMode();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const texts = {
    en: {
      title: "Hi, I'm",
      name: "Osama Kamal",
      role: "MERN Stack Developer",
      desc: "I build modern, scalable, and user-friendly web applications using React, Node.js, Express, and MongoDB. Passionate about creating seamless digital experiences.",
      cv: "Download CV",
      contact: "Contact Me",
      skillsTitle: "Tech Stack",
    },
    ar: {
      title: "مرحباً، أنا",
      name: "اسامه كمال",
      role: "مطور MERN",
      desc: "أبني تطبيقات ويب حديثة وقابلة للتوسع وسهلة الاستخدام باستخدام React و Node.js و Express و MongoDB. شغوف بإنشاء تجارب رقمية سلسة.",
      cv: "تحميل السيرة الذاتية",
      contact: "تواصل معي",
      skillsTitle: "التقنيات",
    },
  };

  const techStack = [
    { icon: "⚛️", name: "React", color: "#61DAFB" },
    { icon: "🟢", name: "Node.js", color: "#339933" },
    { icon: "🍃", name: "MongoDB", color: "#47A248" },
    { icon: "🅱️", name: "Bootstrap", color: "#7952B3" },
    { icon: "⚡", name: "Express", color: "#000000" },
    { icon: "📱", name: "React Native", color: "#61DAFB" },
  ];

  return (
    <section
      className={`hero-section ${mode} ${language === "ar" ? "rtl" : "ltr"}`}
      id="home"
    >
      {/* Animated Background */}
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        <div
          className="mouse-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* Text Content */}
          <div
            className={`col-lg-6 hero-text ${isVisible ? "animate-in" : ""}`}
          >
            <div className="hero-content">
              <div className="hero-badge">
                <span className="pulse-dot"></span>
                {language === "en" ? "Available for work" : "متاح للعمل"}
              </div>

              <h1 className="hero-title">
                <span className="title-line">{texts[language].title}</span>
                <br />
                <span className="gradient-text name-animation ">
                  {/* {texts[language].name.split('').map((letter, index) => (
                    <span 
                      key={index} 
                      className="letter"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))} */}
                  {texts[language].name}
                </span>
              </h1>

              <div className="role-container">
                <h2 className="hero-role typing-effect">
                  {texts[language].role}
                </h2>
                <div className="role-underline"></div>
              </div>

              <p className="hero-desc fade-up">{texts[language].desc}</p>

              <div className="hero-buttons fade-up">
                {/* زرار تحميل الـ CV */}
                <a
                  href={cv}
                  download="Osama-Kamal-Full Stack Developer.pdf"
                  className="btn btn-primary hero-btn"
                >
                  <span>{texts[language].cv}</span>
                  <div className="btn-bg"></div>
                  <div className="btn-ripple"></div>
                </a>

                {/* زرار الاتصال */}
                <a
                  href="https://wa.me/201095836766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light hero-btn bg-black"
                >
                  <span>{texts[language].contact}</span>
                  <div className="btn-bg"></div>
                </a>
              </div>

              <div className="hero-skills fade-up">
                <h3 className="skills-title">{texts[language].skillsTitle}</h3>
                <div className="skills-container">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="skill-item"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        "--tech-color": tech.color,
                      }}
                    >
                      <div className="skill-icon">{tech.icon}</div>
                      <div className="skill-name">{tech.name}</div>
                      <div className="skill-glow"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="social-links fade-up">
                <a
                  href="https://github.com/osama-kamal"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/osama-hamroush/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="mailto:osamahamroush9@gmail.com"
                  className="social-link"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>

                <a
                  href="https://wa.me/201033928114"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div
            className={`col-lg-6 hero-visual ${isVisible ? "animate-in" : ""}`}
          >
            <div className="visual-container">
              <div className="profile-card">
                <div className="card-glow"></div>
                <div className="profile-image">
                  <div className="image-frame">
                    <img
                      src={personalImg}
                      alt="Osama Kamal"
                      className="profile-img"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                  </div>
                </div>

                <div className="floating-elements">
                  <div className="code-snippet">
                    <div className="code-header">
                      <div className="code-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="code-content">
                      <div className="code-line">
                        <span className="code-keyword">const</span>
                        <span className="code-variable"> developer</span>
                        <span className="code-operator"> = </span>
                        <span className="code-string">"awesome"</span>
                      </div>
                    </div>
                  </div>

                  <div className="stats-card">
                    <div className="stat-item">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">
                        {language === "en" ? "Projects" : "مشاريع"}
                      </div>
                    </div>
                  </div>

                  <div className="tech-orbit">
                    <div className="orbit-item orbit-1">⚛️</div>
                    <div className="orbit-item orbit-2">🟢</div>
                    <div className="orbit-item orbit-3">🍃</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator">
        <div className="scroll-text">
          {language === "en" ? "Scroll Down" : "انتقل للأسفل"}
        </div>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
    </section>
  );
}
