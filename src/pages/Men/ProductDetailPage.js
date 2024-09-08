import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import shoes from '../../content/shoes'; 
import '../../type/ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const shoe = shoes.find((shoe) => shoe.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(shoe.image);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleOrder = () => {
    if (size) {
      const cartItem = {
        id: shoe.id,
        name: shoe.name,
        price: shoe.price,
        quantity: quantity,
        size: size,
        image: selectedImage,
      };
      setCart([...cart, cartItem]);
      setPopupMessage('Product Added to Cart');
      setShowPopup(true);
    } else {
      setPopupMessage('Please select a size');
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!shoe) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <div className="additional-images">
          {shoe.additionalImages && shoe.additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${shoe.name} angle ${index + 1}`}
              className="additional-image"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <img src={selectedImage} alt={shoe.name} className="product-image" />
      </div>
      <div className="product-info">
        <h2>{shoe.name}</h2>
        <h3>{shoe.description}</h3>
        <p className="price">Price: ฿{shoe.price}</p>
        <div className="size-selection">
          <label>Select Size:</label>
          <div className="size-options">
            {['7us', '8us', '9us', '10us', '11us', '12us'].map((shoeSize) => (
              <label key={shoeSize} className={`size-box ${size === shoeSize ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="size"
                  value={shoeSize}
                  checked={size === shoeSize}
                  onChange={handleSizeChange}
                />
                {shoeSize.toUpperCase()}
              </label>
            ))}
          </div>
        </div>
        <div className="quantity-selection">
          <label>Quantity:</label>
          <button className="quantity-button" onClick={() => handleQuantityChange(-1)}>-</button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-button" onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <button className="order-button" onClick={handleOrder}>🛒 Add to Cart</button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{popupMessage}</h2>
            {popupMessage === 'Product Added to Cart' ? (
              <>
                <img src={selectedImage} alt={shoe.name} className="popup-image" />
                <p>{shoe.name}</p>
                <p>Price: ฿{shoe.price}</p>
                <p>Quantity: {quantity}</p>
              </>
            ) : (
              <p>Please select a size before adding the product to the cart.</p>
            )}
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;

