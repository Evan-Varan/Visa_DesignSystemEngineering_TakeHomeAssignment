import { ContentCard, ContentCardBody } from "@visa/nova-react";
import OutputHeader from "./OutputHeader";
import OutputContent from "./OutputContent";
import EmptyOutputDisplay from "./EmptyOutputDisplay";

function OutputSection({ searchTerm }: { searchTerm: string }) {
  return (
    <div style={{ flex: "1.3", display: "flex", flexDirection: "column", minWidth: "750px", height: "100%" }}>
      <ContentCard style={{ height: "100%", display: "flex", flexDirection: "column", border: "1px solid #e5e7eb", borderRadius: "12px" }}>
        <ContentCardBody style={{ flex: "1", display: "flex", flexDirection: "column", padding: "0" }}>
          <OutputHeader />
          <div style={{ flex: "1", overflowY: "auto", padding: "24px", backgroundColor: "white", position: "relative", borderRadius: "0 0 12px 12px" }}>
            {searchTerm ? (
              <OutputContent searchTerm={searchTerm} />
            ) : (
              <EmptyOutputDisplay />
            )}
          </div>
        </ContentCardBody>
      </ContentCard>
    </div>
  );
}

export default OutputSection; 