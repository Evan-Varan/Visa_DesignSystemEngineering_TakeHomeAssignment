import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";

export const NavBar: React.FC = () => {
  return (
    <header className="vn-header">
      <div className="vn-header__logo">Visa Component Tool</div>
      <nav className="vn-header__nav">
        <Link to="/" className="vn-header__nav-link">Home</Link>
        <Link to="/build" className="vn-header__nav-link">Build</Link>
        <Link to = "/Tutorial" className="vn-header__nav-link">Tutorial </Link>
        <Link to="/SavedSnippets" className="vn-header__nav-link">Saved Snippets</Link>
      </nav>
      <div className="vn-header__auth">
        <button className="visa-button visa-button--secondary">Login</button>
        <button className="visa-button visa-button--secondary">Signup</button>
      </div>
    </header>
  );
};