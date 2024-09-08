import React from 'react';
import '../styles/Footer.css'; // ใช้เส้นทางที่ตรงกับตำแหน่งใหม่

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>ติดต่อสอบถามเพิ่มเติม</p>
        <p>KhonKaen Shoe -a.</p>
        <p>โทร: 095 142 9532</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/nititorn.donsay/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://line.me/ti/p/YourLineID" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-line"></i>
          </a>
          <a href="https://www.youtube.com/@KUChannelOfficial" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
