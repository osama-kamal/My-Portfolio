import React from "react";
import { useMode } from "../../Utils/Context/ModeContext";
import { useLanguage } from "../../Utils/Context/LanguageContext";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const { language } = useLanguage();

  const translations = {
    en: {
      tagline: "Crafting premium digital systems",
      tagline2: "for modern businesses and enterprises.",
      quick: "Quick Links",
      solutions: "Solutions",
      copyright: `© ${new Date().getFullYear()} Osama Kamal. All rights reserved.`,
      built: "Built with",
      by: "by Osama",
    },
    ar: {
      tagline: "نصنع أنظمة رقمية متميزة",
      tagline2: "للشركات والمؤسسات الحديثة.",
      quick: "روابط سريعة",
      solutions: "الحلول",
      copyright: `© ${new Date().getFullYear()} أسامة كمال. جميع الحقوق محفوظة.`,
      built: "صُنع بـ",
      by: "بواسطة أسامة",
    },
  };
  const t = translations[language];

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo" style={{fontWeight:900, fontSize:'1.5rem', color:'var(--white)', textDecoration:'none', fontFamily:'Tajawal'}}>
              MyPortfolio
            </a>
            <p className="footer-tagline">{t.tagline}<br />{t.tagline2}</p>
            <div className="social-links">
              <a href="https://github.com/osama-kamal" target="_blank" rel="noopener" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/osama-hamroush/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="mailto:osamahamroush9@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
              <a href="https://wa.me/201033928114" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t.quick}</h4>
            <ul className="footer-links">
              <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
              <li><Link to="/about"><i className="fas fa-chevron-right"></i> About</Link></li>
              <li><Link to="/projects"><i className="fas fa-chevron-right"></i> Projects</Link></li>
              <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t.solutions}</h4>
            <ul className="footer-links">
              <li><a href="#"><i className="fas fa-chevron-right"></i> MERN Stack</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> SaaS Platforms</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> E-Commerce</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Management Systems</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links footer-contact">
              <li><a href="mailto:osamahamroush9@gmail.com"><i className="fas fa-envelope"></i> osamahamroush9@gmail.com</a></li>
              <li><a href="https://wa.me/201033928114" target="_blank" rel="noopener"><i className="fab fa-whatsapp"></i> +20 103 392 8114</a></li>
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> Cairo, Egypt</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.copyright}</span>
          <span className="footer-bottom-right">
            {t.built} <i className="fas fa-heart" style={{color:'var(--primary)', fontSize:'0.75rem'}}></i> {t.by}
          </span>
        </div>
      </div>
    </footer>
  );
}
