import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    { name: "Rajesh Kumar", text: "Amazing service! My car looks brand new every time. The waterless wash is so convenient.", rating: 5 },
    { name: "Priya Sharma", text: "Eco-friendly and efficient. I love that I'm saving water while keeping my car clean.", rating: 5 },
    { name: "Amit Patel", text: "Quick 15-minute service fits perfectly into my busy schedule. Highly recommended!", rating: 5 },
    { name: "Sneha Reddy", text: "Professional service and great results. My car shines like never before!", rating: 5 },
    { name: "Vikram Singh", text: "Convenient doorstep service. No more waiting at car wash centers!", rating: 5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="animate-fadeInUp">
            MECHO Waterless Car Wash
          </h1>
          <p className="animate-fadeInUp">
            Revolutionary eco-friendly car washing service that saves water while delivering premium results
          </p>
          <div className="hero-icon">
            🚗
          </div>
          <Link to="/pricing" className="btn-cta">
            Book Now
          </Link>
        </div>
      </section>

      {/* About Service Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">What is Waterless Car Wash?</h2>
          <p className="about-text">
            Our innovative waterless car wash technology uses specialized eco-friendly products that clean, polish, and protect your vehicle without using a single drop of water. It's faster, more convenient, and better for the environment.
          </p>
          <div className="highlight-box">
            15 Minutes Car Wash Per Day — Just ₹75!
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
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