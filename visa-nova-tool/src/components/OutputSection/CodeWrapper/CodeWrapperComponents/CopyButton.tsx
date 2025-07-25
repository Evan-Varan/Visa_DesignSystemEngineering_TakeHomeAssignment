import React, { useState } from "react";
import { VisaCopyTiny } from "@visa/nova-icons-react";
import { Button } from "@visa/nova-react";

function CopyButton({ text }: {text: string}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // copy option reset after 2 seconds
  };

  return (
    <Button
      onClick={handleCopy}
      buttonSize="small"
      style={{
        background: "#2d2d2d",
        color: "#fff",
        border: "1px solid #444",
        borderRadius: "6px",
      }}
    >
      <VisaCopyTiny style={{ 
        color: '#ffffff', 
        filter: 'brightness(0) invert(1)' //AI suggested fix to change the color of the icon to white
      }} />
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}

export default CopyButton;
