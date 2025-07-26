import React, { useState } from 'react';
import { VisaFileDownloadTiny } from "@visa/nova-icons-react";
import { Button } from "@visa/nova-react";

function DownloadSnippetButton({snippet , title}: {snippet: string, title: string}) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadSnippet = (snippet: string, title: string) => {
    const blob = new Blob([snippet], { type: "text/plain;charset=utf-8" }); //create large binary object (blob)
    const link = document.createElement("a"); //create a download link element
    link.href = URL.createObjectURL(blob); //turns blob into a url
    link.download = title; //sets the download filename
    document.body.appendChild(link); //adds link to the document
    link.click(); //triggers file download
    document.body.removeChild(link); //removes link from the document

    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 2000);
  };

  return (
    <Button 
      buttonSize="small"
      aria-label={isDownloaded ? "Snippet downloaded successfully" : "Download snippet as TypeScript file"}
      style={{
        background: "#2d2d2d",
        color: "#fff",
        border: "1px solid #444",
        borderRadius: "6px",
      }}
      onClick={() => handleDownloadSnippet(snippet, `${title}.tsx`)}
    >
      <VisaFileDownloadTiny style={{ 
        color: '#ffffff', 
        filter: 'brightness(0) invert(1)' //AI suggested fix to change the color of the icon to white
      }} />
      {isDownloaded ? "Downloaded" : "Download Snippet"}
    </Button>
  );
}

export default DownloadSnippetButton;