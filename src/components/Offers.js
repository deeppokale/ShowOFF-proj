// src/components/Offers.js
import React from 'react';

const Offers = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Latest Offers</h2>
      <ul className="space-y-4">
        <li className="p-4 bg-green-100 dark:bg-green-800 rounded-lg">50% off on Nike shoes</li>
        <li className="p-4 bg-green-100 dark:bg-green-800 rounded-lg">Buy 1 Get 1 on Zara T-Shirts</li>
      </ul>
    </div>
  );
};

export default Offers;