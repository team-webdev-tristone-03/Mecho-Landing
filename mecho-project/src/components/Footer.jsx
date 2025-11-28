import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Icon from "../assets/mecho-icon.png";
import "../App.css";
const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section ">
            <img src={Icon} alt="" className="logo-icon" />
            <p>
              Mecho Car Wash Premium car care services delivered with speed,
              shine, and perfection. We keep your ride looking new, every single
              time
            </p>
          </div>

          <div className="footer-section">
            <h3>Company </h3>
            <Link to="/" onClick={() => handleNavigation("/")}>
              Home
            </Link>
            <Link to="/about" onClick={() => handleNavigation("/about")}>
              About
            </Link>
            <Link to="/pricing" onClick={() => handleNavigation("/pricing")}>
              Pricing
            </Link>
            <Link to="/contact" onClick={() => handleNavigation("/contact")}>
              Contact
            </Link>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <Link to="/faq" onClick={() => handleNavigation("/faq")}>
              FAQ
            </Link>
            <Link to="/terms" onClick={() => handleNavigation("/terms")}>
              Terms & Conditions
            </Link>
            <Link to="/privacy" onClick={() => handleNavigation("/privacy")}>
              Privacy Policy
            </Link>
          </div>

          <div className="footer-section">
            <h3 className="con-name">Contact Us</h3>
            <div className="contact-info">
              <a href="mailto:mecho.in.trichy@gmail.com">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>mecho.in.trichy@gmail.com</span>
                </div>
              </a>
              <a href="tel:+91 7904441074">
                <div className="contact-item">
                  <FaPhoneAlt className="contact-icon" />
                  <span>+91 7904441074</span>
                </div>
              </a>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Ariyamangalam, Trichy</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/mecho.in_trichy?igsh=MThrZXA4ZjFhYzh5OA=="
                target="_blank"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/mecho-trichy-bb7a58366?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="social-link"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/mecho_trichy?t=k5y6O7HIjeH-myrxq78Erw&s=08"
                className="social-link"
                target="_blank"
              >
                <FaTwitter />
              </a>

              <a
                href="https://wa.me/917904441074"
                className="social-link"
                target="_blank"
              >
                <IoLogoWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MECHO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
