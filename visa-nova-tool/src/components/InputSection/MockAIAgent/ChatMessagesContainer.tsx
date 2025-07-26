import { useRef, useEffect } from "react";
import ChatMessage, { type ChatMessage as ChatMessageType } from "./ChatMessage";

function ChatMessagesContainer({ messages }: {messages: ChatMessageType[]}) {
  
  //Scroll bar that tracks if we try to go past the bottom of the messages
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const container = messagesEndRef.current?.parentElement;
    if (container && messagesEndRef.current) {
      container.scrollTop = container.scrollHeight;
    }
  };
  
//scroll to bottom of the ai agentcontainer when new component is loaded
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div 
      aria-live="polite"
      aria-label="Chat messages"
      style={{
        flex: "1", 
        overflowY: "auto", 
        padding: "20px", 
        backgroundColor: "#f8fafc",
        minHeight: "300px",
        maxHeight: "500px",
        scrollbarWidth: "thin",
        scrollbarColor: "#cbd5e1 #f1f5f9"
      }}
    >
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessagesContainer; 