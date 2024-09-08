// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import MenSportPage from './pages/Men/MenSportPage';
import MenFashionPage from './pages/Men/MenFashionPage';
import WomenSportPage from './pages/Women/WomenSportPage';
import WomenFashionPage from './pages/Women/WomenFashionPage';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import Footer from './components/Footer'; // Import Footer component
import ProductDetailPage from './pages/Men/ProductDetailPage'; // Import ProductDetailPage
import FavoritePage from './pages/FavoritePage'; // Import FavoritePage
function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/men/sport" element={<MenSportPage />} />
          <Route path="/men/fashion" element={<MenFashionPage />} />
          <Route path="/women/sport" element={<WomenSportPage />} />
          <Route path="/women/fashion" element={<WomenFashionPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Add this line */}
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
