import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const { name, category, price, rating, description, units } = product;
  
  // Parse the price string to remove the dollar sign and convert to number
  // Using a regex to remove non-numeric characters except decimal point
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
  
  // Generate star rating display
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
  ));
  
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <div className="product-details">
        <p className="category">Category: {category}</p>
        <p className="price">Price: {price}</p>
        <div className="rating">Rating: {stars}</div>
        <p className="units">Units Available: {units}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}

export default ProductCard;