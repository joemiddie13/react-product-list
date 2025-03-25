import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { name, category, price, rating, description, units } = product;
  
  // Generate star rating display
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
  ));
  
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <div className="product-details">
        <p className="category">Category: {category}</p>
        <p className="price">Price: ${price.toFixed(2)}</p>
        <div className="rating">Rating: {stars}</div>
        <p className="units">Units Available: {units}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}

export default ProductCard;