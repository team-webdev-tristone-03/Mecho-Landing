import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { FAQ, TermsAndConditions, PrivacyPolicy } from "./pages";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;

































// I had an 3 types if pricing 
// 1.Silver , 2.Gold ,3.Platinum 
// 1 has ₹499
// per month

// 4 exterior wash
// 1 interior wash

// 2 has ₹899
// per month

// 8 exterior wash
// 1 interior wash
// Tyre cleaning

// 3 has ₹1499
// per month

// 15 exterior wash
// 1 interior wash
// Tyre cleaning
// Polish

// give me the prompt to use in Pricing.jsx when i click an Select 