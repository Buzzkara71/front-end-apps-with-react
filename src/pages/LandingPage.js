import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Create this CSS file for styling

const LandingPage = () => {
  return (
    
    <div className="landing-page">
      <div className="landing-content">
        
        <h1>Paradise Nursery</h1>
        
        <p>
          Welcome to Paradise Nursery, your one-stop shop for the healthiest
          and most beautiful houseplants. We believe everyone deserves a
          little green in their life.
        </p>
        
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;