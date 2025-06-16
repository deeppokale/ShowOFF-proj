// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Import navigation
import Reels from '../components/Reels';
import Brands from '../components/Brands';
import Offers from '../components/Offers';
import Events from '../components/Events';
import BottomNavBar from '../components/BottomNavBar';
import '../styles/HomePage.css';

const HomePage = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('reels');
  const navigate = useNavigate(); // 👈 Initialize navigation

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionClick = (section) => {
    if (section === 'offers') {
      navigate('/offers'); // 👈 Navigate to new OffersPage
    } else {
      setActiveSection(section);
    }
    setMenuOpen(false);
  };

  const categoryChips = ['Nike', 'Adidas', 'Zara', 'Offers', 'Events', 'Reels'];

  const handleChipClick = (chip) => {
    if (chip.toLowerCase() === 'offers') {
      navigate('/offers');
    } else {
      setActiveSection(chip.toLowerCase());
    }
  };

  return (
    <div className="home-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="hamburger-icon" onClick={toggleMenu}>☰</div>
        <h1 className="logo-text">ShowOFF</h1>
        <div className="dark-toggle" onClick={toggleDarkMode}>🌓</div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="menu-options">
          <button onClick={() => handleSectionClick('brands')}>Brands</button>
          <button onClick={() => handleSectionClick('offers')}>Offers</button>
          <button onClick={() => handleSectionClick('events')}>Events</button>
          <button onClick={() => handleSectionClick('reels')}>Reels</button>
        </div>
      )}

      {/* Search and Chips */}
      <div className="search-and-chips">
        <input
          type="text"
          placeholder="Search brands, offers, events..."
          className="search-input"
        />
        <div className="chips-scroll">
          {categoryChips.map((item, index) => (
            <div className="chip" key={index} onClick={() => handleChipClick(item)}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Section Content */}
      <div className="main-content">
        {activeSection === 'reels' && <Reels />}
        {activeSection === 'brands' && <Brands />}
        {activeSection === 'offers' && <Offers />}
        {activeSection === 'events' && <Events />}
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar handleSectionClick={handleSectionClick} />
    </div>
  );
};

export default HomePage;
