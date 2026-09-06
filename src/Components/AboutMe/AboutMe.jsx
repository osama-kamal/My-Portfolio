import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./AboutMe.css";
import { useMode } from "../../Utils/Context/ModeContext";
import { useLanguage } from "../../Utils/Context/LanguageContext";
import personalImg from "../../assets/Personal.jpg";

const AboutMe = () => {
  const { mode } = useMode();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible =
          elementTop < window.innerHeight - 100 && elementBottom > 0;
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // البيانات ثنائية اللغة
  const profileData = {
    en: {
      title: "About Me",
      name: "Osama Kamal",
      jobTitle: "MERN-Stack Web Developer",
      professionalProfile: "Professional Profile",
      education: "Education",
      contactInfo: {
        email: "osamahamroush9@gmail.com",
        location: "Cairo, Egypt",
        phone: "+201033928114",
      },
      bio: "My name is Osama Kamal, a passionate software developer focused on building smart and integrated tech solutions. I am currently studying at the Faculty of Computer Science – Menoufia National University, specializing in Internet of Things (IoT) and Big Data Analysis. I specialize in developing modern web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js), with a particular interest in IoT projects that connect software with hardware, as well as database management and data analysis.",
      educationDetails: {
        degree: "Faculty of Computer Science",
        university: "Menoufia National University",
        period: "2022 – 2026",
        location: "Cairo, Egypt",
        description:
          "Studying Computer Science with a focus on IoT and Big Data Analysis, I'm gaining practical skills in web development, smart systems integration, and data-driven solution design.",
      },
      certifications: "Certifications",
      certs: [
        {
          name: "Node.js RESTful Web Services",
          link: "https://www.linkedin.com/posts/osama-hamroush_nodejs-restful-web-services-using-express-activity-7390300441047289857-Cq8V?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEmT30kBOEdKh2gFtnajZgc5gIKwl6pCbTU&utm_campaign=copy_link",
        },
        {
          name: "Frontend Development Activity",
          link: "https://www.linkedin.com/posts/osama-hamroush_digitalegypt-frontenddevelopment-softwaredevelopment-activity-7290795803021877248-1GCK?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEmT30kBOEdKh2gFtnajZgc5gIKwl6pCbTU&utm_campaign=copy_link",
        },
      ],
    },
    ar: {
      title: "عنى",
      name: "اسامه كمال",
      jobTitle: "مطور ويب MERN-Stack",
      professionalProfile: "الملف المهني",
      education: "التعليم",
      contactInfo: {
        email: "osamahamroush9@gmail.com",
        location: "القاهره، مصر",
        phone: "+201033928114",
      },
      bio: "اسمي أسامة كمال، مطور برمجيات شغوف أركز على بناء حلول تكنولوجية ذكية ومتكاملة. أدرس حاليًا في كلية علوم الحاسب - الجامعة الوطنية بالمنوفية، متخصص في إنترنت الأشياء (IoT) وتحليل البيانات الضخمة. أتخصص في تطوير تطبيقات الويب الحديثة باستخدام MERN Stack (MongoDB, Express.js, React.js, Node.js)، مع اهتمام خاص بمشاريع إنترنت الأشياء التي تربط البرامج بالأجهزة، بالإضافة إلى إدارة قواعد البيانات وتحليل البيانات.",
      educationDetails: {
        degree: "كلية علوم الحاسب",
        university: "الجامعة الوطنية بالمنوفية",
        period: "2022 – 2026",
        location: "القاهره، مصر",
        description:
          "أدرس علوم الحاسب مع التركيز على إنترنت الأشياء وتحليل البيانات الضخمة، وأكتسب مهارات عملية في تطوير الويب، وتكامل الأنظمة الذكية، وتصميم الحلول القائمة على البيانات.",
      },
      certifications: "الشهادات",
      certs: [
        {
          name: "Node.js RESTful Web Services",
          link: "https://www.linkedin.com/posts/osama-hamroush_nodejs-restful-web-services-using-express-activity-7390300441047289857-Cq8V?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEmT30kBOEdKh2gFtnajZgc5gIKwl6pCbTU&utm_campaign=copy_link",
        },
        {
          name: "Frontend Development Activity",
          link: "https://www.linkedin.com/posts/osama-hamroush_digitalegypt-frontenddevelopment-softwaredevelopment-activity-7290795803021877248-1GCK?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEmT30kBOEdKh2gFtnajZgc5gIKwl6pCbTU&utm_campaign=copy_link",
        },
      ],
    },
  };

  const data = profileData[language];
  const isRTL = language === "ar";

  return (
    <section
      id="about"
      className={`about-me-section mt-5 py-5 ${mode}-mode`}
      dir={isRTL ? "rtl" : "ltr"} // هنا بيتحدد الاتجاه
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title fade-in">{data.title}</h2>
            <div className="title-underline"></div>
          </Col>
        </Row>

        {/* Profile Section */}
        <Row className="mb-5 fade-in">
          <Col lg={4} className="mb-4">
            <Card className={`profile-card h-100 ${mode}-card`}>
              <Card.Body className="text-center">
                <div className="profile-image-wrapper mb-3">
                  <div className="profile-image">
                    <img
                      src={personalImg}
                      alt={data.name}
                      className="rounded-circle img-fluid"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <h3>{data.name}</h3>
                <p className="text-primary">{data.jobTitle}</p>

                <div className="contact-info">
                  <p>
                    <FaEnvelope className="me-2" /> {data.contactInfo.email}
                  </p>
                  <p>
                    <FaMapMarkerAlt className="me-2" />{" "}
                    {data.contactInfo.location}
                  </p>
                  <p>
                    <FaPhone className="me-2" /> {data.contactInfo.phone}
                  </p>
                </div>

                <div className="social-links mt-4">
                  <a
                    href={`https://github.com/osama-kamal`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/in/osama-hamroush/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className={`bio-card h-100 ${mode}-card`}>
              <Card.Body>
                <h4 className="mb-4">{data.professionalProfile}</h4>
                <p>{data.bio}</p>

                <div className="education-card mt-4">
                  <h5>{data.education}</h5>
                  <div className="edu-item">
                    <div className="edu-header">
                      <h6>{data.educationDetails.degree}</h6>
                      <span className="text-muted">
                        {data.educationDetails.period}
                      </span>
                    </div>
                    <p className="text-primary">
                      {data.educationDetails.university},{" "}
                      {data.educationDetails.location}
                    </p>
                    <p>{data.educationDetails.description}</p>
                  </div>
                </div>

                <div className="certifications-card mt-4">
                  <h5 className="mb-3">{data.certifications}</h5>
                  <ul className="list-unstyled mb-0">
                    {data.certs.map((cert, i) => (
                      <li key={i} className="mb-2">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link d-flex align-items-center gap-2"
                        >
                          <FaLinkedin size={14} className="text-primary flex-shrink-0" />
                          <span>{cert.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
