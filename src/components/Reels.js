// src/components/Reels.js
import React from 'react';
import { FaVideo } from 'react-icons/fa'; // Make sure to install react-icons

const Reels = () => {
  return (
    <div className="feature-section">
      <FaVideo size={30} color="#333" />
      <h3>Reels</h3>
      <p>Watch trending videos here!</p>
    </div>
  );
};

export default Reels;
