import React, { useState } from "react";
import { FiCopy } from "react-icons/fi"; // Feather Icons - clean & professional

function CopyButton({ text }: {text: string}) {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // copy option reset after 2 seconds
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "#2d2d2d",
        color: "#fff",
        border: "1px solid #444",
        borderRadius: "6px",
        padding: "6px 10px",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      <FiCopy size={16} />
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default CopyButton;
