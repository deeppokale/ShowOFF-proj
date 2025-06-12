// src/components/Brands.js
import React from 'react';

const Brands = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Top Brands</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">Nike</div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">Adidas</div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">Zara</div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">H&M</div>
      </div>
    </div>
  );
};

export default Brands;