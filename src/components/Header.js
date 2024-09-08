// src/components/Header.js
import React from 'react';
import '../styles/Header.css'; // ใช้เส้นทางที่ตรงกับตำแหน่งใหม่

import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
