import { Typography } from "@visa/nova-react";
import { VisaArtificialIntelligenceLow } from "@visa/nova-icons-react";

function OutputHeader() {
  return (
    <div style={{padding: "20px 24px", borderBottom: "2px solid #e5e7eb", backgroundColor: "white", color: "#142787",borderRadius: "12px 12px 0 0"}}>
      <Typography variant="headline-3" tag="h3" style={{display: "flex", alignItems: "center", gap: 8}} 
      className="visa-design-ai-assistant">  
        <VisaArtificialIntelligenceLow />
        Component Output
      </Typography>
    </div>
  );
}

export default OutputHeader; 