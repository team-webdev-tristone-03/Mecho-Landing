import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { FaCar, FaStar } from "react-icons/fa";
import {
  MdPhone,
  MdChecklist,
  MdCalendarMonth,
  MdCreditCard,
} from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { motion, useInView } from "framer-motion";

import bgHero from "../assets/bg-hero.png";
import "../Small Components/Timeline.css";
import SEO from "../components/SEO";
import "../App.css";


const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [windParticles, setWindParticles] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    // Create wind particles for dust effect
    const particleTimer = setTimeout(() => {
      const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 45 + Math.random() * 10,
        delay: Math.random() * 800,
      }));
      setWindParticles(particles);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(particleTimer);
    };
  }, []);

  const titleText = "Unga MECHO In Our Trichy";
  const words = titleText.split(" ");

  const testimonials = [
    {
      name: "Karthik Raj",
      role: "Small Business Owner",
      text: "Super fast service! My car looks exceptionally clean and shiny. The Limited Water wash is extremely effective.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Divya Lakshmi",
      role: "HR Manager",
      text: "The eco-friendly service offered by Mecho is excellent. They save water while delivering a spotless car wash.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Arun Prasad",
      role: "Software Developer",
      text: "A perfectly clean finish in just 15 minutes! This service fits well into my busy schedule.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Shalini Ramesh",
      role: "Doctor",
      text: "They handled everything very professionally. My car looked incredibly shiny after the service.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Vignesh S",
      role: "Start-up Founder",
      text: "The doorstep service is extremely convenient. I no longer have to spend time visiting car wash centers.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Anu Priya",
      role: "School Teacher",
      text: "Excellent quality and an eco-friendly approach. My entire family prefers Mecho’s service.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const steps = [
    {
      icon: MdPhone,
      title: "Click Book Now",
      subtitle: "Start your service request",
    },
    {
      icon: MdChecklist,
      title: "Choose Your Plan",
      subtitle: "Pick a suitable wash package",
    },
    {
      icon: MdCalendarMonth,
      title: "Schedule the Service",
      subtitle: "Select date & time",
    },
    {
      icon: MdCreditCard,
      title: "Avail 25% Off & Proceed",
      subtitle: "Complete payment securely",
    },
    {
      icon: IoCarSportOutline,
      title: "Get Your Car Cleaned",
      subtitle: "Instant or daily doorstep wash",
    },
  ];

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MECHO - Water - Efficient Car Wash Service | Eco-Friendly Doorstep Car Cleaning",
    description:
      "Professional Water - Efficient car wash service at your doorstep. Eco-friendly 15-minute car cleaning for just ₹75. Book now for premium car care in Trichy.",
    url: "https://mecho.in",
    mainEntity: {
      "@type": "Service",
      name: "Water - Efficient Car Wash Service",
      description:
        "Eco-friendly car cleaning using advanced polymer technology",
      provider: {
        "@type": "LocalBusiness",
        name: "MECHO Car Wash",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Trichy",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
      areaServed: "Trichy",
      serviceType: "Car Wash",
      offers: {
        "@type": "Offer",
        price: "75",
        priceCurrency: "INR",
        description: "15-minute Water - Efficient car wash",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://mecho.in",
        },
      ],
    },
  };

  return (
    <div>
      <SEO
        title="MECHO - Water - Efficient Car Wash Service | Eco-Friendly Doorstep Car Cleaning"
        description="Professional Water - Efficient car wash service at your doorstep. Eco-friendly 15-minute car cleaning for just ₹75. Book now for premium car care in Trichy."
        keywords="Water - Efficient car wash, eco-friendly car cleaning, doorstep car wash, car wash service, Trichy car wash, mobile car wash, car detailing, polymer technology"
        url="https://mecho.in"
        structuredData={homeStructuredData}
      />
      {/* Modern Dust-to-Shine Hero Section */}
      <section
        className="dust-to-shine-hero"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        {/* Wind particles for dust effect */}
        {windParticles.map((particle) => (
          <div
            key={particle.id}
            className="wind-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}ms`,
            }}
          />
        ))}

        <div className="dust-hero-content">
          {/* Animated Title */}
          <h1 className="dust-title">
            <span className="title-line-1">
              {["Unga", "MECHO"].map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  style={{
                    marginRight: wordIndex < 1 ? "0.3em" : "0",
                  }}
                >
                  {word.split("").map((letter, letterIndex) => {
                    const totalIndex = wordIndex * 5 + letterIndex;
                    const startX =
                      Math.random() > 0.5
                        ? Math.random() * 100 + 50
                        : -(Math.random() * 100 + 50);
                    return (
                      <span
                        key={letterIndex}
                        className={`dust-letter ${
                          word === "MECHO" ? "mecho-orange" : ""
                        }`}
                        style={{
                          "--start-x": `${startX}px`,
                          animationDelay: `${totalIndex * 0.08}s`,
                        }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                </span>
              ))}
            </span>
            <span className="title-line-2">
              {["In", "Our", "Trichy"].map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  style={{
                    marginRight: wordIndex < 2 ? "0.3em" : "0",
                  }}
                >
                  {word.split("").map((letter, letterIndex) => {
                    const totalIndex = (wordIndex + 2) * 5 + letterIndex;
                    const startX =
                      Math.random() > 0.5
                        ? Math.random() * 100 + 50
                        : -(Math.random() * 100 + 50);
                    return (
                      <span
                        key={letterIndex}
                        className="dust-letter"
                        style={{
                          "--start-x": `${startX}px`,
                          animationDelay: `${totalIndex * 0.08}s`,
                        }}
                      >
                        {letter}
                      </span>
                    );
                  })}
                </span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="dust-subtitle">
            Eco-friendly car cleaning at your doorstep, done in just 15 minutes,
            using minimal water all for just ₹79.
          </p>

          {/* CTA Button */}
          <div className="dust-cta" style={{ marginTop: window.innerWidth <= 768 ? '0vh' : '50vh' }}>
            <Link 
              to="/pricing" 
              className="dust-button"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #FF6A00 0%, #FFB60A 100%)',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.125rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(255, 106, 0, 0.3)',
                border: 'none',
                cursor: 'pointer'
          
              }}
            >
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </section>
      {/* About Service Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">What is Water-Efficient Car Wash?</h2>
          <p className="about-text">
            Our innovative water-efficient car wash technology uses specially
            formulated eco-friendly products that clean, polish, and protect
            your vehicle while using very minimal water. It’s faster, more
            convenient, and significantly reduces water wastage — making it a
            smarter choice for you and the environment.
          </p>
          <Link to="/pricing">
            <div className="highlight-box">
              15 Minutes Car Wash Per Day @ Just ₹75!
            </div>
          </Link>
        </div>
      </section>

      <section className="timeline-section" ref={timelineRef}>
        <div className="container">
          <motion.h2
            className="timeline-main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>
          <div className="timeline-wrapper">
            <div className="timeline-center-line">
              <motion.div
                className="timeline-spark"
                initial={{ y: -20, opacity: 0 }}
                animate={isInView ? { y: "100%", opacity: [0, 1, 1, 0] } : {}}
                transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
              />
            </div>
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`timeline-step ${isLeft ? "left" : "right"}`}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
                >
                  <div
                    className={`timeline-content ${isLeft ? "right" : "left"}`}
                  >
                    <div className="timeline-icon">
                      <IconComponent />
                    </div>
                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-subtitle">{step.subtitle}</p>
                  </div>
                  <motion.div
                    className="timeline-number"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-scroll-container">
            <div className="testimonial-scroll-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-left">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonial-img"
                    />
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                    <span className="testimonial-date">29 Aug, 2017</span>
                  </div>
                  <div className="testimonial-right">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini Footer CTA */}
      <section className="cta-section">
        <div className="container">
          <b>
            {" "}
            <p className="cta-text">Ready to transform your car care? </p>
          </b>
          <Link to="/pricing" className="btn-white">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
