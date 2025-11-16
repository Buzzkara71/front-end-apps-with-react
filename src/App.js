import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Header from './components/Header';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const showHeader = location.pathname === '/products' || location.pathname === '/cart';
  const isLandingPage = location.pathname === '/';

  return (
    <div className={isLandingPage ? "App-full" : "App"}>

      {showHeader && <Header />}
      
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        
       
        <Route path="/products" element={<ProductListingPage />} />
        
        
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  );
}

export default App;