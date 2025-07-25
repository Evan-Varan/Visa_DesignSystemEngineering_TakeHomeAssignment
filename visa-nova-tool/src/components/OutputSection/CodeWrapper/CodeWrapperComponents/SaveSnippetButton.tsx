import React, { useState } from 'react';
import { VisaSaveTiny } from "@visa/nova-icons-react";
import { Button } from "@visa/nova-react";

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
    <Button 
      buttonSize="small"
      style={{
        background: "#2d2d2d",
        color: "#ffffff",
        border: "1px solid #444",
        borderRadius: "6px",
      }}
      onClick={handleSaveSnippet}
    >
      <VisaSaveTiny style={{ 
        color: '#ffffff', 
        filter: 'brightness(0) invert(1)' //AI suggested fix to change the color of the icon to white
      }} />
      {isSaved ? "Saved!" : "Save Snippet"}
    </Button>
  );
}

export default SaveSnippetButton;