import React, { useState } from 'react';
import { FiDownload} from "react-icons/fi";


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
      onClick={() => handleDownloadSnippet(snippet, `${title}.tsx`)}
    >
    <FiDownload size={16} />
    {isDownloaded ? "Downloaded" : "Download Snippet"}
    </button>
  );
}

export default DownloadSnippetButton;