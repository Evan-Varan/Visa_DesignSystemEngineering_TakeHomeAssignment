import { Typography} from '@visa/nova-react';
import { VisaFaceSadHigh} from '@visa/nova-icons-react';

function EmptySavedSnippets() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '400px',
      borderRadius: '16px',
      border: '2px dashed #cbd5e1',
      margin: '20px 0'
    }}>
      <div style={{ 
        background: 'white', 
        borderRadius: '50%', 
        width: '80px', 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <VisaFaceSadHigh />
      </div>
      
      <Typography variant="headline-2" style={{ marginBottom: '12px', color: '#1e293b' }}>
        No Saved Snippets
      </Typography>
      
      <Typography variant="body-1" style={{ 
        marginBottom: '32px', 
        color: '#64748b', 
        textAlign: 'center',
        maxWidth: '300px'
      }}>
        Start building components and save your favorite code snippets here for quick access!
      </Typography>
    </div>
  );
}

export default EmptySavedSnippets; 