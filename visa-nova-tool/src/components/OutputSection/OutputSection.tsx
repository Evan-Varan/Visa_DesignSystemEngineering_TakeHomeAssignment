import { ContentCard, ContentCardBody } from "@visa/nova-react";
import OutputHeader from "./OutputHeader";
import OutputContent from "./OutputContent";

function OutputSection({ searchTerm }: { searchTerm: string }) {
  return (
    <div style={{ flex: "1.5", display: "flex", flexDirection: "column", minWidth: "500px", height: "100%" }}>
      <ContentCard style={{ height: "100%", display: "flex", flexDirection: "column", border: "1px solid #e5e7eb", borderRadius: "12px" }}>
        <ContentCardBody style={{ flex: "1", display: "flex", flexDirection: "column", padding: "0" }}>
          <OutputHeader />
          <div style={{ flex: "1", overflowY: "auto", padding: "24px", backgroundColor: "white", position: "relative", borderRadius: "0 0 12px 12px" }}>
            <OutputContent searchTerm={searchTerm} />
          </div>
        </ContentCardBody>
      </ContentCard>
    </div>
  );
}

export default OutputSection; 