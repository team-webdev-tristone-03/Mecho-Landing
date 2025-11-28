import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../pages/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <SEO
        title="Page Not Found - MECHO Car Wash"
        description="The page you're looking for doesn't exist. Return to MECHO's homepage to explore our Water - Efficient car wash services."
        url="https://mecho.in/404"
      />
      
      <div className="not-found-content">
        <h1 className="not-found-number">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-description">
          Sorry, the page you're looking for doesn't exist. Let's get you back to our car wash services.
        </p>
        
        <div className="not-found-actions">
          <Link to="/" className="home-button">
            Back to Home
          </Link>
          
          <div className="nav-links">
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;