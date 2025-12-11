import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Icon from "../assets/mecho-icon.png";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchUserName();
    } else {
      setUserName('');
    }
  }, [user]);

  const fetchUserName = async () => {
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setUserName(userDoc.data().name);
      }
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
      setIsOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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
              onClick={() => handleNavigation('/')}
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
              onClick={() => handleNavigation('/about')}
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
              onClick={() => handleNavigation('/pricing')}
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
              onClick={() => handleNavigation('/contact')}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-buttons">
          {user ? (
            <>
              {userName && (
                <span className="user-name">Hi, {userName}</span>
              )}
              <Link to="/pricing" className="btn btn-primary">
                Book Now
              </Link>
              <button onClick={handleSignOut} className="btn btn-secondary">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="btn btn-secondary">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => handleNavigation('/')}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={() => handleNavigation('/about')}
        >
          About
        </Link>
        <Link
          to="/pricing"
          className={`nav-link ${
            location.pathname === "/pricing" ? "active" : ""
          }`}
          onClick={() => handleNavigation('/pricing')}
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${
            location.pathname === "/contact" ? "active" : ""
          }`}
          onClick={() => handleNavigation('/contact')}
        >
          Contact
        </Link>
        {user ? (
          <>
            {userName && (
              <span className="user-name-mobile">Hi, {userName}</span>
            )}
            <Link
              to="/pricing"
              className="btn btn-primary"
              onClick={() => handleNavigation('/pricing')}
            >
              Book Now
            </Link>
            <button onClick={handleSignOut} className="btn btn-secondary">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              className="btn btn-secondary"
              onClick={() => handleNavigation('/signin')}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary"
              onClick={() => handleNavigation('/signup')}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
