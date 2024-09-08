import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // เปลี่ยนจาก useHistory เป็น useNavigate
import '../styles/FavoritePage.css';

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();  // เปลี่ยนจาก useHistory เป็น useNavigate

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((shoe) => shoe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const navigateToDetail = (id) => {
    navigate(`/product/${id}`);  // เปลี่ยนจาก history.push เป็น navigate
  };

  return (
    <div className="favorite-container">
      <h1 className="favorite-title">รายการโปรด</h1>
      {favorites.length === 0 ? (
        <p>ยังไม่มีสินค้าในรายการโปรด</p>
      ) : (
        <ul className="shoe-list">
          {favorites.map((shoe) => (
            <li key={shoe.id} className="shoe-item">
              <img 
                src={shoe.image} 
                alt={shoe.name} 
                className="shoe-image" 
                onClick={() => navigateToDetail(shoe.id)}  // ใช้ navigateToDetail
              />
              <h2 className="shoe-name">{shoe.name}</h2>
              <p className="shoe-price">ราคา: {shoe.price}</p>
              <FaTrash 
                className="delete-icon" 
                onClick={() => removeFromFavorites(shoe.id)} 
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritePage;
