import { useRef } from "react";
import { GenericMessageTiny, VisaChevronDownTiny, VisaChevronUpTiny } from "@visa/nova-icons-react";
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
  title: {
    margin: '0 0 16px 0',
    color: '#142787',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  clickable: {
    margin: '8px 0',
    color: '#142787',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
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
  welcome: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    height: "100%",
    color: "#6b7280",
    textAlign: "center" as const
  }
};

function OutputContent({ searchTerm }: { searchTerm: string }) {
  const componentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  //Display if there is no search term
  if (!searchTerm) {
    return (
      <div style={styles.welcome}>
        <GenericMessageTiny/>
        <Typography variant="body-1" style={{ marginBottom: "8px" }}>
          Start a conversation with the AI Assistant
        </Typography>
        <Typography variant="body-2" style={{ opacity: 0.7 }}>
          Ask for components like "responsive login form" or "search bar"
        </Typography>
      </div>
    );
  }

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
        <Typography variant="headline-3" style={{ marginBottom: 16 }}>Combined Code</Typography>
        <CodeBlockWrapper code={combined.combinedCode} title={combined.name} />
      </div>
      
      {/* Individual Components each with UI and code as well as code wrapper*/}
      <div style={styles.section}>
        <Typography variant="headline-3" style={{ marginBottom: 16 }}>Individual Components</Typography>
        {combined.individualComponents.map((part: Component) => {
          const PartPreview = part.preview;
          return (
            <div 
              style={styles.card} 
              key={part.name}
              ref={(el) => {
                componentRefs.current[part.name] = el;
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              
              <div style={styles.title}>
                <Typography variant="headline-4">{part.name}</Typography>
                <VisaChevronUpTiny />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <PartPreview />
              </div>
              <CodeBlockWrapper code={part.code} title={part.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OutputContent; 