import React from "react";
import { CombindedComponents } from "./visaComponentExamples";
import type { CombindedComponent, Component } from "./visaComponentExamples";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CodeWrapper/CodeWrapperComponents/CopyButton";
import CodeBlockWrapper from "./CodeWrapper/CodeBlockWrapper";
const sectionStyle = {
  border: '1px solid #e5e7eb',
  borderRadius: 12,
  background: '#fff',
  padding: '24px 20px',
  marginBottom: 32,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
};

const partTitleStyle = {
  fontSize: 16,
  fontWeight: 600,
  margin: '18px 0 8px 0',
  color: '#1a237e',
};

function OutputSection({ searchTerm }: { searchTerm: string }) {
  // Find the combined component by name (case-insensitive)
  const combined = CombindedComponents.find(
    (c: CombindedComponent) => c.name.toLowerCase() === searchTerm.toLowerCase()
  );

  if (combined) {
    const CombinedPreview = combined.combindedPreview;
    return (
      <div>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Combined Preview</h2>
          <CombinedPreview />
        </div>
        <div style={sectionStyle}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>Combined Code</h3>
          <CodeBlockWrapper code={combined.combindedCode} title={combined.name} />
        </div>
        <div style={sectionStyle}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 18 }}>Individual Parts</h3>
          {combined.individualComponents.map((part: Component) => {
            const PartPreview = part.preview;
            return (
              <div style={{ marginBottom: 24 }} key={part.name}>
                <div style={partTitleStyle}>{part.name}</div>
                <PartPreview />
                <CodeBlockWrapper code={part.code} title={part.name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Placeholder for other search terms
  return null;
}

export default OutputSection;
