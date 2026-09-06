import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useLanguage } from "../../Utils/Context/LanguageContext";
import { useMode } from "../../Utils/Context/ModeContext";
import orcaHeroImg from "../../assets/orca-hero.png";
import personalImg from "../../assets/Personal.jpg";

export default function Hero() {
  const { language } = useLanguage();
  const { mode } = useMode();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const texts = {
    en: {
      eyebrow: "Osama Kamal — MERN Stack Developer",
      title1: "We Build",
      title2: "Premium Digital",
      title3: "Experiences",
      desc: "Custom web platforms, enterprise systems, and modern SaaS products crafted with precision and passion for forward-thinking businesses.",
      cta1: "Explore Our Work",
      cta2: "View My Work",
      name: "Osama Kamal",
      role: "MERN Stack Developer",
      stat1: "Projects",
      stat2: "Users Served",
      stat3: "Years Experience",
    },
    ar: {
      eyebrow: "أسامة كمال — مطور MERN",
      title1: "نبني",
      title2: "تجارب رقمية",
      title3: "متميزة",
      desc: "منصات ويب مخصصة وأنظمة مؤسسية ومنتجات SaaS حديثة مصنوعة بدقة وشغف للأعمال الطموحة.",
      cta1: "استكشف أعمالي",
      cta2: "عرض أعمالي",
      name: "أسامة كمال",
      role: "مطور MERN",
      stat1: "مشروع",
      stat2: "مستخدم",
      stat3: "سنوات خبرة",
    },
  };
  const t = texts[language];

  return (
    <section className="pf-hero" id="home">
      <div className="pf-hero-bg">
        <div className="pf-hero-orb pf-orb-1"></div>
        <div className="pf-hero-orb pf-orb-2"></div>
        <div className="pf-hero-grid"></div>
      </div>

      <div className="container pf-hero-inner">
        <div className="pf-hero-text" data-aos="fade-right">
          <div className="pf-eyebrow">
            <span className="pf-eyebrow-dot"></span>
            <span>{language === "en" ? "Available for new projects" : "متاح لمشاريع جديدة"}</span>
            <span className="pf-eyebrow-dot"></span>
          </div>

          <h1>
            {t.title1} <br />
            <span className="pf-gradient">{t.title2}</span>
            <br />
            {t.title3}
          </h1>

          <p>{t.desc}</p>

          <div className="pf-hero-actions">
            <a href="#portfolio" className="btn-main">
              <i className="fas fa-rocket"></i>
              {t.cta1}
            </a>
            <a href="/cv.pdf" download="Osama_Kamal_CV.pdf" className="pf-btn-ghost">
              <i className="fas fa-file-arrow-down"></i>
              {language === "en" ? "Download CV" : "تحميل السيرة"}
            </a>
          </div>

          <div className="pf-stats-row">
            <div className="pf-stat">
              <strong>10</strong><span>{language === "en" ? "Projects" : "مشروع"}</span>
            </div>
            <div className="pf-stat-divider"></div>
            <div className="pf-stat">
              <strong>2+</strong><span>{language === "en" ? "Years Experience" : "سنوات خبرة"}</span>
            </div>
            <div className="pf-stat-divider"></div>
            <div className="pf-stat">
              <strong>12</strong><span>{language === "en" ? "Technologies" : "تقنية"}</span>
            </div>
          </div>

          {/* Small human touch - your photo */}
          <div className="pf-creator">
            <img src={personalImg} alt="Osama Kamal" className="pf-creator-img" />
            <div className="pf-creator-text">
              <strong>{language === "en" ? "Built by Osama Kamal" : "تنفيذ أسامة كمال"}</strong>
              <span>{language === "en" ? "MERN Stack Developer • Menoufia University" : "مطور MERN • الجامعة الوطنية بالمنوفية"}</span>
            </div>
          </div>
        </div>

        <div className="pf-hero-visual" data-aos="fade-left" data-aos-delay="200">
          <div className="pf-img-frame">
            <div className="pf-img-glow"></div>
            <img src={orcaHeroImg} alt="Premium Digital Experiences" className="pf-hero-img" />
            <div className="pf-img-badge pf-badge-tl">
              <i className="fas fa-code"></i>
              <span>Clean Code</span>
            </div>
            <div className="pf-img-badge pf-badge-br">
              <i className="fas fa-shield-halved"></i>
              <span>Secure & Fast</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#portfolio" className="pf-scroll-cue">
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
}
