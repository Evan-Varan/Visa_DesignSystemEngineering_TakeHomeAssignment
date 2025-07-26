import { Typography } from "@visa/nova-react";
import { GenericMessageTiny } from "@visa/nova-icons-react";

function EmptyOutputDisplay() {
    return (
        <div style={{ height: "100%", color: "#6b7280", textAlign: "center" }}>
          <GenericMessageTiny/>
          <Typography variant="body-1" style={{ marginBottom: "8px" }}>
            Start a conversation with the AI Assistant
          </Typography>
          <Typography variant="body-2" style={{ opacity: 0.7 }}>
            Ask for components like "responsive login form" or "search bar"
          </Typography>
        </div>
      );
    }

export default EmptyOutputDisplay;