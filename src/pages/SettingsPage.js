// src/pages/SettingsPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SettingsPage.css';

const SettingsPage = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="settings-page" data-theme={darkMode ? 'dark' : 'light'}>
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <h2 className="settings-title">Settings</h2>

      <div className="settings-section">
        <h3>Account</h3>
        <ul>
          <li>Change Password</li>
          <li>Two-Factor Authentication</li>
        </ul>
      </div>

      <div className="settings-section">
        <h3>Notifications</h3>
        <ul>
          <li>Push Notifications</li>
          <li>Email Notifications</li>
          <li>Order Updates</li>
        </ul>
      </div>

      <div className="settings-section">
        <h3>Appearance</h3>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="settings-section">
        <h3>Payments</h3>
        <ul>
          <li>Saved Payment Methods</li>
          <li>Order History</li>
          <li>Shipping Addresses</li>
        </ul>
      </div>

      <div className="settings-section">
        <h3>Privacy</h3>
        <ul>
          <li>Blocked Users</li>
          <li>Who Can See My Posts</li>
          <li>Who Can Message Me</li>
        </ul>
      </div>

      <div className="settings-section">
        <h3>Help & Support</h3>
        <ul>
          <li>FAQ</li>
          <li>Contact Support</li>
          <li>Report a Problem</li>
        </ul>
      </div>

      <button className="logout-button">🚪 Log Out</button>
    </div>
  );
};

export default SettingsPage;