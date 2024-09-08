  import React, { useState } from 'react';
  import '../styles/SignUp.css'; // ใช้เส้นทางที่ตรงกับตำแหน่งใหม่

  const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
      event.preventDefault();
      const newErrors = {};
      if (!email) newErrors.email = 'กรุณากรอกอีเมล';
      if (!password) newErrors.password = 'กรุณากรอกรหัสผ่าน';
      if (password !== confirmPassword) newErrors.confirmPassword = 'รหัสผ่านไม่ตรงกัน';
      if (!acceptPolicy) newErrors.acceptPolicy = 'กรุณายอมรับนโยบายความเป็นส่วนตัว';
      if (password.length < 8) newErrors.passwordLength = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) newErrors.passwordComplexity = 'รหัสผ่านต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และตัวเลข';

      if (Object.keys(newErrors).length === 0) {
        alert('ลงทะเบียนสำเร็จ!');
      } else {
        setErrors(newErrors);
      }
    };
      
    return (
      <div className="sign-up-wrapper">
        <div className="sign-up-container">
          <h2>ลงทะเบียน</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">อีเมล</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">รหัสผ่าน</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={errors.password || errors.passwordLength || errors.passwordComplexity ? 'input-error' : ''}
              />
              {errors.password && <span className="error">{errors.password}</span>}
              {errors.passwordLength && <span className="error">{errors.passwordLength}</span>}
              {errors.passwordComplexity && <span className="error">{errors.passwordComplexity}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={errors.confirmPassword ? 'input-error' : ''}
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>

            <div className="form-group">
              <input
                type="checkbox"
                id="acceptPolicy"
                checked={acceptPolicy}
                onChange={() => setAcceptPolicy(!acceptPolicy)}
                required
                className={errors.acceptPolicy ? 'input-error' : ''}
              />
              <label htmlFor="acceptPolicy">ฉันรับทราบและยอมรับ นโยบายความเป็นส่วนตัว</label>
              {errors.acceptPolicy && <span className="error">{errors.acceptPolicy}</span>}
            </div>

            <div className="password-requirements">
              <p><strong>เงื่อนไขรหัสผ่าน:</strong></p>
              <ul>
                <li>รหัสผ่านจะต้องมีตัวอักษรอย่างน้อย 8 ตัวอักษร</li>
                <li>รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และตัวเลข</li>
              </ul>
            </div>

            <button type="submit">ลงทะเบียน</button>
          </form>
        </div>
      </div>
    );
  };

  export default SignUp;
