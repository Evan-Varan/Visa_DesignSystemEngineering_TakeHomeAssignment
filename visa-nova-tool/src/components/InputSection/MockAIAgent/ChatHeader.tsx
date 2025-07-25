import { GenericMessageTiny } from "@visa/nova-icons-react";
import { Typography } from "@visa/nova-react";

function ChatHeader() {
  return (
    <div style={{padding: "20px 24px", borderBottom: "2px solid #e5e7eb", backgroundColor: "#142787", color: "white",borderRadius: "12px 12px 0 0"}}>
      <Typography variant="headline-3" tag="h3" style={{display: "flex", alignItems: "center", gap: 8}} 
      className="visa-design-ai-assistant">  
        <GenericMessageTiny />
        Visa Design AI Assistant
      </Typography>
    </div>
  );
}

export default ChatHeader; 