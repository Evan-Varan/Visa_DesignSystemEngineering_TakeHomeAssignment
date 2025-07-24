import React, { useState } from 'react';
import { FiSave } from "react-icons/fi";


function SaveSnippetButton({snippet , title}: {snippet: string, title: string}) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveSnippet = () => {
    // Get saved snippets or start empty
    const savedSnippets = JSON.parse(localStorage.getItem('savedSnippets') || '[]');

    savedSnippets.push({ title, code: snippet });

    // Save back to localStorage
    localStorage.setItem('savedSnippets', JSON.stringify(savedSnippets));

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <button 
    style={{
        display: "flex",
        alignItems: "center",
        gap: " 6px",
        background: "#2d2d2d",
        color: "#fff",
        border: "1px solid #444",
        borderRadius: "6px",
        padding: "6px 10px",
        cursor: "pointer",
        fontSize: "14px",
      }}
      onClick={handleSaveSnippet}
    >
    <FiSave size={16} />
    {isSaved ? "Saved!" : "Save Snippet"}
    </button>
  );
}

export default SaveSnippetButton;