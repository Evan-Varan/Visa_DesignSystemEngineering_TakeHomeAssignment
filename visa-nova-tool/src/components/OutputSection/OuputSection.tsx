import React from "react";
import { CombinedComponents } from "./visaComponentExamples";
import type { CombinedComponent, Component } from "./visaComponentExamples";
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
  const combined = CombinedComponents.find(
    (c: CombinedComponent) => c.name.toLowerCase() === searchTerm.toLowerCase()
  );

  if (combined) {
    const CombinedPreview = combined.combinedPreview;
    return (
      <div>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Combined Preview</h2>
          <CombinedPreview />
        </div>
        <div style={sectionStyle}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>Combined Code</h3>
          <CodeBlockWrapper code={combined.combinedCode} title={combined.name} />
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
