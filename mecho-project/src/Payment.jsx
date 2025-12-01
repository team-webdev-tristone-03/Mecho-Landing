import React from "react";

// Razorpay Script Loader
const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Payment = ({ planName, planPrice }) => {
  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID

      
      amount: planPrice * 100, // Convert rupees to paise
      currency: "INR",
      name: "Mecho Car Wash",
      description: `${planName} Subscription Plan`,
      image: "/logo.png",

      handler: function (response) {
        alert(
          `Payment Successful! 
           Payment ID: ${response.razorpay_payment_id}`
        );
      },

      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9876543210",
      },

      theme: {
        color: "#ff7a00",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        width: "100%",
        padding: "12px 0",
        background: "#ff7a00",
        border: "none",
        color: "white",
        fontSize: "16px",
        borderRadius: "8px",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      Pay ₹{planPrice}
    </button>
  );
};

export default Payment;
