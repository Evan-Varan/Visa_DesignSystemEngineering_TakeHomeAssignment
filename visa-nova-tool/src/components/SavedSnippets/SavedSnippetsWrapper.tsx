import { Typography } from '@visa/nova-react';
import { VisaCodeRunLow} from '@visa/nova-icons-react';

function SavedSnippetsWrapper({title}: {title: string}) {
  return (
    <div style={{padding: "20px 24px", borderBottom: "3px solid #e5e7eb", backgroundColor: "white", color: "#142787",borderRadius: "12px 12px 0 0"}}>
      <Typography variant="headline-3" tag="h3" style={{display: "flex", alignItems: "center", gap: 10}}>  
        <VisaCodeRunLow />
        <span style={{textTransform: "capitalize"}}>{title}</span>
      </Typography>
    </div>
  );
}

export default SavedSnippetsWrapper; 