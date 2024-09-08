import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [showMenSubmenu, setShowMenSubmenu] = useState(false);
  const [showWomenSubmenu, setShowWomenSubmenu] = useState(false);

  return (
    <nav>
      <div className="nav-links">
        <div className="nav-links-left">
          <div
            className="nav-dropdown nav-dropdown-men"
            onMouseEnter={() => setShowMenSubmenu(true)}
            onMouseLeave={() => setShowMenSubmenu(false)}
          >
            <span>สินค้าผู้ชาย ▼</span> {/* เพิ่มลูกศรตรงนี้ */}
            {showMenSubmenu && (
              <div className="dropdown-menu">
                <Link to="/men/sport">Sport Men</Link>
                <Link to="/men/fashion">Fashion Men</Link>
              </div>
            )}
          </div>
          <div
            className="nav-dropdown nav-dropdown-women"
            onMouseEnter={() => setShowWomenSubmenu(true)}
            onMouseLeave={() => setShowWomenSubmenu(false)}
          >
            <span>สินค้าผู้หญิง ▼</span>
            {showWomenSubmenu && (
              <div className="dropdown-menu">
                <Link to="/women/sport">กีฬาผู้หญิง</Link>
                <Link to="/women/fashion">แฟชั่นผู้หญิง</Link>
              </div>
            )}
          </div>
        </div>
        <div className="nav-center">
          <Link to="/" className="logo-text">
            𝐒𝐚-𝐓𝐚𝐢 𝐒𝐡𝐨𝐞 𝐒𝐡𝐨𝐩
          </Link>
        </div>
        <div className="nav-links-right">
          <Link to="/signup" className="nav-link">สมัครสมาชิก</Link>
          <span className="separator">|</span>
          <Link to="/login" className="nav-link">เข้าสู่ระบบ</Link>
          <Link to="/cart" className="cart-link">🛒</Link>
          <Link to="/favorites">🛍️</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
