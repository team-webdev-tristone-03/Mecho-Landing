import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const plans = [
    {
      name: "Silver",
      price: "₹499",
      features: ["4 exterior wash", "1 interior wash"],
      popular: false
    },
    {
      name: "Gold",
      price: "₹899",
      features: ["8 exterior wash", "1 interior wash", "Tyre cleaning"],
      popular: true
    },
    {
      name: "Platinum",
      price: "₹1499",
      features: ["15 exterior wash", "1 interior wash", "Tyre cleaning", "Polish"],
      popular: false
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowCalendar(true);
  };

  return (
    <div className="pricing-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Choose Your Plan</h1>
          <p className="page-subtitle">Monthly subscription plans for regular car care</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <p className="plan-period">per month</p>

              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <button 
                onClick={() => handlePlanSelect(plan)}
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} plan-btn`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {showCalendar && selectedPlan && (
          <div className="calendar-section">
            <h2 className="calendar-title">
              Schedule Your {selectedPlan.name} Plan
            </h2>
            
            <div className="calendar-content">
              <div className="calendar-picker">
                <h3 className="calendar-subtitle">Select Wash Dates</h3>
                <div className="calendar-grid">
                  <p className="calendar-info">Choose your preferred wash days for the month:</p>
                  <div className="calendar-days">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="day-header">{day}</div>
                    ))}
                    {Array.from({length: 30}, (_, i) => (
                      <button key={i} className="day-btn">
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="plan-summary">
                <h3 className="summary-title">Plan Summary</h3>
                <div className="summary-card">
                  <div className="summary-row">
                    <span>Plan:</span>
                    <span className="summary-value">{selectedPlan.name}</span>
                  </div>
                  <div className="summary-row">
                    <span>Price:</span>
                    <span className="summary-price">{selectedPlan.price}/month</span>
                  </div>
                  <div className="summary-features">
                    <h4 className="features-title">Includes:</h4>
                    <ul className="features-list">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="btn btn-primary book-btn">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;