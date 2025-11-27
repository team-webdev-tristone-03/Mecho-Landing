import React from 'react';
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <div className="header-content">
            <div>
              <h1 className="page-title">Contact Us</h1>
              <p className="page-subtitle">Get in touch with our team for any queries or support</p>
            </div>
            <a href="/pricing" className="btn btn-primary view-plans-btn">
              View Plans
            </a>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Get In Touch</h2>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <FaEnvelope color="white" />
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Email</h3>
                <p className="contact-value">info@mecho.com</p>
                <p className="contact-value">support@mecho.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <FaPhone color="white" />
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Phone</h3>
                <p className="contact-value">+91 98765 43210</p>
                <p className="contact-value">+91 87654 32109</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <FaClock color="white" />
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Operating Hours</h3>
                <p className="contact-value">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p className="contact-value">Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt color="white" />
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Service Areas</h3>
                <p className="contact-value">Mumbai, Delhi, Bangalore</p>
                <p className="contact-value">Pune, Hyderabad, Chennai</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-card">
              <h2 className="form-title">Send us a Message</h2>
              
              <form className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input 
                    type="tel" 
                    className="form-input"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    rows="4"
                    className="form-input"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="form-submit"
                >
                  Send Message
                </button>
              </form>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;