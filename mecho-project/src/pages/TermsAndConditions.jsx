import React from "react";
import "./TermsAndConditions.css";
import SEO from "../components/SEO";

const TermsAndConditions = () => {
  const termsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - MECHO Car Wash",
    "description": "Read MECHO Car Wash terms and conditions for our Water - Efficient car wash services. Learn about our service agreement, booking policies, and liability terms.",
    "url": "https://mecho.in/terms",
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
          "name": "Terms & Conditions",
          "item": "https://mecho.in/terms"
        }
      ]
    }
  };

  return (
    <div className="terms-container">
      <SEO
        title="Terms & Conditions - MECHO Car Wash | Service Agreement & Policies"
        description="Read MECHO Car Wash terms and conditions for our Water - Efficient car wash services. Learn about our service agreement, booking policies, and liability terms."
        keywords="MECHO terms and conditions, car wash service agreement, Water - Efficient car wash policies, MECHO liability terms"
        url="https://mecho.in/terms"
        structuredData={termsStructuredData}
      />
      <div className="terms-content">
        <h1 className="terms-title">Terms & Conditions – MECHO Car Wash</h1>

        <section className="terms-section">
          <h2 className="section-heading">Service Agreement</h2>
          <p>
            By booking our doorstep car wash services, you agree to these terms
            and conditions. MECHO Car Wash provides professional cleaning
            services at your specified location using eco-friendly products and
            advanced techniques.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-heading">Booking & Cancellation Rules</h2>
          <p>
            Bookings can be made through our website, mobile app, or phone.
            Cancellations must be made at least 2 hours before the scheduled
            service time. Please note that payments are non-refundable, and no
            money will be returned for cancelled bookings, regardless of the
            cancellation time.
          </p>{" "}
          <p>
            Rescheduling is allowed up to 2 times per booking without additional
            charges. Further changes may result in rebooking fees.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-heading">Technician Responsibilities</h2>
          <p>
            Our trained technicians will arrive at the scheduled time with all
            necessary equipment and supplies. They will perform services with
            professional care and attention to detail. Any pre-existing damage
            will be documented before service begins.
          </p>
          <p>
            Technicians are authorized to refuse service if vehicle conditions
            pose safety risks or if weather conditions are unsuitable for
            quality service delivery.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-heading">Customer Responsibilities</h2>
          <p>
            Customers must provide safe and accessible parking space for service
            delivery. Remove all personal belongings from the vehicle before
            service. Ensure someone responsible is present during service or
            provide clear instructions.
          </p>
          <p>
            Inform us of any special requirements, allergies, or vehicle
            modifications that may affect the cleaning process.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-heading">Payment Policy</h2>
          <p>
            Payment is due upon service completion unless prior arrangements are
            made. We accept cash, credit/debit cards, UPI, and digital wallets.
            Prices are subject to change with 30 days notice.
          </p>
          <p>
            Additional charges may apply for heavily soiled vehicles or extra
            services requested during the appointment.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-heading">Liability Limitations</h2>
          <p>
            MECHO Car Wash maintains comprehensive insurance coverage. Our
            liability is limited to the actual damage caused by our negligence,
            not exceeding the service cost. We are not responsible for
            pre-existing damage, mechanical issues, or items left in the
            vehicle.
          </p>
          <p>
            MECHO Car Wash is not liable for any scratches, dents, or marks that
            appear on the vehicle before or after the service. Any such issues
            are considered pre-existing or unrelated to our service, and no
            compensation or responsibility will be taken by the company.
          </p>
          <p>
            Claims must be reported within 24 hours of service completion with
            photographic evidence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
