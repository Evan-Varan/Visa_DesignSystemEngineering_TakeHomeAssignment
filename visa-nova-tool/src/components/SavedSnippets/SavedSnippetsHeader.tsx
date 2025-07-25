import { Typography } from '@visa/nova-react';
import { VisaSaveHigh } from '@visa/nova-icons-react';

function SavedSnippetsHeader({numberOfSnippets}: {numberOfSnippets: number}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
      <Typography variant="display-1">
        Saved Snippets ({numberOfSnippets})
      </Typography>
      <VisaSaveHigh />
    </div>
  );
}

export default SavedSnippetsHeader; 