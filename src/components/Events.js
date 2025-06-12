// src/components/Events.js
import React from 'react';

const Events = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        <div className="p-4 bg-blue-100 dark:bg-blue-800 rounded-lg">Fashion Week 2025</div>
        <div className="p-4 bg-blue-100 dark:bg-blue-800 rounded-lg">ShowOFF Launch Party</div>
      </div>
    </div>
  );
};

export default Events;