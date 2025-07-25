import CopyButton from '../OutputSection/CodeWrapper/CodeWrapperComponents/CopyButton';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import SavedSnippetsWrapper from './SavedSnippetsWrapper';
import EmptySavedSnippets from './EmptySavedSnippets';
import DownloadSnippetButton from '../OutputSection/CodeWrapper/CodeWrapperComponents/DownloadSnippetButton';
function SavedSnippetsContainer({ snippets }: { snippets: any[] }) {
  if (snippets.length === 0) {
    return <EmptySavedSnippets />; //If no snippets, show empty saved snippets file
  }

  return (
    <div>
      {snippets.map((snippet) => (
        <div key={snippet.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '20px', overflow: 'hidden' }}>
          <SavedSnippetsWrapper title={snippet.title} />
          
          <div style={{ backgroundColor: '#1e1e1e' }}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "#2d2d2d", color: "#fff", padding: "8px 12px", fontSize: "14px"}}>
              <span>tsx</span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <CopyButton text={snippet.code} />
                    <DownloadSnippetButton snippet={snippet.code} title={snippet.title} />
                </div>
            </div>
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              showLineNumbers
              customStyle={{ margin: 0, padding: "16px", fontSize: "14px" }}
            >
              {snippet.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedSnippetsContainer; 