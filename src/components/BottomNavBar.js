// src/components/BottomNavBar.js
import React from 'react';
import { FaHome, FaCompass, FaShoppingCart, FaBell, FaUser } from 'react-icons/fa';
import '../styles/BottomNavBar.css';

const BottomNavBar = ({ handleSectionClick }) => {
  return (
    <div className="bottom-nav">
      <FaHome className="nav-icon" onClick={() => handleSectionClick('home')} title="Home" />
      <FaCompass className="nav-icon" onClick={() => handleSectionClick('brands')} title="Brands" />
      <FaShoppingCart className="nav-icon" onClick={() => handleSectionClick('offers')} title="Offers" />
      <FaBell className="nav-icon" onClick={() => handleSectionClick('events')} title="Events" />
      <FaUser className="nav-icon" onClick={() => handleSectionClick('reels')} title="Reels" />
    </div>
  );
};

export default BottomNavBar;

