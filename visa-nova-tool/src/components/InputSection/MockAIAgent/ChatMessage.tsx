import { GenericMessageTiny, GenericAccountTiny } from "@visa/nova-icons-react";
import { Typography } from "@visa/nova-react";

export interface ChatMessage {
  text: string;
  isUser: boolean;
}

function ChatMessage({ message }: { message: ChatMessage }) {

//Styles for chat messages
  const messageBubbleStyle = {
    backgroundColor: message.isUser ? '#142787' : 'white',
    color: message.isUser ? 'white' : '#374151',
    padding: "12px 16px",
    borderRadius: message.isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
    border: '1px solid #e5e7eb'
  }

  const iconStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#142787",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }   

  return (
    <div style={{display: "flex", marginBottom: "16px", justifyContent: message.isUser ? 'flex-end' : 'flex-start'}}>
      <div style={{display: "flex", alignItems: "flex-start", gap: "8px", maxWidth: "80%" }}>

        {/* AI icon */}
        {!message.isUser && (   
          <div style={iconStyle}>
            <GenericMessageTiny style={{ color: 'white'}} />
          </div>
        )}
        
        {/* Message bubble for AI and user */}
        <div style={messageBubbleStyle}>
          <Typography variant="body-2" style={{ margin: 0 }}>
            {message.text}
          </Typography>
        </div>
        
        {/* User icon */}
        {message.isUser && (
          <div style={iconStyle}>
            <GenericAccountTiny style={{ color: 'white'}} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage; 