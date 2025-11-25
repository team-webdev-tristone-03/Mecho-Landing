import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">About MECHO</h1>
          <p className="page-subtitle">
            MECHO is revolutionizing car care with our innovative waterless washing technology. 
            We're committed to providing premium car cleaning services while protecting our environment.
          </p>
        </div>

        <div className="about-content">
          <div className="mission-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              To provide convenient, eco-friendly car washing services that save water, time, and deliver exceptional results. 
              We believe in sustainable practices that benefit both our customers and the planet.
            </p>
            
            <h3 className="benefits-title">Benefits of Waterless Car Wash:</h3>
            <ul className="benefits-list">
              <li>• Saves up to 150 liters of water per wash</li>
              <li>• No harmful chemicals entering water systems</li>
              <li>• Convenient doorstep service</li>
              <li>• Quick 15-minute process</li>
              <li>• Superior shine and protection</li>
              <li>• Works in any weather condition</li>
            </ul>
          </div>
          
          <div className="ceo-section">
            <div className="ceo-avatar">
              👨💼
            </div>
            <h3 className="ceo-name">Rahul Mehta</h3>
            <p className="ceo-title">CEO & Founder</p>
            <p className="ceo-description">
              "With over 10 years in the automotive industry, I founded MECHO to address the growing need for sustainable car care solutions. 
              Our waterless technology represents the future of vehicle maintenance - efficient, eco-friendly, and accessible to everyone. 
              We're not just cleaning cars; we're preserving our planet's most precious resource while delivering unmatched convenience to our customers."
            </p>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title">Why Choose MECHO?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">Eco-Friendly</h3>
              <p className="feature-description">100% waterless technology that protects the environment</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Fast Service</h3>
              <p className="feature-description">Complete wash in just 15 minutes at your doorstep</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">Professional-grade products for superior results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;