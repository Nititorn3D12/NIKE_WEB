import React, { useState } from 'react';
import '../styles/LoginPage.css'; // ใช้เส้นทางที่ตรงกับตำแหน่งใหม่

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // เพิ่มการจัดการเมื่อผู้ใช้ส่งฟอร์มที่นี่
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <main className="login-box">
        <h1>เข้าสู่ระบบ</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">อีเมล:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="กรุณากรอกข้อมูล Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">รหัสผ่าน:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรุณากรอกข้อมูล Password"
              required
            />
          </div>
          <button type="submit">เข้าสู่ระบบ</button>
        </form>
        <p className="forgot-password-link">
          📧 <a href="/forgot-password">ลืมรหัสผ่าน</a>
        </p>
        <p className="signup-link">
          ยังไม่มีบัญชี? <a href="/signup">สมัครสมาชิก</a>
        </p>
      </main>
    </div>
  );
}

export default LoginPage;
