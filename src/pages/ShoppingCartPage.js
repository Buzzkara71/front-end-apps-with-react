import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectTotalCartItems,
  selectTotalCartCost,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import './ShoppingCartPage.css'; 

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalCartItems);
  const totalCost = useSelector(selectTotalCartCost);

  const handleCheckout = () => {
    alert('Checkout is coming soon!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart-page empty-cart">
        <h2>Your Cart is Empty</h2>
        <Link to="/products" className="continue-shopping-btn">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="shopping-cart-page">
      <h2>Your Shopping Cart</h2>

      <div className="cart-summary">
       
        <h3>Total Items: {totalItems}</h3>
      
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      </div>

      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
        
            <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  disabled={item.quantity === 1} 
                >
                  -
                </button>
                <span>{item.quantity}</span>
               
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
              </div>
              
              <button
                className="delete-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
      
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
        
        <button onClick={handleCheckout} className="checkout-btn">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;