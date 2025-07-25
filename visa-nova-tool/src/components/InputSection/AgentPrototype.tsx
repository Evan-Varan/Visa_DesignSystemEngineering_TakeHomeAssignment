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
    <div className="v-flex v-justify-content-center v-align-items-center v-py-20">
      <div className="v-content-card v-content-card-body" style={{ maxWidth: 600, width: "100%" }}>
        <h1 className="v-label v-mb-4">Visa Design Assistant (Prototype)</h1>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your UI component..."
          className="v-input v-mb-3"
          style={{ width: "100%" }}
        />
        <button
          onClick={handleGenerate}
          className="v-button v-button-large v-button-primary v-mb-4"
        >
          Generate
        </button>
        {loading && <p className="v-label v-mt-3">Thinking...</p>}
        {result && <OutputSection searchTerm={result} />}
      </div>
    </div>
  );
}
