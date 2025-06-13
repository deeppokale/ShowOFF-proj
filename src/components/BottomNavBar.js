// src/components/BottomNavBar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaCompass, FaShoppingCart, FaBell, FaUser } from 'react-icons/fa';
import '../styles/BottomNavBar.css';

const BottomNavBar = ({ handleSectionClick }) => {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">
      {/* ✅ Home icon navigates to homepage */}
      <Link to="/homepage">
        <FaHome className="nav-icon" title="Home" />
      </Link>

      {/* ✅ Brands icon triggers handleSectionClick */}
      <FaCompass
        className="nav-icon"
        onClick={() => handleSectionClick?.('brands')}
        title="Brands"
      />

      {/* ✅ Cart icon navigates using navigate() */}
      <FaShoppingCart
        className="nav-icon"
        onClick={() => navigate('/cart')}
        title="Cart"
      />

      {/* ✅ Events icon triggers handleSectionClick */}
      <FaBell
        className="nav-icon"
        onClick={() => handleSectionClick?.('events')}
        title="Events"
      />

      {/* ✅ Profile icon navigates to profile page */}
      <Link to="/profile">
        <FaUser className="nav-icon" title="Profile" />
      </Link>
    </div>
  );
};

export default BottomNavBar;