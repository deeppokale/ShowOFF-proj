import React, { useContext, useEffect } from 'react';
import '../styles/NikeProducts.css';
import { DarkModeContext } from '../context/DarkModeContext';
import { Link } from 'react-router-dom'; // ✅ Added this import

const nikeItems = [
  {
    id: 1,
    title: 'Nike Polo Shirt',
    image: '/images/nike1.png',
    price: '₹1,999',
  },
  {
    id: 2,
    title: 'Nike Sneakers',
    image: '/images/nike2.png',
    price: '₹4,999',
  },
  {
    id: 3,
    title: 'Nike Jacket',
    image: '/images/nike3.png',
    price: '₹3,499',
  },
  {
    id: 4,
    title: 'Nike Cap',
    image: '/images/nike4.png',
    price: '₹899',
  },
  {
    id: 5,
    title: 'Nike Hoodie',
    image: '/images/nike5.png',
    price: '₹2,999',
  },
  {
    id: 6,
    title: 'Nike Graphic T-Shirt',
    image: '/images/nike6.png',
    price: '₹1,499',
  },
];

const NikeProducts = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      {/* Top Bar like HomePage */}
      <div className={`top-bar ${isDarkMode ? 'dark' : ''}`}>
        <div className="hamburger-icon" onClick={() => console.log('Menu clicked')}>☰</div>
        <h1 className="logo-text">ShowOFF</h1>
        <div className="dark-toggle" onClick={toggleDarkMode}>🌓</div>
      </div>

      <div className={`nike-container ${isDarkMode ? 'dark' : ''}`}>
        <h2 className="nike-heading">Nike Collection</h2>
        <div className="nike-cards-container">
          {nikeItems.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="nike-card-link">
              <div className="nike-card">
                <img src={item.image} alt={item.title} className="nike-card-image" />
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NikeProducts;
