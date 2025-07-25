import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessagesContainer from "./ChatMessagesContainer";
import ChatInputArea from "./ChatInputArea";
import { type ChatMessage } from "./ChatMessage";
import { ContentCard, ContentCardBody } from "@visa/nova-react";

function AgentChatInterface({ setSearchTerm }: { setSearchTerm: (term: string) => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: 'Hello! I\'m your Visa Design AI Assistant. I can help you build Visa components. Try asking for: "responsive login form with remember me", "search bar", "payment card form", "news letter", or "2fa verification form".',
      isUser: false
    }
  ]);

  const handleSendMessage = (message: string) => {
    const userMessage: ChatMessage = {
      text: message,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);

    const inputText = message.trim().toLowerCase();
    let aiResponse = "";
    let searchTerm = "";

    if (inputText === "responsive login form with remember me" || 
        inputText === "search bar" || 
        inputText === "payment card form" || 
        inputText === "news letter" || 
        inputText === "2fa verification form") {
      aiResponse = `Here's a simple ${message} using Visa Nova design components...`;
      searchTerm = message;
    } else {
      aiResponse = `I couldn't find a match for "${message}". Try one of these examples: "responsive login form with remember me", "search bar", "payment card form", "news letter", or "2fa verification form".`;
    }

    const aiMessage: ChatMessage = {
      text: aiResponse,
      isUser: false
    };

    setMessages(prev => [...prev, aiMessage]);
    setSearchTerm(searchTerm);
  };

  return (
    <div style={{flex: "1", display: "flex", flexDirection: "column", minWidth: "400px", maxWidth: "500px", height: "100%"}}>
      <ContentCard style={{height: "100%", display: "flex", flexDirection: "column", border: "1px solid #e5e7eb", borderRadius: "12px"}}>
        <ContentCardBody style={{flex: "1", display: "flex", flexDirection: "column", padding: "0"}}>
          <ChatHeader />
          <ChatMessagesContainer 
            messages={messages} 
          />
          <ChatInputArea onSend={handleSendMessage} />
        </ContentCardBody>
      </ContentCard>
    </div>
  );
}

export default AgentChatInterface; 