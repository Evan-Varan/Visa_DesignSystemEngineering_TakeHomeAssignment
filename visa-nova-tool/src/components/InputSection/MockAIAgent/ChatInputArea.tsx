import { useState } from "react";
import { VisaSendTiny } from "@visa/nova-icons-react";
import { InputContainer, Input, Button } from "@visa/nova-react";

function ChatInputArea({ onSend }: { onSend: (message: string) => void }) {
  const [input, setInput] = useState("");

  //For button click
  const handleSend = () => {
    if (input.trim() === "") return;
    onSend(input);
    setInput("");
  };

  //Incase user wants to send message with enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{ padding: "20px", borderTop: "1px solid #e5e7eb", backgroundColor: "white" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
        <InputContainer style={{ flex: 1 }}>
          <Input
            type="text"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message here..."
            aria-label="Chat message input"
            aria-describedby="chat-input-description"
            // disabled={disabled}
          />
        </InputContainer>
        <div id="chat-input-description" style={{ display: "none" }}>
          Type your message and press Enter or click the send button to submit
        </div>
        <Button 
          buttonSize="large" 
          onClick={handleSend}
          disabled={input.trim() === ""}
          aria-label="Send message"
          style={{
            backgroundColor: "#142787",
            borderColor: "#142787"
          }}
        >
          <VisaSendTiny />
        </Button>
      </div>
    </div>
  );
}

export default ChatInputArea; 