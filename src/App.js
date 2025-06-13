// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import SettingsPage from './pages/SettingsPage';

// Components
import BottomNavBar from './components/BottomNavBar';

// Context
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [userData, setUserData] = useState({
    profilePic: 'https://via.placeholder.com/80',
    username: 'shubham_bamane',
    bio: 'Building cool apps 🚀',
    posts: [
      { image: 'https://via.placeholder.com/300' },
      { image: 'https://via.placeholder.com/300' },
    ],
    followers: 120,
    following: 200,
    links: '',
    gender: '',
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeProvider>
      <Router>
        <div style={{ paddingBottom: '60px' }}>
          <Routes>
            {/* Login Route */}
            <Route path="/" element={<LoginPage />} />

            {/* Signup Route */}
            <Route path="/signup" element={<SignupPage />} />

            {/* Cart Route */}
            <Route path="/cart" element={<CartPage />} />

            {/* Home Page */}
            <Route
              path="/homepage"
              element={
                <>
                  <HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                  <BottomNavBar />
                </>
              }
            />

            {/* Profile Page */}
            <Route
              path="/profile"
              element={
                <>
                  <ProfilePage
                    userData={userData}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                  <BottomNavBar />
                </>
              }
            />

            {/* Edit Profile Page */}
            <Route
              path="/edit-profile"
              element={
                <>
                  <EditProfilePage
                    userData={userData}
                    updateUserData={setUserData}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                  <BottomNavBar />
                </>
              }
            />

            {/* Settings Page */}
            <Route
              path="/settings"
              element={
                <>
                  <SettingsPage
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                  <BottomNavBar />
                </>
              }
            />

            {/* Fallback for undefined paths -> redirect to HomePage */}
            <Route path="*" element={<Navigate to="/homepage" />} />
          </Routes>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;