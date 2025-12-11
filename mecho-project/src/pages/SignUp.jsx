import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import {
  FaEye,
  FaEyeSlash,
  FaMapMarkerAlt,
  FaCar,
  FaGoogle,
} from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Account Info (existing fields preserved)
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    // Step 2 - Service Location (new fields)
    address: "",
    landmark: "",
    city: "",
    pincode: "",
    // Step 3 - Vehicle Details (new fields)
    carType: "",
    carBrand: "",
    carModel: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Full name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
      if (!formData.mobile.trim())
        newErrors.mobile = "Mobile number is required";
    } else if (step === 2) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    } else if (step === 3) {
      if (!formData.carType) newErrors.carType = "Car type is required";
      if (!formData.carBrand.trim())
        newErrors.carBrand = "Car brand is required";
      if (!formData.carModel.trim())
        newErrors.carModel = "Car model is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Save all form data to Firebase (existing + new fields)
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        address: formData.address,
        landmark: formData.landmark,
        city: formData.city,
        pincode: formData.pincode,
        carType: formData.carType,
        carBrand: formData.carBrand,
        carModel: formData.carModel,
        createdAt: new Date().toISOString(),
      });

      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <>
      <div className="signup-form-group">
        <label className="signup-form-label">Full Name</label>
        <input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={`signup-form-input ${errors.name ? "error" : ""}`}
          placeholder="Enter your full name"
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="signup-form-group">
        <label className="signup-form-label">Email Address</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`signup-form-input ${errors.email ? "error" : ""}`}
          placeholder="Enter your email"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="signup-form-group">
        <label className="signup-form-label">Password</label>
        <div className="password-input-container">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={handleChange}
            className={`signup-form-input ${errors.password ? "error" : ""}`}
            placeholder="Create a password"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>

      <div className="signup-form-group">
        <label className="signup-form-label">Confirm Password</label>
        <div className="password-input-container">
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`signup-form-input ${
              errors.confirmPassword ? "error" : ""
            }`}
            placeholder="Confirm your password"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}
      </div>

      <div className="signup-form-group">
        <label className="signup-form-label">Mobile Number</label>
        <input
          name="mobile"
          type="tel"
          required
          value={formData.mobile}
          onChange={handleChange}
          className={`signup-form-input ${errors.mobile ? "error" : ""}`}
          placeholder="Enter your mobile number"
        />
        {errors.mobile && (
          <span className="error-message">{errors.mobile}</span>
        )}
      </div>

      <div className="divider">
        <span>or</span>
      </div>

      <button
        type="button"
        onClick={handleGoogleSignUp}
        className="google-btn-signup"
        disabled={loading}
      >
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </button>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="signup-form-group">
        <label className="signup-form-label">Full Address</label>
        <textarea
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className={`signup-form-textarea ${errors.address ? "error" : ""}`}
          placeholder="Enter your complete address"
          rows="3"
        />
        {errors.address && (
          <span className="error-message">{errors.address}</span>
        )}
      </div>

      <div className="signup-form-group">
        <label className="signup-form-label">Area/Landmark</label>
        <input
          name="landmark"
          type="text"
          value={formData.landmark}
          onChange={handleChange}
          className="signup-form-input"
          placeholder="Nearby landmark (optional)"
        />
      </div>

      <div className="signup-form-row">
        <div className="signup-form-group">
          <label className="signup-form-label">City</label>
          <input
            name="city"
            type="text"
            required
            value={formData.city}
            onChange={handleChange}
            className={`signup-form-input ${errors.city ? "error" : ""}`}
            placeholder="Enter your city"
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        <div className="signup-form-group">
          <label className="signup-form-label">Pincode</label>
          <input
            name="pincode"
            type="text"
            required
            value={formData.pincode}
            onChange={handleChange}
            className={`signup-form-input ${errors.pincode ? "error" : ""}`}
            placeholder="Enter pincode"
          />
          {errors.pincode && (
            <span className="error-message">{errors.pincode}</span>
          )}
        </div>
      </div>

      <div className="location-note">
        <div className="location-icon">
          <FaMapMarkerAlt />
        </div>
        <p>We'll use this address for doorstep car wash services</p>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <div className="signup-form-group">
        <label className="signup-form-label">Car Type</label>
        <select
          name="carType"
          required
          value={formData.carType}
          onChange={handleChange}
          className={`signup-form-select ${errors.carType ? "error" : ""}`}
        >
          <option value="">Select car type</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>
        {errors.carType && (
          <span className="error-message">{errors.carType}</span>
        )}
      </div>

      <div className="signup-form-group">
        <label className="signup-form-label">Car Brand</label>
        <input
          name="carBrand"
          type="text"
          required
          value={formData.carBrand}
          onChange={handleChange}
          className={`signup-form-input ${errors.carBrand ? "error" : ""}`}
          placeholder="e.g., Maruti, Honda, Hyundai"
        />
        {errors.carBrand && (
          <span className="error-message">{errors.carBrand}</span>
        )}
      </div>

      <div className="signup-form-group">
        <label className="signup-form-label">Car Model</label>
        <input
          name="carModel"
          type="text"
          required
          value={formData.carModel}
          onChange={handleChange}
          className={`signup-form-input ${errors.carModel ? "error" : ""}`}
          placeholder="e.g., Swift, City, Creta"
        />
        {errors.carModel && (
          <span className="error-message">{errors.carModel}</span>
        )}
      </div>

      <div className="checkbox-group">
        <input type="checkbox" required className="form-checkbox" />
        <label className="checkbox-label">
          I agree to the Terms of Service and Privacy Policy
        </label>
      </div>

      <div className="vehicle-note">
        <div className="vehicle-icon">
          <FaCar />
        </div>
        <p>This helps us provide the best service for your vehicle</p>
      </div>
    </>
  );

  return (
    <div className="signup-container">
      <div className="signup-content">
        {/* Left Side - Form */}
        <div className="signup-form-side">
          <div className="signup-form-card">
            {/* Progress Indicator */}
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
              <div className="progress-text">Step {currentStep} of 3</div>
            </div>

            {/* Form Header */}
            <div className="signup-form-header">
              <h2 className="signup-form-title">
                {currentStep === 1 && "Account Information"}
                {currentStep === 2 && "Service Location"}
                {currentStep === 3 && "Vehicle Details"}
              </h2>
              <p className="signup-form-subtitle">
                {currentStep === 1 && "Create your MECHO account"}
                {currentStep === 2 && "Where should we come?"}
                {currentStep === 3 && "Tell us about your car"}
              </p>
            </div>

            {/* Form Content */}
            <form
              className="signup-auth-form"
              onSubmit={
                currentStep === 3 ? handleSubmit : (e) => e.preventDefault()
              }
            >
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              {/* Navigation Buttons */}
              <div className="signup-form-navigation">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="signup-btn-back"
                  >
                    Back
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="signup-btn-next"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="signup-btn-submit"
                    disabled={loading}
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>
                )}
              </div>
            </form>

            {/* Sign In Link */}
            <div className="signup-form-link">
              <p>
                Already have an account? <Link to="/signin">Sign In</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Panel */}
        <div className="signup-hero-side">
          <div className="signup-hero-content">
            <div className="signup-hero-icon">
              <FaCar />
            </div>
            <h3 className="signup-hero-title">Premium Doorstep Car Wash</h3>
            <p className="signup-hero-subtitle">Fast, Convenient & Trusted</p>
            <div className="signup-hero-features">
              <div className="signup-feature-item">
                <span className="feature-icon">
                  <AiOutlineThunderbolt />
                </span>
                <span>15-minute express service</span>
              </div>
              <div className="signup-feature-item">
                <span className="feature-icon">
                  <MdOutlineWaterDrop />
                </span>
                <span>Water-efficient cleaning</span>
              </div>
              <div className="signup-feature-item">
                <span className="feature-icon">
                  <IoHomeOutline />
                </span>
                <span>Doorstep convenience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
