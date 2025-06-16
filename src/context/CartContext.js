import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState([]);
const [shippingMode, setShippingMode] = useState('store');

const addToCart = (product) => {
setCartItems((prevItems) => {
const existingItem = prevItems.find((item) => item.id === product.id);
if (existingItem) {
return prevItems.map((item) =>
item.id === product.id
? { ...item, quantity: item.quantity + 1 }
: item
);
} else {
return [...prevItems, { ...product, quantity: 1 }];
}
});
};

const updateQuantity = (id, action) => {
setCartItems((prev) =>
prev.map((item) =>
item.id === id
? {
...item,
quantity: action === 'inc' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
}
: item
)
);
};

const getSubtotal = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shippingCost = shippingMode === 'delivery' ? 9.9 : 0;
const total = getSubtotal() + shippingCost;

return (
<CartContext.Provider
value={{
cartItems,
addToCart, // ✅ make sure this is exported
updateQuantity,
shippingMode,
setShippingMode,
getSubtotal,
shippingCost,
total,
}}
>
{children}
</CartContext.Provider>
);
};