import React from 'react';
import '../styles/HomePage.css'; // เชื่อมโยงกับไฟล์ CSS สำหรับ HomePage
import promotions from '../content/promotionhomepage'; // นำเข้าข้อมูลโปรโมชั่น

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <h2 className="header-title">𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕊𝕒-𝕋𝕒𝕚 𝕊𝕙𝕠𝕖 𝕊𝕙𝕠𝕡</h2>
      </header>

      <div className="image-wrapper">
  <div className="image-container">
    <img src="/assets/images/11.jpg" alt="Welcome" className="welcome-image" />
  </div>
  <div className="additional-image-container">
    <img src="/assets/images/2.jfif" alt="Additional" className="additional-image" />
  </div>
  <div className="third-image-container">
    <img src="/assets/images/3.jfif" alt="Third" className="third-image" />
  </div>
</div>




      <div className="promotions-section">
        <h2 className="promotions-title">Comming Soon</h2>
        <div className="promotions-list">
          {promotions.slice(0, 4).map((promotion) => (
            <div key={promotion.id} className="promotion-item">
              <div className="promotion-overlay">Comming Soon </div>
              <img src={promotion.image} alt={promotion.title} className="promotion-image" />
              <div className="promotion-info">
                <h3 className="promotion-title">{promotion.title}</h3>
                <p className="promotion-description">{promotion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="promotions-section">
        <h2 className="promotions-title">Comming Soon</h2>
        <div className="promotions-list">
          {promotions.slice(0, 4).map((promotion) => (
            <div key={promotion.id} className="promotion-item">
              <div className="promotion-overlay">Comming Soon </div>
              <img src={promotion.image} alt={promotion.title} className="promotion-image" />
              <div className="promotion-info">
                <h3 className="promotion-title">{promotion.title}</h3>
                <p className="promotion-description">{promotion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
