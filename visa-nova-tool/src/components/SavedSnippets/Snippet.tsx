import SnippetCodeWrapper from "./SnippetCodeWrapper";
import SnippetHeader from "./SnippetHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Snippet({snippet}: {snippet: any}) {
    return (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '20px', overflow: 'hidden' }}>
            <SnippetHeader title={snippet.title} />
            <SnippetCodeWrapper snippet={snippet} />
            
            {/* Code Display with real code highlighting */}
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              showLineNumbers
              customStyle={{ margin: 0, padding: "16px", fontSize: "14px" }}
            >
              {snippet.code}
            </SyntaxHighlighter>
        </div>
    );
}

export default Snippet;