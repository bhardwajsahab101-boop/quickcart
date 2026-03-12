import React from 'react';
import Productcard from './productcard';
import '../styles/ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;