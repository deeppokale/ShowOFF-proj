// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from './context/CartContext';
import OffersPage from './pages/OffersPage';

// Pages
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import SettingsPage from './pages/SettingsPage';
import NikeProducts from './pages/NikeProducts'; // 👈 New page
import ProductDetail from './components/ProductDetail';
import RestaurantDetail from './pages/RestaurantDetail';

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
     <CartProvider>
      <Router>
        <div style={{ paddingBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route
              path="/homepage"
              element={
                <>
                  <HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                  <BottomNavBar />
                </>
              }
            />
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

            {/* 👇 Nike Products with BottomNavBar */}
            <Route
              path="/nike"
              element={
                <>
                  <NikeProducts />
                  <BottomNavBar />
                </>
              }
            />

            <Route
  path="/nike"
  element={
    <>
      <NikeProducts />
      <BottomNavBar />
    </>
  }
/>

<Route
  path="/product/:id"
  element={
    <>
      <ProductDetail />
      <BottomNavBar />
    </>
  }
/> 
    <Route path="/offers" element={<OffersPage />} />

<Route
  path="/restaurant/:name"
  element={
    <>
      <RestaurantDetail darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <BottomNavBar />
    </>
  }
/>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/homepage" />} />
          </Routes>
        </div>
      </Router>

    </CartProvider>  
    </DarkModeProvider>
  );
}

export default App;
