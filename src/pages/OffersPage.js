import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this
import BottomNavBar from '../components/BottomNavBar';
import '../styles/OffersPage.css';

const restaurantOffers = [
  {
    name: 'Balsa',
    image: '/images/Balsa.jpeg',
    cuisines: 'North Indian, Chinese, Mediterranean',
    costForTwo: '₹1,800',
    location: 'Lower Parel, Mumbai',
    distance: '3.4 km',
    rating: '4.1',
    offer: 'Flat 15% OFF',
  },
  {
    name: 'Lyla',
    image: '/images/Lyla.jpg',
    cuisines: 'Mexican, Beverages, Desserts',
    costForTwo: '₹2,500',
    location: 'Bandra Kurla Complex, Mumbai',
    distance: '5.8 km',
    rating: '4.0',
    offer: 'Flat 10% OFF',
  },
  {
    name: 'Amelia',
    image: '/images/Amelia.jpg',
    cuisines: 'Continental, Italian, Salad',
    costForTwo: '₹2,800',
    location: 'Bandra Kurla Complex, Mumbai',
    distance: '4.8 km',
    rating: '4.3',
    offer: 'Flat 10% OFF',
  },
  {
    name: 'Luna Sky',
    image: '/images/luna sky.jpg',
    cuisines: 'Bar Food, Italian',
    costForTwo: '₹2,000',
    location: 'Worli, Mumbai',
    distance: '4.1 km',
    rating: '4.4',
    offer: 'Flat 20% OFF',
  },
  {
    name: 'Oasis Lounge',
    image: '/images/Oasis.jpeg',
    cuisines: 'Asian, Thai, Chinese',
    costForTwo: '₹1,600',
    location: 'Andheri, Mumbai',
    distance: '6.0 km',
    rating: '4.2',
    offer: 'Flat 10% OFF',
  },
  {
    name: 'Moonlight Bay',
    image: '/images/Moonlight.jpg',
    cuisines: 'Seafood, Grill',
    costForTwo: '₹3,200',
    location: 'Marine Drive, Mumbai',
    distance: '2.2 km',
    rating: '4.6',
    offer: 'Flat 25% OFF',
  },
];

const OffersPage = ({ darkMode, toggleDarkMode, handleSectionClick }) => {
  return (
    <>
      {/* Top Bar (outside main container) */}
      <div className="top-bar">
        <div className="hamburger-icon">☰</div>
        <h1 className="logo-text">ShowOFF</h1>
        <div className="dark-toggle" onClick={toggleDarkMode}>🌓</div>
      </div>

      {/* Page Content */}
      <div className="offers-page">
        <h2>Restaurants in Mumbai</h2>
        <div className="restaurant-grid">
          {restaurantOffers.map((restaurant, idx) => (
            <Link 
              to={`/restaurant/${restaurant.name}`} 
              key={idx} 
              className="restaurant-card-link" // optional class if you want styling
              style={{ textDecoration: 'none', color: 'inherit' }} // optional inline styling
            >
              <div className="restaurant-card">
                <div className="image-container">
                  <img src={restaurant.image} alt={restaurant.name} />
                  <div className="offer-banner">🔥 {restaurant.offer}</div>
                </div>
                <h3>{restaurant.name}</h3>
                <p className="cuisines">{restaurant.cuisines}</p>
                <p className="cost-location">{restaurant.costForTwo} for two • {restaurant.location}</p>
                <div className="rating-distance">
                  <span className="rating">{restaurant.rating}★</span>
                  <span className="distance">{restaurant.distance}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar handleSectionClick={handleSectionClick} />
    </>
  );
};

export default OffersPage;
