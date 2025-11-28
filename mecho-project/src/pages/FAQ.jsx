import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does doorstep car wash work?",
      answer:
        "Our professional team comes to your location with all necessary equipment and eco-friendly products. We provide Limited Water or minimal water washing services right at your doorstep, saving you time and effort.",
    },
    {
      question: "Is Limited Water wash safe for my car?",
      answer:
        "Yes, our Limited Water wash products are specially formulated to be safe for all car surfaces. They contain lubricants that lift dirt safely without scratching your vehicle's paint.",
    },
    {
      question: "How to reschedule my booking?",
      answer:
        "You can reschedule your booking by calling our customer service or using our mobile app. We require at least 2 hours notice for rescheduling to avoid any charges.",
    },
    {
      question: "What services are included in the basic package?",
      answer:
        "Our basic package includes exterior wash, tire cleaning, window cleaning, and interior vacuuming. Dashboard cleaning and air freshener are also included.",
    },
    {
      question: "How long does the service take?",
      answer:
        "A standard car wash takes approximately 30-45 minutes depending on the size of your vehicle and the package selected.",
    },
    {
      question: "Do you provide services in bad weather?",
      answer:
        "We provide services in light rain but may reschedule during heavy rain, storms, or extreme weather conditions for safety reasons.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, UPI, and digital wallets. Payment must be completed before we provide the service.",
    },
    {
      question: "Do I need to be present during the service?",
      answer:
        "While not mandatory, we recommend being present during the service. If you can't be there, please ensure someone responsible is available to oversee the work.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search your questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="faq-content">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{faq.question}</h3>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
