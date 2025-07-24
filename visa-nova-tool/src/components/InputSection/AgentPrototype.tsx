import React, { useState } from "react";
import OutputSection from "./OutputSection/OuputSection";

export default function AgentPrototype() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setResult("responsive login form with remember me"); // Hardcoded key
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Visa Design Assistant (Prototype)</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your UI component..."
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "12px",
          fontSize: "16px",
        }}
      />
      <button
        onClick={handleGenerate}
        style={{
          padding: "10px 16px",
          background: "#0051ba",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
        }}
      >
        Generate
      </button>

      {loading && <p>Thinking...</p>}

      {result && <OutputSection searchTerm={result} />}
    </div>
  );
}
