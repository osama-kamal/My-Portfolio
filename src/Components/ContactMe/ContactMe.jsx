import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './ContactMe.css';
import { useMode } from '../../Utils/Context/ModeContext';
import { useLanguage } from '../../Utils/Context/LanguageContext';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";


const ContactMe = () => {
  const { mode } = useMode();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  // Determine if the current language is RTL
  const isRTL = language === 'ar';

  useEffect(() => {
    // Animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Floating animation for elements
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((el) => {
      el.style.animationDelay = `${Math.random() * 2}s`;
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowAlert(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }, 1500);
  };

  // بيانات ثنائية اللغة
  const contactData = {
    en: {
      title: "Get In Touch",
      subtitle: "I'm always open to discussing new projects and opportunities",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Your message has been sent successfully!",
      contactInfo: "Contact Info",
      location: "Elbehaira, Egypt",
      phone: "+201033928114",
      emailAddress: "osamahamroush9@gmail.com"
    },
    ar: {
      title: "تواصل معي",
      subtitle: "أنا دائمًا منفتح لمناقشة المشاريع الجديدة والفرص",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      subject: "الموضوع",
      message: "رسالتك",
      submit: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال رسالتك بنجاح!",
      contactInfo: "معلومات التواصل",
      location: "البحيرة، مصر",
      phone: "+201033928114",
      emailAddress: "osamahamroush9@gmail.com"
    }
  };

  const data = contactData[language];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className={`contact-section py-5 ${mode}-mode ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
      </div>
      
      <Container>
        <Row>
          <Col lg={12} className={`text-center mb-5 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="section-title animate-on-scroll">{data.title}</h2>
            <div className="title-underline"></div>
            <p className="subtitle animate-on-scroll">{data.subtitle}</p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className={`contact-card ${mode}-card animate-on-scroll ${isRTL ? 'rtl-card' : ''}`}>
              <Card.Body className="p-4 p-md-5">
                {showAlert && (
                  <Alert variant="success" className={`animate-alert ${isRTL ? 'text-right' : 'text-left'}`}>
                    {data.success}
                  </Alert>
                )}
                
                <Form ref={formRef} onSubmit={handleSubmit} className={`contact-form ${isRTL ? 'rtl-form' : ''}`}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className={isRTL ? 'rtl-label' : ''}>{data.name}</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`input-animate ${isRTL ? 'rtl-input' : ''}`}
                          dir={isRTL ? 'rtl' : 'ltr'}
                        />
                        <div className="input-underline"></div>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label className={isRTL ? 'rtl-label' : ''}>{data.email}</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`input-animate ${isRTL ? 'rtl-input' : ''}`}
                          dir="ltr" // Email should always be LTR
                        />
                        <div className="input-underline"></div>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className={isRTL ? 'rtl-label' : ''}>{data.subject}</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`input-animate ${isRTL ? 'rtl-input' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    <div className="input-underline"></div>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label className={isRTL ? 'rtl-label' : ''}>{data.message}</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`input-animate ${isRTL ? 'rtl-input' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    <div className="input-underline"></div>
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className={`submit-btn ${isRTL ? 'rtl-btn' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className={`spinner-border spinner-border-sm ${isRTL ? 'ms-2' : 'me-2'}`} role="status" aria-hidden="true"></span>
                          {data.sending}
                        </>
                      ) : (
                        <>
                          <i className={`fas fa-paper-plane ${isRTL ? 'ms-2' : 'me-2'}`}></i>
                          {data.submit}
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
  <Col md={4} className="text-center mb-4">
    <div className={`contact-info-item animate-on-scroll ${isRTL ? "rtl-info" : ""}`}>
      <div className="icon-wrapper">
        <FaMapMarkerAlt size={28} />
      </div>
      <h5>{data.location}</h5>
    </div>
  </Col>

  <Col md={4} className="text-center mb-4">
    <div className={`contact-info-item animate-on-scroll ${isRTL ? "rtl-info" : ""}`}>
      <div className="icon-wrapper">
        <FaPhone size={28} />
      </div>
      <h5 dir="ltr">{data.phone}</h5>
    </div>
  </Col>

  <Col md={4} className="text-center mb-4">
    <div className={`contact-info-item animate-on-scroll ${isRTL ? "rtl-info" : ""}`}>
      <div className="icon-wrapper">
        <FaEnvelope size={28} />
      </div>
      <h5 dir="ltr">{data.emailAddress}</h5>
    </div>
  </Col>
</Row>
      </Container>
    </section>
  );
};

export default ContactMe;