import React, { useState } from 'react';
import './App.css';
import { data, uniqueCategories } from './data.js';
import CategoryButton from './CategoryButton';
import ProductCard from './ProductCard';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Helper function to parse price strings like "$12.07" to numbers
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
  };
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? data 
    : data.filter(product => product.category === selectedCategory);
  
  // Count display variables
  const totalProducts = data.length;
  const totalCategories = uniqueCategories.length;
  const displayedProducts = filteredProducts.length;
  
  // Calculate total units for displayed products
  const totalUnits = filteredProducts.reduce((sum, product) => sum + product.units, 0);
  
  // Calculate total inventory value for displayed products
  const totalValue = filteredProducts.reduce((sum, product) => {
    const price = parsePrice(product.price);
    return sum + (price * product.units);
  }, 0);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <div className="stats">
          <p>Total Categories: {totalCategories} | Total Products: {totalProducts}</p>
          <p>Displayed Products: {displayedProducts} | Total Units: {totalUnits} | Total Value: ${totalValue.toFixed(2)}</p>
        </div>
      </header>
      
      <div className="category-buttons">
        <CategoryButton 
          category="All" 
          onClick={() => setSelectedCategory('All')} 
          isSelected={selectedCategory === 'All'}
        />
        {uniqueCategories.map(category => (
          <CategoryButton 
            key={category}
            category={category} 
            onClick={() => setSelectedCategory(category)} 
            isSelected={selectedCategory === category}
          />
        ))}
      </div>
      
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;