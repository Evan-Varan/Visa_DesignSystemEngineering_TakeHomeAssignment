import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './Navbar';

interface Snippet {
  id: string;
  title: string;
  code: string;
  language: string;
  savedAt: string;
}

function SavedSnippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    loadSnippets();
  }, []);

  const loadSnippets = () => {
    try {
      const savedSnippets = JSON.parse(localStorage.getItem('savedSnippets') || '[]');
      setSnippets(savedSnippets);
    } catch (error) {
      console.error('Error loading snippets:', error);
    }
  };

  const handleCopySnippet = async (snippet: Snippet) => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopiedId(snippet.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error('Error copying snippet:', error);
    }
  };

  const handleDeleteSnippet = (id: string) => {
    try {
      const updatedSnippets = snippets.filter(snippet => snippet.id !== id);
      localStorage.setItem('savedSnippets', JSON.stringify(updatedSnippets));
      setSnippets(updatedSnippets);
    } catch (error) {
      console.error('Error deleting snippet:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="vn-landing-root">
      <NavBar />
      
      <main className="visa-snippets-container">
        <div className="visa-snippets-header">
          <h1 className="visa-snippets-title">Saved Snippets</h1>
          <p className="visa-snippets-subtitle">
            {snippets.length === 0 
              ? "No snippets saved yet. Start building to save your first snippet!" 
              : `${snippets.length} snippet${snippets.length === 1 ? '' : 's'} saved`
            }
          </p>
        </div>

        {snippets.length === 0 ? (
          <div className="visa-empty-state">
            <div className="visa-empty-icon">📝</div>
            <h3>No snippets yet</h3>
            <p>Your saved code snippets will appear here</p>
            <Link to="/build" className="visa-button visa-button--primary">
              Start Building
            </Link>
          </div>
        ) : (
          <div className="visa-snippets-grid">
            {snippets.map((snippet) => (
              <div key={snippet.id} className="visa-snippet-card">
                <div className="visa-snippet-header">
                  <div className="visa-snippet-info">
                    <h3 className="visa-snippet-title">{snippet.title}</h3>
                    <span className="visa-snippet-language">{snippet.language}</span>
                    <span className="visa-snippet-date">{formatDate(snippet.savedAt)}</span>
                  </div>
                  <div className="visa-snippet-actions">
                    <button
                      className={`visa-button ${copiedId === snippet.id ? 'visa-button--success' : 'visa-button--secondary'}`}
                      onClick={() => handleCopySnippet(snippet)}
                    >
                      {copiedId === snippet.id ? '✓ Copied!' : 'Copy'}
                    </button>
                    <button
                      className="visa-button visa-button--danger"
                      onClick={() => handleDeleteSnippet(snippet.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="visa-snippet-code">
                  <pre className="visa-code-block">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default SavedSnippets;
