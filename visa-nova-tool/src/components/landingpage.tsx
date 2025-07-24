import React, { useState } from "react";
import OutputSection from "./OutputSection/OuputSection";
import "../App.css"; // Use global stylesheet for new classes
import { Button } from '@visa/nova-react';
import { Link } from 'react-router-dom';
import { NavBar } from "./Navbar";

const LandingPage: React.FC = () => {

  return (
    <div className="vn-landing-root">
      <NavBar />

      {/* Hero Section */}
      <section className="vn-hero">
        <h1 className="vn-hero__title">Build with Visa Nova Components</h1>
        <p className="vn-hero__desc">
          Search, preview, and copy Visa Nova components for faster and consistent UI development.
        </p>
        <Link to="/build">
          <button className="vn-btn vn-btn--primary vn-hero__cta">Try It Now</button>
        </Link>
        <Link to="/tutorial">
          <button className="visa-button visa-button--secondary vn-hero__cta">View Tutorial</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="vn-footer">
        © 2025 Visa Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
