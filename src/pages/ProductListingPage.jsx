import React from 'react';
import { productData } from '../data/productData.jsx';
import ProductItem from '../components/ProductItem.jsx';
import './ProductListingPage.css';

const ProductListingPage = () => {

  const getProductsByCategory = (category) => {
    return productData.filter((plant) => plant.category === category);
  };

  const lowMaintenancePlants = getProductsByCategory('Low Maintenance');
  const tropicalPlants = getProductsByCategory('Tropical');
  const viningPlants = getProductsByCategory('Vining');

  return (
    <div className="product-listing-page">
      <h2>All Plants</h2>
      
      {/* Category 1: Low Maintenance */}
      <section className="category-section">
        <h3>Low Maintenance</h3>
        <div className="product-grid">
          {lowMaintenancePlants.map((plant) => (
            <ProductItem key={plant.id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Category 2: Tropical */}
      <section className="category-section">
        <h3>Tropical</h3>
        <div className="product-grid">
          {tropicalPlants.map((plant) => (
            <ProductItem key={plant.id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Category 3: Vining */}
      <section className="category-section">
        <h3>Vining</h3>
        <div className="product-grid">
          {viningPlants.map((plant) => (
            <ProductItem key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;