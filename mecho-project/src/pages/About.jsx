import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Dusty from "../assets/Dusty.jpg";
import Clean from "../assets/Clean.jpg";
import "../App.css";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import React from "react";
import { FaUser, FaLeaf, FaBolt, FaGem } from "react-icons/fa";
import SEO from "../components/SEO";
import COFounder from "../assets/co-founder.jpg";

const About = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const visionRef = useRef(null);
  const ceoRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    [heroRef, featuresRef, visionRef, ceoRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Auto-animate slider divider on page load
    const animateSlider = () => {
      const slider = document.querySelector("img-comparison-slider");
      if (slider) {
        setTimeout(() => {
          // Add smooth transition
          slider.style.transition =
            "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          // Move to left (20%)
          slider.value = 20;
          setTimeout(() => {
            // Move to right (80%)
            slider.value = 80;
            setTimeout(() => {
              // Return to center (50%)
              slider.value = 50;
            }, 800);
          }, 800);
        }, 1000);
      }
    };

    animateSlider();

    return () => observer.disconnect();
  }, []);

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MECHO - Water - Efficient Car Wash Technology",
    description:
      "Learn about MECHO's revolutionary Water - Efficient car wash technology, our mission to provide eco-friendly car care, and meet our leadership team.",
    url: "https://mecho.in/about",
    mainEntity: {
      "@type": "Organization",
      name: "MECHO Car Wash",
      description:
        "Leading provider of Water - Efficient car wash services using advanced polymer technology",
      founder: {
        "@type": "Person",
        name: "Manoj",
        jobTitle: "Chief Executive Officer & Founder",
      },
      foundingDate: "2020",
      mission:
        "To provide fast, affordable, Water - Efficient car cleaning and reliable mechanical support using innovation, mobility, and sustainable cleaning technology.",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://mecho.in/about",
        },
      ],
    },
  };

  return (
    <div className="about-page-new">
      <SEO
        title="About MECHO - Water - Efficient Car Wash Technology | Eco-Friendly Car Care"
        description="Learn about MECHO's revolutionary Water - Efficient car wash technology, our mission to provide eco-friendly car care, and meet our leadership team."
        keywords="about MECHO, Water - Efficient car wash technology, eco-friendly car care, polymer technology, car wash company, sustainable car cleaning"
        url="https://mecho.in/about"
        structuredData={aboutStructuredData}
      />
      {/* Hero About Section */}
      <section className="hero-about" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Revolutionizing Car Care</h1>
              <p>
                MECHO is your trusted partner for premium automotive services.
                We combine cutting-edge Limited Water cleaning technology with
                expert mechanical support to deliver unmatched convenience and
                quality.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Minutes</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Pro</span>
                  <span className="stat-label">Polymer Tech</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Eco-Friendly</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="img-comparison-container">
                <ImgComparisonSlider>
                  <img
                    slot="first"
                    src={Dusty}
                    alt="Before - Dusty car"
                    className="comparison-img"
                  />
                  <img
                    slot="second"
                    src={Clean}
                    alt="After - Clean car"
                    className="comparison-img"
                  />
                </ImgComparisonSlider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MECHO Cleaning Features */}
      <section className="mecho-features" ref={featuresRef}>
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>Premium 15-Minute Limited Water Car Wash</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF6A00">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3>Time Taken</h3>
              <p>15 minutes flat</p>
              <span>Done anywhere, anytime</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF6A00">
                  <path d="M12 2.5L8.42 9.56L1 10.69L6.5 16.03L5.18 23.5L12 19.77L18.82 23.5L17.5 16.03L23 10.69L15.58 9.56L12 2.5Z" />
                </svg>
              </div>
              <h3>Polymer Technology</h3>
              <p>Advanced formula</p>
              <span>Encapsulates dirt with polymer coating</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF6A00">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
              <h3>Convenience</h3>
              <p>On-demand, mobile</p>
              <span>Home, office, or parking lot</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF6A00">
                  <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" />
                </svg>
              </div>
              <h3>Cleaning Quality</h3>
              <p>Deep-clean polymers</p>
              <span>Scratch-free shine + protective layer</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF6A00">
                  <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3>Finish</h3>
              <p>Built-in shine & polish</p>
              <span>All in one step</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF6A00">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 13 17 8 17 8Z" />
                </svg>
              </div>
              <h3>Eco Impact</h3>
              <p>100% eco-smart</p>
              <span>Sustainable technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission" ref={visionRef}>
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="#FF6A00">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted on-demand automotive care service,
                delivering premium, eco-friendly cleaning and mechanic support
                anywhere, anytime.
              </p>
            </div>
            <div className="vm-card mission-card">
              <div className="vm-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="#FF6A00">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide fast, affordable, Limited Water car cleaning and
                reliable mechanical support using innovation, mobility, and
                sustainable cleaning technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section" ref={ceoRef}>
        <div className="container">
          <div className="founders-header">
            <h2 className="founders-title">Meet Our Founders</h2>
            <p className="founders-subtitle">
              Visionary leaders driving innovation in automotive care with
              passion, expertise, and a commitment to excellence.
            </p>
          </div>

          <div className="founders-grid">
            {/* Founder Card */}
            <div className="founder-card founder-primary">
              <div className="founder-image-container">
                <div className="founder-image">
                  <img
                    src={COFounder}
                    alt="John - Co-Founder & CEO"
                    className="founder-photo"
                  />
                </div>
                <div className="founder-badge">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                  >
                    <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>

              <div className="founder-info">
                <h3 className="founder-name">MANOJ</h3>
                <p className="founder-title">Founder & CEO</p>
                <div className="founder-separator"></div>

                <div className="founder-bio">
                  <p className="bio-highlight">
                    Mecho was created with one goal, to give Trichy a car
                    service people can finally trust.
                  </p>
                  <p>
                    My focus is simple: every wash, every repair, every service
                    should be done right. By trained technicians who value your
                    time and treat your vehicle with care. With Mecho, what you
                    see is what you get: honest work, on-time service, and a
                    smooth, stress-free experience.
                  </p>
                  <p>
                    Mecho is my promise to Trichy: Good service should never be
                    a guessing game, and with us, it isn’t we deliver clarity,
                    consistency, and uncompromised quality every time.
                  </p>
                </div>

                <div className="founder-stats">
                  <div className="stat-item">
                    <span className="stat-number">1+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-Founder Card */}
            <div className="founder-card founder-secondary">
              <div className="founder-image-container">
                <div className="founder-image">
                  <img
                    src={COFounder}
                    alt="John - Co-Founder & CEO"
                    className="founder-photo"
                  />
                </div>
                <div className="founder-badge">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                  >
                    <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" />
                  </svg>
                </div>
              </div>

              <div className="founder-info">
                <h3 className="founder-name">JOHN</h3>
                <p className="founder-title">Co-Founder & CEO</p>
                <div className="founder-separator"></div>

                <div className="founder-bio">
                  <p className="bio-highlight">
                    "Technology should simplify life, not complicate it. That's
                    the philosophy behind every MECHO innovation."
                  </p>
                  <p>
                    I started Mecho with one clear idea, to make car care easy
                    and accessible for everyone. Most people don’t have the time
                    to visit a service center, and that’s where Mecho comes in.
                  </p>
                  <p>
                    With our doorstep services, skilled team, and focus on
                    quality, we want every car owner to feel confident that
                    their vehicle is in safe hands. Your time is valuable, and
                    Mecho is built to respect that.
                  </p>
                  <p>
                    Thank you for trusting us. We’re here to keep your car
                    shining, wherever you are.
                  </p>
                </div>

                <div className="founder-stats">
                  <div className="stat-item">
                    <span className="stat-number">4+</span>
                    <span className="stat-label">Years Tech Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">25+</span>
                    <span className="stat-label">Innovations Launched</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="founders-cta">
            <div className="cta-content">
              <h3>Ready to Experience the MECHO Difference?</h3>
              <p>
                Join thousands of satisfied customers who trust us with their
                automotive care.
              </p>
              <Link to="/pricing" className="cta-button">
                Book Your Service
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
