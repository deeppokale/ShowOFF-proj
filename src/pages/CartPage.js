import React, { useContext, useEffect } from 'react';
import '../styles/CartPage.css';
import BottomNavBar from '../components/BottomNavBar';
import { DarkModeContext } from '../context/DarkModeContext';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
const {
cartItems,
updateQuantity,
shippingMode,
setShippingMode,
getSubtotal,
shippingCost,
total,
} = useContext(CartContext);

useEffect(() => {
document.body.classList.toggle('dark', isDarkMode);
}, [isDarkMode]);

const handleSectionClick = (section) => {
console.log('Navigate to:', section);
};

return (
<>
{/* Top Bar */}
<div className={`top-bar ${isDarkMode ? 'dark' : ''}`}>
<div className="hamburger-icon" onClick={() => console.log('Menu clicked')}>☰</div>
<h1 className="logo-text">ShowOFF</h1>
<div className="dark-toggle" onClick={toggleDarkMode}>🌓</div>
</div>


  <div className={`cart-container ${isDarkMode ? 'dark' : ''}`}>
    <h1 className="cart-title">My Cart</h1>

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