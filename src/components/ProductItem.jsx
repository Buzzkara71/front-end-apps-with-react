import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../features/cart/cartSlice.jsx';

const ProductItem = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-item">
      <img src={plant.image} alt={plant.name} className="product-thumbnail" />
      <h3>{plant.name}</h3>
      
      <p className="product-description">{plant.description}</p>
      
      <p className="product-price">${plant.price.toFixed(2)}</p>
      
      <button
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductItem;