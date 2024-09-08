// src/components/NavBar.js
import React from 'react';
import '../styles/NavBar.css'; // ใช้เส้นทางที่ตรงกับตำแหน่งใหม่

import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav>
       <Navigation />
      <FontAwesomeIcon icon={faShoppingBag} color="black" />
    </nav>
  );
};

export default NavBar;
