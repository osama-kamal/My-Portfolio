import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useMode } from "../../Utils/Context/ModeContext";
import { useLanguage } from "../../Utils/Context/LanguageContext";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const { mode, toggleMode } = useMode();
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => setIsMobileMenuOpen(false), [location]);

  const translations = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      brand: "MyPortfolio",
    },
    ar: {
      home: "الرئيسية",
      about: "عنّي",
      projects: "المشاريع",
      contact: "تواصل",
      brand: "معرض أعمالي",
    },
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
      <Navbar 
        className={`custom-navbar ${mode} ${isScrolled ? "navbar-scrolled" : ""}`}
        expand="lg"
        fixed="top"
        style={{ direction: isRTL ? "rtl" : "ltr" }}
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand as={Link} to="/" className="custom-brand">
            {t.brand}
          </Navbar.Brand>

          {/* Desktop Nav */}
          <div className="desktop-nav ms-auto d-flex align-items-center">
            <Nav className="me-3">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.key}
                  as={Link}
                  to={item.path}
                  className={`nav-link-custom ${mode} ${
                    isActiveLink(item.path) ? "active" : ""
                  }`}
                >
                  {t[item.key]}
                </Nav.Link>
              ))}
            </Nav>

            {/* Toggles */}
            <button
              onClick={toggleMode}
              className={`toggle-btn ${mode}`}
              aria-label="Toggle theme"
            >
              {mode === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={toggleLanguage}
              className={`toggle-btn ${mode}`}
              aria-label="Toggle language"
            >
              <Globe size={18} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`mobile-toggle toggle-btn ${mode}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu size={20} />
          </button>
        </Container>
      </Navbar>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${mode} ${isMobileMenuOpen ? "open" : ""}`}
        style={{ direction: isRTL ? "rtl" : "ltr" }}
      >
        <div className="mobile-menu-content">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-close-btn toggle-btn ${mode}`}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav>
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`mobile-nav-link ${mode} ${
                  isActiveLink(item.path) ? "active" : ""
                }`}
              >
                {t[item.key]}
              </Link>
            ))}
          </nav>

          <div className="mobile-toggles">
            <button
              onClick={toggleMode}
              className={`toggle-btn ${mode}`}
              aria-label="Toggle theme"
            >
              {mode === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={toggleLanguage}
              className={`toggle-btn ${mode}`}
              aria-label="Toggle language"
            >
              <Globe size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
