// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">ShowOff</h2>
      <input className="search-bar" placeholder="Search fashion, food, events..." />
      <div className="nav-icons">
        <span>💬</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </div>
  );
};

export default Navbar;
