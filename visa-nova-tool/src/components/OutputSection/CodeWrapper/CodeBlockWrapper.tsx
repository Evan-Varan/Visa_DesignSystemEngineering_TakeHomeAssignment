import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CodeWrapperComponents/CopyButton";
import SaveSnippetButton from "./CodeWrapperComponents/SaveSnippetButton";
import DownloadSnippetButton from "./CodeWrapperComponents/DownloadSnippetButton";



function CodeBlockWrapper ({code , title}: {code: string, title: string}){
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
        marginBottom: "16px",
        backgroundColor: "#1e1e1e",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#2d2d2d",
          color: "#fff",
          padding: "8px 12px",
          fontSize: "14px",
          fontFamily: "monospace",
        }}
      >
        <span>tsx</span>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <CopyButton text={code} />
          <SaveSnippetButton snippet={code} title={title} />
          <DownloadSnippetButton snippet={code} title={title} />
        </div>
      </div>

      {/* Syntax highlighted code */}
      <SyntaxHighlighter
        language="tsx"
        style={oneDark}
        showLineNumbers
        customStyle={{
          margin: 0,
          padding: "16px",
          fontSize: "14px",
          borderRadius: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlockWrapper;
