import { useState, useEffect } from 'react';
import { NavBar } from './VisaNavbar';
import SavedSnippetsHeader from './SavedSnippets/SavedSnippetsPageHeader';
import SavedSnippetsContainer from './SavedSnippets/SavedSnippetsContainer';
import { DefaultFooter } from './OutputSection/VisaComponents/VisaIndividualComponents/DefaultFooter';

function SavedSnippets() {
  const [snippets, setSnippets] = useState<any[]>([]);

  useEffect(() => {
    loadSnippets();
  }, []);

  //Get snippets from local storage
  const loadSnippets = () => {
    try {
      const savedSnippets = JSON.parse(localStorage.getItem('savedSnippets') || '[]');
      setSnippets(savedSnippets);
    } catch (error) {
      console.error('Error');
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <SavedSnippetsHeader numberOfSnippets={snippets.length} />
        <SavedSnippetsContainer snippets={snippets} />
      </div>  
      <div>
        <DefaultFooter />
      </div>
    </div>
  );
}

export default SavedSnippets;
