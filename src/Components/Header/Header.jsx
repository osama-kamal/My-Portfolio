import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMode } from "../../Utils/Context/ModeContext";
import { useLanguage } from "../../Utils/Context/LanguageContext";
import { Sun, Moon, Globe } from "lucide-react";
import "./Header.css";

export default function Header() {
  const { mode, toggleMode } = useMode();
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  // lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const translations = {
    en: { home: "Home", about: "About", projects: "Projects", contact: "Contact", brand: "MyPortfolio", cta: "Contact Us" },
    ar: { home: "الرئيسية", about: "عنّي", projects: "المشاريع", contact: "تواصل", brand: "معرض أعمالي", cta: "تواصل معنا" },
  };
  const t = translations[language];
  const isRTL = language === "ar";

  const navItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "projects", path: "/projects" },
    { key: "contact", path: "/contact" },
  ];
  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <header id="main-header" className={isScrolled ? "scrolled" : ""} style={{ direction: isRTL ? "rtl" : "ltr" }}>
        <nav className="nav-inner container">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-text">{t.brand}</span>
          </Link>

          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`} id="nav-links">
            <li className="nav-close-wrap">
              <button className="nav-close-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <i className="fas fa-times"></i>
              </button>
            </li>

            {navItems.map((item) => (
              <li key={item.key}>
                <Link to={item.path} className={`nav-link ${isActiveLink(item.path) ? "active" : ""}`}>
                  {t[item.key]}
                </Link>
              </li>
            ))}

            <li className="nav-actions">
              <Link to="/contact" className="nav-cta">
                <i className="fas fa-paper-plane"></i>
                {t.cta}
              </Link>
              <button onClick={toggleMode} className="nav-icon-btn" aria-label="Toggle theme">
                {mode === "light" ? <Moon size={14} /> : <Sun size={14} />}
              </button>
              <button onClick={toggleLanguage} className="nav-icon-btn" aria-label="Toggle language">
                <Globe size={14} />
              </button>
            </li>
          </ul>

          <button className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`} id="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>
      <div className={`nav-overlay ${isMobileMenuOpen ? "active" : ""}`} id="nav-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
    </>
  );
}
