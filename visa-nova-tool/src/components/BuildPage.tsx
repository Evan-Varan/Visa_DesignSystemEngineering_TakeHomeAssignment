import React, { useState } from "react";
import AgentChatInterface from "./InputSection/MockAIAgent/AgentChatInterface";
import OutputSection from "./OutputSection/OutputSection";
import { NavBar } from "./VisaNavbar";
import Tutorial from "./Tutorial";

const BuildPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <NavBar />
      <Tutorial />
      <div style={{ display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 120px)", 
        minHeight: "600px",
        gap: "1.5rem", 
        padding: "2rem", 
        maxWidth: "87.5rem", 
        margin: "0 auto", 
        position: "relative"
      }}>
        <AgentChatInterface setSearchTerm={setSearchTerm} />
        <OutputSection searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default BuildPage; 