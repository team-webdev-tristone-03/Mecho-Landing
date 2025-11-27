import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { FaCar, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Dusty from "../assets/Dusty.png";
import Clean from "../assets/Clean.jpeg";
import bgHero from "../assets/bg-hero.png";

import "../App.css";
import { Timeline } from "@mui/icons-material";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [windParticles, setWindParticles] = useState([]);

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
      text: "Super fast service! My car looks exceptionally clean and shiny. The waterless wash is extremely effective.",
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

  return (
    <div>
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
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                style={{
                  marginRight: wordIndex < words.length - 1 ? "0.3em" : "0",
                }}
              >
                {word.split("").map((letter, letterIndex) => {
                  const totalIndex =
                    words.slice(0, wordIndex).join("").length +
                    wordIndex +
                    letterIndex;
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
                        background:
                          word === "MECHO"
                            ? " #FF8C00"
                            : undefined,
                        WebkitBackgroundClip:
                          word === "MECHO" ? "text" : undefined,
                        WebkitTextFillColor:
                          word === "MECHO" ? "transparent" : undefined,
                        backgroundClip: word === "MECHO" ? "text" : undefined,
                      }}
                    >


                          
                      {/* //   "--start-x": `${startX}px`,
                      //   animationDelay: `${totalIndex * 0.08}s`,
                      //   background:
                      //     word === "MECHO"
                      //       ? "linear-gradient(135deg, #FFD700, #FF8C00)"
                      //       : undefined,
                      //   WebkitBackgroundClip:
                      //     word === "MECHO" ? "text" : undefined,
                      //   WebkitTextFillColor:
                      //     word === "MECHO" ? "transparent" : undefined,
                      //   backgroundClip: word === "MECHO" ? "text" : undefined,
                      // }} */}
                      {letter}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          {/* <h1 className="dust-title">
            Unga <span style={"color:red"}>MECHO</span> In Our Trichy
          </h1> */}

          {/* Subtitle */}
          <p className="dust-subtitle">
            Eco-friendly car cleaning at your doorstep done in just 15 minutes,
            without using a single drop of water @₹79.
          </p>

          {/* CTA Button */}
          <div className="dust-cta">
            <Link to="/pricing" className="dust-button">
              Book Now
            </Link>
          </div>
        </div>
      </section>
      {/* About Service Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">What is Waterless Car Wash?</h2>
          <p className="about-text">
            Our innovative waterless car wash technology uses specialized
            eco-friendly products that clean, polish, and protect your vehicle
            without using a single drop of water. It's faster, more convenient,
            and better for the environment.
          </p>
          <div className="highlight-box">
            15 Minutes Car Wash Per Day — Just ₹75!
          </div>
        </div>
      </section>

      <section>
        <Timeline />
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
          <p>Drive Clean. Save Water.</p>
          <Link to="/pricing" className="btn-white">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
