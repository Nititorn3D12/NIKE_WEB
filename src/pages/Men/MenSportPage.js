import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart as HeartOutline, FaHeart } from 'react-icons/fa'; // ใช้ไอคอนหัวใจ
import shoes from '../../content/shoes'; 
import '../../type/MenSportPage.css';

function MenSportPage() {
  const [sortOption, setSortOption] = useState('');
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const categoryMap = {
    running: 'รองเท้าวิ่ง',
    football: 'รองเท้าฟุตบอล',
    basketball: 'รองเท้าบาสเกตบอล',
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const openModal = (shoe) => {
    setSelectedShoe(shoe);
    setIsModalOpen(true);
  };

  const convertPrice = (price) => {
    return parseFloat(price.replace(/,/g, ''));
  };

  const filteredShoes = shoes
    .filter((shoe) => {
      if (typeFilter && shoe.type !== typeFilter) {
        return false;
      }

      if (priceFilter) {
        const price = convertPrice(shoe.price);
        const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
        if (price < minPrice || (maxPrice && price > maxPrice)) return false;
      }

      return true;
    })
    .sort((a, b) => {
      const priceA = convertPrice(a.price);
      const priceB = convertPrice(b.price);

      switch (sortOption) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  const addToFavorites = (shoe) => {
    const updatedFavorites = favorites.some(fav => fav.id === shoe.id)
      ? favorites.filter(fav => fav.id !== shoe.id)
      : [...favorites, shoe];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    navigate('/favorites');
  };

  return (
    <div className="main-container">
      <header>
        <h3>Sport Men</h3>
      </header>
      <div className="filter-container">
        <label htmlFor="sort" className="filter-label">เรียงลำดับ:</label>
        <select id="sort" className="filter-dropdown" value={sortOption} onChange={handleSortChange}>
          <option value="">เลือกการเรียงลำดับ</option>
          <option value="name-asc">เรียงตามชื่อ A-Z</option>
          <option value="name-desc">เรียงตามชื่อ Z-A</option>
          <option value="price-asc">เรียงตามราคาถูกไปแพง</option>
          <option value="price-desc">เรียงตามราคาแพงไปถูก</option>
        </select>

        <label htmlFor="type" className="filter-label">ประเภท:</label>
        <select id="type" className="filter-dropdown" value={typeFilter} onChange={handleTypeChange}>
          <option value="">เลือกประเภท</option>
          <option value="running">รองเท้าวิ่ง</option>
          <option value="football">รองเท้าฟุตบอล</option>
          <option value="basketball">รองเท้าบาส</option>
        </select>

        <label htmlFor="price" className="filter-label">ราคา:</label>
        <select id="price" className="filter-dropdown" value={priceFilter} onChange={handlePriceChange}>
          <option value="">เลือกช่วงราคา</option>
          <option value="0-5000">0-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-15000">10000-15000</option>
        </select>
      </div>
      <main>
        <ul className="shoe-list">
          {filteredShoes.map((shoe) => (
            <li key={shoe.id} className="shoe-item">
              <Link to={`/product/${shoe.id}`}>
                <img src={shoe.image} alt={shoe.name} className="shoe-image" />
              </Link>
              <div className="shoe-info">
                <h2 className="shoe-name">{shoe.name}</h2>
                <p className="shoe-category">category: {categoryMap[shoe.type]} ({shoe.type})</p>
                <p className="shoe-price">ราคา: ฿{shoe.price}</p>
              </div>
              <div 
                className={`favorite-icon ${favorites.some(fav => fav.id === shoe.id) ? 'active' : ''}`} 
                onClick={() => addToFavorites(shoe)}
              >
                {favorites.some(fav => fav.id === shoe.id) ? <FaHeart /> : <HeartOutline />}
              </div>
              <button className="add-to-cart" onClick={() => openModal(shoe)}>🛒 สั่งซื้อสินค้า</button>
            </li>
          ))}
        </ul>
      </main>
      {isModalOpen && selectedShoe && (
        <div className="modal-overlay">
          {/* Modal content here */}
        </div>
      )}
    </div>
  );
}

export default MenSportPage;
