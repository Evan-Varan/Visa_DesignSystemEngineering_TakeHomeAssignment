import React, { useState } from "react";
import AgentChatInterface from "./InputSection/MockAIAgent/AgentChatInterface";
import OutputSection from "./OutputSection/OutputSection";
import { NavBar } from "./Navbar";
import Tutorial from "./Tutorial";
import { DefaultFooter } from "./OutputSection/VisaComponents/VisaIndividualComponents/Footer";

const BuildPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <NavBar />
      <Tutorial />
      <div style={{ display: "flex", height: "calc(100vh - 200px)", gap: "24px", padding: "20px", maxWidth: "1400px", margin: "0 auto", position: "relative"}}>
        <AgentChatInterface setSearchTerm={setSearchTerm} />
        <OutputSection searchTerm={searchTerm} />
      </div>
      <DefaultFooter />
    </div>
  );
};

export default BuildPage; 