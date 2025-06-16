// src/components/Brands.js
import React from 'react';
import HomeCarousel from './HomeCarousel';
import '../styles/Brands.css'; // <-- Make sure this is imported

const Brands = () => {
  return (
    <div className="brands-container">
      <HomeCarousel />

      <h2 className="brands-title">Top Brands</h2>
      <div className="brand-logos">
        <a href="/nike" className="brand-link">
          <img src="/images/nike-logo.png" alt="Nike" className="brand-image" />
        </a>
        <a href="/zara" className="brand-link">
          <img src="/images/adidas-logo.png" alt="Adidas" className="brand-image" />
        </a>
        <a href="/nike" className="brand-link">
          <img src="/images/zara-logo.png" alt="Zara" className="brand-image" />
        </a>
        <a href="/nike" className="brand-link">
          <img src="/images/hm-logo.png" alt="H&M" className="brand-image" />
        </a>
      </div>
    </div>
  );
};

export default Brands;
