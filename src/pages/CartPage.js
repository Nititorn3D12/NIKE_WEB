import React, { useState, useEffect } from 'react';
import '../styles/CartPage.css'; // เชื่อมโยงกับไฟล์ CSS สำหรับ CartPage

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage or state
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Price: ฿{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Size: {item.size}</p>
            </div>
            <button className="remove-button" onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
