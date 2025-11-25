import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>MECHO</h3>
            <p>Waterless Car Wash Service</p>
          </div>
          
          <div className="footer-section">
            <h3>Navigation</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>info@mecho.com</p>
            <p>+91 98765 43210</p>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 MECHO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;