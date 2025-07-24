import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './Navbar';

function Tutorial() {
  return (
    <div className="vn-landing-root">
      <NavBar />
      
      <main className="visa-tutorial-container">
        <div className="visa-tutorial-header">
          <h1 className="visa-tutorial-title">Tutorial</h1>
          <p className="visa-tutorial-subtitle">
            Learn how to use the Visa Nova Component Tool effectively
          </p>
        </div>

        <div className="visa-tutorial-content">
          <div className="visa-tutorial-section">
            <h2>Getting Started</h2>
            <p>
              Welcome to the Visa Nova Component Tool! This tool helps you discover, 
              preview, and save Visa Nova components for your projects.
            </p>
          </div>

          <div className="visa-tutorial-section">
            <h2>How to Use</h2>
            <ol className="visa-tutorial-steps">
              <li>
                <strong>Search Components:</strong> Go to the Build page and use the search 
                bar to find specific components like "Button", "Input", or "Form".
              </li>
              <li>
                <strong>Preview Code:</strong> Click on any component to see its code 
                implementation and live preview.
              </li>
              <li>
                <strong>Save Snippets:</strong> Use the "Save Snippet" button to store 
                useful code snippets for later use.
              </li>
              <li>
                <strong>View Saved Snippets:</strong> Navigate to "Saved Snippets" to 
                see all your saved code snippets.
              </li>
            </ol>
          </div>

          <div className="visa-tutorial-section">
            <h2>Available Components</h2>
            <div className="visa-component-list">
              <div className="visa-component-item">
                <h3>Buttons</h3>
                <p>Primary, secondary, and tertiary button styles</p>
              </div>
              <div className="visa-component-item">
                <h3>Inputs</h3>
                <p>Text inputs, password fields, and form controls</p>
              </div>
              <div className="visa-component-item">
                <h3>Forms</h3>
                <p>Complete form implementations with validation</p>
              </div>
              <div className="visa-component-item">
                <h3>Navigation</h3>
                <p>Header components and navigation elements</p>
              </div>
            </div>
          </div>

          <div className="visa-tutorial-section">
            <h2>Tips & Best Practices</h2>
            <ul className="visa-tutorial-tips">
              <li>Use descriptive titles when saving snippets for easier organization</li>
              <li>Copy snippets directly to your clipboard for quick integration</li>
              <li>Delete old snippets to keep your collection organized</li>
              <li>Explore different component variations to find the perfect fit</li>
            </ul>
          </div>

          <div className="visa-tutorial-cta">
            <Link to="/build" className="visa-button visa-button--primary">
              Start Building Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tutorial; 