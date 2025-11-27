import React from 'react';
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with our team for any queries or support</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Get In Touch</h2>
            
            <div className="contact-item">
              <div className="contact-icon">
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

            <div className="map-section">
              <h3 className="map-title">Service Location</h3>
              <div className="map-placeholder">
                [Google Maps Integration Placeholder]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;