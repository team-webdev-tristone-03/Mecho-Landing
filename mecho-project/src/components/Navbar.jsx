import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Icon from "../assets/mecho-icon.png";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={Icon} alt="Mecho Logo" className="logo-icon" />
        </Link>

        <ul className="nav-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className={`nav-link ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <Link to="/signin" className="btn btn-secondary">
            Sign In
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/pricing"
          className={`nav-link ${
            location.pathname === "/pricing" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${
            location.pathname === "/contact" ? "active" : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/signin"
          className="btn btn-secondary"
          onClick={() => setIsOpen(false)}
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="btn btn-primary"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
