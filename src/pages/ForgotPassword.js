import React, { useState } from 'react';
import '../styles/ForgotPassword.css'; // เชื่อมโยงกับไฟล์ CSS สำหรับ ForgotPassword

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // เพิ่มการจัดการเมื่อผู้ใช้ส่งฟอร์มที่นี่
    console.log('Email:', email);
  };

  return (
    <div className="forgot-password-container">
      <main className="forgot-password-box">
        <h1>ลืมรหัสผ่าน</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">อีเมล:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="กรุณากรอกอีเมลของคุณ"
              required
            />
          </div>
          <button type="submit">ส่งลิงค์รีเซ็ตรหัสผ่าน</button>
        </form>
        <p className="back-to-login">
          <a href="/login">กลับไปที่หน้าเข้าสู่ระบบ</a>
        </p>
      </main>
    </div>
  );
}

export default ForgotPassword;
