import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_eko59me", // replace with EmailJS service ID
        "template_zxniudv", // replace with EmailJS template ID
        formData,
        "q5Tzft7O_4HipwdNX" // replace with EmailJS public key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again!");
        }
      );
  };

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MECHO Car Wash",
    "description": "Get in touch with MECHO for Water - Efficient car wash services. Contact us for bookings, support, or any queries about our eco-friendly car cleaning services.",
    "url": "https://mecho.in/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "MECHO Car Wash",
      "telephone": "+91-7904441074",
      "email": "mecho.in.trichy@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ariyamangalam",
        "addressLocality": "Trichy",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 09:00-18:00",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7904441074",
        "contactType": "customer service",
        "email": "mecho.in.trichy@gmail.com",
        "availableLanguage": ["English", "Tamil"]
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mecho.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://mecho.in/contact"
        }
      ]
    }
  };

  return (
    <div className="contact-page" style={{ paddingTop: "80px" }}>
      <SEO
        title="Contact MECHO Car Wash | Get in Touch for Water - Efficient Car Wash Services"
        description="Get in touch with MECHO for Water - Efficient car wash services. Contact us for bookings, support, or any queries about our eco-friendly car cleaning services."
        keywords="contact MECHO, car wash contact, Water - Efficient car wash booking, MECHO support, car wash service contact, Trichy car wash contact"
        url="https://mecho.in/contact"
        structuredData={contactStructuredData}
      />
      <div className="container">
        <div className="page-header">
          <div className="header-content">
            <div>
              <h1 className="page-title">Contact Us</h1>
              <p className="page-subtitle">
                Get in touch with our team for any queries or support
              </p>
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
              <div className="contact-icon"><FaEnvelope color="white" /></div>
              <div className="contact-details">
                <h3 className="contact-label">Email</h3>
                <p className="contact-value">mecho.in.trichy@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaPhoneAlt color="white" /></div>
              <div className="contact-details">
                <h3 className="contact-label">Phone</h3>
                <p className="contact-value">+91 7904441074</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaClock color="white" /></div>
              <div className="contact-details">
                <h3 className="contact-label">Operating Hours</h3>
                <p className="contact-value">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt color="white" /></div>
              <div className="contact-details">
                <h3 className="contact-label">Service Area</h3>
                <p className="contact-value">Ariyamangalam, Trichy</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-card">
              <h2 className="form-title">Send us a Message</h2>

              <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="4"
                    className="form-input"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
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
