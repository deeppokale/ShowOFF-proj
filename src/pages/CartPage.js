import React, { useState, useContext, useEffect } from 'react';
import '../styles/CartPage.css';
import BottomNavBar from '../components/BottomNavBar';
import { DarkModeContext } from '../context/DarkModeContext';

const CartPage = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Xiaomi 365',
      code: '#21432354345532',
      color: 'White',
      extra: 'Sport Tire + Battery High 100',
      price: 484.99,
      quantity: 1,
      image: '/images/scooter1.png',
    },
    {
      id: 2,
      name: 'Ninebot ES2',
      code: '#214323533246533',
      color: 'Black',
      extra: 'Full Tire',
      price: 489.99,
      quantity: 3,
      image: '/images/scooter2.png',
    },
  ]);

  const [shippingMode, setShippingMode] = useState('store');

  const updateQuantity = (id, action) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = action === 'inc' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const getSubtotal = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = shippingMode === 'delivery' ? 9.9 : 0;
  const total = getSubtotal() + shippingCost;

  const handleSectionClick = (section) => {
    console.log('Navigate to:', section);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <div className={`cart-container ${isDarkMode ? 'dark' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className="cart-title">My Cart</h1>
          <button onClick={toggleDarkMode} className="dark-toggle-btn">🌓</button>
        </div>

        <div className="cart-table-header">
          <span>Product</span>
          <span>Price</span>
          <span>Qty</span>
          <span>Total</span>
        </div>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <img src={item.image} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <p>{item.code}</p>
                <p>Color: {item.color} Extra: {item.extra}</p>
              </div>
            </div>
            <div className="item-price">{item.price.toFixed(2)}€</div>
            <div className="item-qty">
              <button onClick={() => updateQuantity(item.id, 'dec')}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 'inc')}>+</button>
            </div>
            <div className="item-total">{(item.price * item.quantity).toFixed(2)}€</div>
          </div>
        ))}

        <div className="shipping-section">
          <h3>Choose shipping mode:</h3>
          <label>
            <input
              type="radio"
              name="shipping"
              checked={shippingMode === 'store'}
              onChange={() => setShippingMode('store')}
            />
            <span>Store pickup (&lt; 20 min) — FREE</span>
          </label>
          <label>
            <input
              type="radio"
              name="shipping"
              checked={shippingMode === 'delivery'}
              onChange={() => setShippingMode('delivery')}
            />
            <span>Delivery at home (under 2–4 days) — 9.90€</span>
          </label>
        </div>

        <div className="summary">
          <div>
            <span>Subtotal TTC</span>
            <span>{getSubtotal().toFixed(2)}€</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>{shippingCost === 0 ? 'Free' : `${shippingCost.toFixed(2)}€`}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{total.toFixed(2)}€</span>
          </div>
          <button className="checkout-btn">Checkout – {total.toFixed(2)}€</button>
        </div>
      </div>

      <BottomNavBar handleSectionClick={handleSectionClick} />
    </>
  );
};

export default CartPage;
