import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalCartItems } from '../features/cart/cartSlice.jsx'; 
import './Header.css'; 

const Header = () => {
  // Get the total number of items from the Redux store

  const totalItems = useSelector(selectTotalCartItems);
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">Paradise Nursery</Link>
      </div>
      <nav>
       
        {location.pathname === '/products' && (
          <Link to="/cart" className="cart-icon">
            🛒 <span>{totalItems}</span>
          </Link>
        )}
        {location.pathname === '/cart' && (
          <Link to="/products">
            Continue Shopping
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;