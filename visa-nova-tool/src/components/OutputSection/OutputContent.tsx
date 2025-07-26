import { useRef } from "react";
import { VisaChevronDownTiny, VisaChevronUpTiny } from "@visa/nova-icons-react";
import { Typography } from "@visa/nova-react";
import { CombinedComponents } from "./VisaComponents/VisaComponentExamples";
import type { CombinedComponent, Component } from "./VisaComponents/VisaComponentExamples";
import CodeBlockWrapper from "./CodeWrapper/CodeBlockWrapper";


//Styles for all output content
const styles = {
  section: {
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    background: '#fff',
    padding: '24px 20px',
    marginBottom: 32,
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  clickable: {
    margin: '8px 0',
    color: '#142787',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#f9fafb',
    textDecoration: 'underline',
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.2s ease'
  },
};

function OutputContent({ searchTerm }: { searchTerm: string }) {
  const componentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  //Find the combined component by name (case-insensitive)
  const combined = CombinedComponents.find(
    (c: CombinedComponent) => c.name.toLowerCase() === searchTerm.toLowerCase()
  )!;

  //Scroll to component when clicked based on name
  const scrollToComponent = (componentName: string) => {
    componentRefs.current[componentName]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  const CombinedPreview = combined.combinedPreview;

  return (
    <div>
      {/* Combined UI Preview */}
      <div style={styles.section}>
        <Typography variant="headline-2" style={{ marginBottom: 16 }}>Combined Preview</Typography>
        <CombinedPreview />
      </div>
      
      {/* Individual Components (with clickable links*/}
      <div style={styles.section}>
        <Typography variant="headline-2" style={{ marginBottom: 16 }}>Individual Components Found:</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {combined.individualComponents.map((part: Component) => (
            <div 
              key={part.name}
              style={styles.clickable}
              onClick={() => scrollToComponent(part.name)}
            >
              <Typography variant="body-1">{part.name}</Typography>
              <VisaChevronDownTiny />
            </div>
          ))}
        </div>
      </div>
      
      {/* Combined Code */}
      <div style={styles.section}>
      <Typography variant="headline-2" style={{ marginBottom: 16 }}>Combined Code:</Typography>
        <CodeBlockWrapper code={combined.combinedCode} title={combined.name} />
      </div>
      
      {/* Individual Components each with UI and code as well as code wrapper*/}
      <div style={styles.section}>
        <Typography variant="headline-2" style={{ marginBottom: 16 }}>Individual Components:</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {combined.individualComponents.map((part: Component) => {
            const PartPreview = part.preview;
            return (
              <div 
                style={styles.card} 
                key={part.name}
                ref={(el) => {
                  componentRefs.current[part.name] = el;
                }}
              >
              <div 
                style={styles.clickable}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} //scroll to top of the page if clicked on individual component
              >
                <Typography variant="body-1">{part.name}</Typography>
                <VisaChevronUpTiny />
              </div>
              <div style={{ marginTop: '16px', marginBottom: '20px' }}>
                <PartPreview />
              </div>
              <CodeBlockWrapper code={part.code} title={part.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OutputContent; 