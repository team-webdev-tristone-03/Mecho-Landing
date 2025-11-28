import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy – MECHO Car Wash</h1>
        
        <section className="privacy-section">
          <h2 className="section-heading">Data We Collect</h2>
          <p>We collect personal information including your name, phone number, email address, and location details when you book our services. Vehicle information such as make, model, and license plate may also be collected for service delivery purposes.</p>
          <p>We may collect usage data from our website and mobile app to improve user experience and service quality.</p>
        </section>

        <section className="privacy-section">
          <h2 className="section-heading">Why We Collect (Purpose)</h2>
          <p>Your personal information is used to schedule and deliver car wash services, process payments, and communicate service updates. We use contact details to confirm appointments and notify you of any changes.</p>
          <p>Data analysis helps us improve service quality, optimize routes, and develop new features for better customer experience.</p>
        </section>

        <section className="privacy-section">
          <h2 className="section-heading">Customer Consent</h2>
          <p>By using our services, you consent to the collection and use of your information as described in this policy. You can withdraw consent at any time by contacting our customer service team.</p>
          <p>We will request explicit consent for any new uses of your personal data not covered in this policy.</p>
        </section>

        <section className="privacy-section">
          <h2 className="section-heading">Third-Party Tools</h2>
          <p>We use trusted third-party services for payment processing, SMS notifications, and mapping services. These partners have their own privacy policies and security measures in place.</p>
          <p>We do not sell or rent your personal information to third parties for marketing purposes.</p>
        </section>

        <section className="privacy-section">
          <h2 className="section-heading">Data Security Practices</h2>
          <p>We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          <p>Our staff is trained on data protection practices and access to personal information is limited to authorized personnel only.</p>
        </section>

        <section className="privacy-section">
          <h2 className="section-heading">Cookies & Tracking</h2>
          <p>Our website uses cookies to enhance user experience, remember preferences, and analyze website traffic. You can control cookie settings through your browser preferences.</p>
          <p>We may use analytics tools to understand how customers interact with our services and improve our offerings.</p>
        </section>

        <section className="privacy-section">
          <h2 className="section-heading">User Rights</h2>
          <p>You have the right to access, update, or delete your personal information. You can request a copy of your data or ask us to correct any inaccuracies.</p>
          <p>To exercise these rights or for any privacy-related questions, contact us at privacy@mechocarwash.com or call our customer service line.</p>
        </section>
      </div>


    </div>
  );
};

export default PrivacyPolicy;