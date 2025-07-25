import React from "react";
import OutputSection from "./OutputSection/OuputSection";
import { Footer, Typography } from '@visa/nova-react';
import InputSection from "./InputSection/InputSection";
import { NavBar } from "./Navbar";
import Tutorial from "./Tutorial";

const BuildPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Tutorial />
      <InputSection />
      <Footer style={{ marginTop: 40, textAlign: 'center' }}>
        <Typography variant="body-2" colorScheme="subtle">
          © 2025 Visa Inc. All rights reserved.
        </Typography>
      </Footer>
    </div>
  );
};

export default BuildPage; 