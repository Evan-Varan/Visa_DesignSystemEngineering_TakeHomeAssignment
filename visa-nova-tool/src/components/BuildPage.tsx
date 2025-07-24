import React, { useState } from "react";
import OutputSection from "./OutputSection/OuputSection";
import "../App.css";
import { Button } from '@visa/nova-react';
import { Link } from 'react-router-dom';
import InputSection from "./InputSection/InputSection";
import { NavBar } from "./Navbar";

const BuildPage: React.FC = () => {

  return (

    <div className="vn-landing-root">
      <NavBar />
      <InputSection />

      {/* Footer */}
      <footer className="vn-footer">
        © 2025 Visa Inc. All rights reserved.
      </footer>
    </div>

  );
};

export default BuildPage; 