import React, { useState } from "react";
import "./Pricing.css";
import SEO from "../components/SEO";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [currentDate] = useState(new Date());
  const [viewingMonth, setViewingMonth] = useState(0);
  const [showTimeSelection, setShowTimeSelection] = useState(false);
  const [selectedTimes, setSelectedTimes] = useState({});

  const plans = [
    {
      name: "Silver",
      price: "₹499",
      features: ["4 exterior wash", "1 interior wash"],
      popular: false,
    },
    {
      name: "Gold",
      price: "₹899",
      features: ["8 exterior wash", "1 interior wash", "Tyre cleaning"],
      popular: true,
    },
    {
      name: "Platinum",
      price: "₹1499",
      features: [
        "15 exterior wash",
        "1 interior wash",
        "Tyre cleaning",
        "Polish",
      ],
      popular: false,
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const getPlanLimits = () => {
    switch (selectedPlan?.name) {
      case "Silver":
        return 4;
      case "Gold":
        return 8;
      case "Platinum":
        return 15;
      default:
        return 0;
    }
  };

  const getDisplayMonth = () => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() + viewingMonth);
    return date;
  };

  const isDateDisabled = (day) => {
    const displayMonth = getDisplayMonth();
    const selectedDate = new Date(
      displayMonth.getFullYear(),
      displayMonth.getMonth(),
      day
    );
    return selectedDate.getDay() === 0;
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowCalendar(true);
    setSelectedDates([]);
    setShowTimeSelection(false);
    setSelectedTimes({});
  };

  const handleDateSelect = (dateKey, day) => {
    if (isDateDisabled(day)) return;

    const maxDates = getPlanLimits();

    setSelectedDates((prev) => {
      if (prev.includes(dateKey)) {
        return prev.filter((d) => d !== dateKey);
      } else if (prev.length < maxDates) {
        return [...prev, dateKey];
      } else {
        const newDates = [...prev.slice(1), dateKey];
        return newDates;
      }
    });
  };

  const handleTimeSelect = (date, time) => {
    setSelectedTimes((prev) => ({
      ...prev,
      [date]: time,
    }));
  };

  const isBookButtonEnabled =
    selectedDates.length === getPlanLimits() &&
    selectedDates.every((date) => selectedTimes[date]);

  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MECHO Car Wash Pricing Plans",
    description:
      "Choose from our affordable Water - Efficient car wash subscription plans. Silver (₹499), Gold (₹899), and Platinum (₹1499) monthly plans available.",
    url: "https://mecho.in/pricing",
    mainEntity: {
      "@type": "ItemList",
      name: "Car Wash Subscription Plans",
      itemListElement: [
        {
          "@type": "Product",
          name: "Silver Plan",
          description: "4 exterior wash, 1 interior wash per month",
          offers: {
            "@type": "Offer",
            price: "499",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@type": "Product",
          name: "Gold Plan",
          description:
            "8 exterior wash, 1 interior wash, tyre cleaning per month",
          offers: {
            "@type": "Offer",
            price: "899",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@type": "Product",
          name: "Platinum Plan",
          description:
            "15 exterior wash, 1 interior wash, tyre cleaning, polish per month",
          offers: {
            "@type": "Offer",
            price: "1499",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://mecho.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pricing",
          item: "https://mecho.in/pricing",
        },
      ],
    },
  };

  return (
    <div className="pricing-page">
      <SEO
        title="MECHO Car Wash Pricing Plans | Affordable Water - Efficient Car Wash Subscriptions"
        description="Choose from our affordable Water - Efficient car wash subscription plans. Silver (₹499), Gold (₹899), and Platinum (₹1499) monthly plans available."
        keywords="car wash pricing, Water - Efficient car wash plans, car wash subscription, affordable car wash, MECHO pricing, car wash packages"
        url="https://mecho.in/pricing"
        structuredData={pricingStructuredData}
      />
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Choose Your Plan</h1>
          <p className="page-subtitle">
            Monthly subscription plans for regular car care
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
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
                className="btn btn-primary plan-btn"
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
              <div className="top-cards">
                <div className="calendar-picker card">
                  <div className="calendar-header">
                    <h3 className="calendar-subtitle">
                      Select {getPlanLimits()} Wash Dates
                    </h3>
                    <div className="selection-counter">
                      <span className="counter-text">
                        {selectedDates.length}/{getPlanLimits()}
                      </span>
                    </div>
                  </div>
                  <div className="calendar-grid">
                    <p className="calendar-info">
                      Sundays are disabled for all plans
                    </p>
                    <div className="calendar-navigation">
                      <button
                        className="nav-btn"
                        onClick={() =>
                          setViewingMonth(Math.max(0, viewingMonth - 1))
                        }
                        disabled={viewingMonth === 0}
                      >
                        ←
                      </button>
                      <h4 className="month-title">
                        {getDisplayMonth().toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </h4>
                      <button
                        className="nav-btn"
                        onClick={() =>
                          setViewingMonth(Math.min(2, viewingMonth + 1))
                        }
                        disabled={viewingMonth === 2}
                      >
                        →
                      </button>
                    </div>
                    <div className="calendar-days">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day) => (
                          <div key={day} className="day-header">
                            {day}
                          </div>
                        )
                      )}
                      {(() => {
                        const displayMonth = getDisplayMonth();
                        const daysInMonth = new Date(
                          displayMonth.getFullYear(),
                          displayMonth.getMonth() + 1,
                          0
                        ).getDate();
                        const firstDay = new Date(
                          displayMonth.getFullYear(),
                          displayMonth.getMonth(),
                          1
                        ).getDay();

                        const days = [];

                        for (let i = 0; i < firstDay; i++) {
                          days.push(
                            <div key={`empty-${i}`} className="day-empty"></div>
                          );
                        }

                        for (let day = 1; day <= daysInMonth; day++) {
                          const dateKey = `${displayMonth.getMonth()}-${day}`;
                          const isDisabled = isDateDisabled(day);
                          const isSelected = selectedDates.includes(dateKey);

                          days.push(
                            <button
                              key={day}
                              className={`day-btn ${
                                isDisabled ? "disabled" : ""
                              } ${isSelected ? "selected" : ""}`}
                              onClick={() => handleDateSelect(dateKey, day)}
                              disabled={isDisabled}
                            >
                              <span className="day-number">{day}</span>
                              {isSelected && (
                                <span className="selected-indicator">✓</span>
                              )}
                            </button>
                          );
                        }

                        return days;
                      })()}
                    </div>
                  </div>
                </div>

                <div className="time-selection card">
                  <h3 className="calendar-subtitle">
                    Select Time for Each Date
                  </h3>
                  <div className="time-grid">
                    {selectedDates.length > 0 ? (
                      selectedDates.map((dateKey) => {
                        const [month, day] = dateKey.split("-");
                        const monthDate = new Date(
                          currentDate.getFullYear(),
                          parseInt(month),
                          1
                        );
                        const monthName = monthDate.toLocaleDateString(
                          "en-US",
                          { month: "short" }
                        );

                        return (
                          <div key={dateKey} className="time-row">
                            <span className="date-label">
                              {monthName} {day}:
                            </span>
                            <select
                              className="time-select"
                              value={selectedTimes[dateKey] || ""}
                              onChange={(e) =>
                                handleTimeSelect(dateKey, e.target.value)
                              }
                            >
                              <option value="">Select time</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                          </div>
                        );
                      })
                    ) : (
                      <div className="time-placeholder">
                        <p>Please select dates first to choose time slots</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="plan-summary card centered-card">
                <h3 className="summary-title">Plan Summary</h3>
                <div className="summary-card">
                  <div className="summary-row">
                    <span>Plan:</span>
                    <span className="summary-value">{selectedPlan.name}</span>
                  </div>
                  <div className="summary-row">
                    <span>Price:</span>
                    <span className="summary-price">
                      {selectedPlan.price}/month
                    </span>
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

                <button
                  className={`btn book-btn ${
                    isBookButtonEnabled ? "btn-primary" : "btn-disabled"
                  }`}
                  disabled={!isBookButtonEnabled}
                >
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