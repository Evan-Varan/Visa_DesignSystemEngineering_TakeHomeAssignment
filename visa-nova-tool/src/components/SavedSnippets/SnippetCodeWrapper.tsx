import CopyButton from '../OutputSection/CodeWrapper/CodeWrapperComponents/CopyButton';
import DownloadSnippetButton from '../OutputSection/CodeWrapper/CodeWrapperComponents/DownloadSnippetButton';

function SnippetCodeWrapper({snippet}: {snippet: any}) {
  return (
    <div style={{ backgroundColor: '#1e1e1e' }}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "#2d2d2d", color: "#fff", padding: "8px 12px", fontSize: "14px"}}>
        
        <span>tsx</span>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <CopyButton text={snippet.code} />
            <DownloadSnippetButton snippet={snippet.code} title={snippet.title} />
        </div>
      </div>
    </div>
  );
}

export default SnippetCodeWrapper; 