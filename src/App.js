import React, { useState, useMemo } from 'react';
import './App.css';
import { data, uniqueCategories } from './data.js';
import CategoryButton from './CategoryButton';
import ProductCard from './ProductCard';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showExpensive, setShowExpensive] = useState(false);
  
  // Helper function to parse price strings like "$12.07" to numbers
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
  };
  
  // Using useMemo to optimize the filtering of products
  const filteredProducts = useMemo(() => {
    let products = selectedCategory === 'All' 
      ? data 
      : data.filter(product => product.category === selectedCategory);
      
    // Further filter by price if showExpensive is true
    if (showExpensive) {
      products = products.filter(product => parsePrice(product.price) > 50);
    }
    
    return products;
  }, [selectedCategory, showExpensive, data]);
  
  // Count display variables
  const totalProducts = data.length;
  const totalCategories = uniqueCategories.length;
  const displayedProducts = filteredProducts.length;
  
  // Using useMemo to calculate totals only when filteredProducts changes
  const { totalUnits, totalValue } = useMemo(() => {
    // Calculate total units for displayed products
    const units = filteredProducts.reduce((sum, product) => sum + product.units, 0);
    
    // Calculate total inventory value for displayed products
    const value = filteredProducts.reduce((sum, product) => {
      const price = parsePrice(product.price);
      return sum + (price * product.units);
    }, 0);
    
    return { totalUnits: units, totalValue: value };
  }, [filteredProducts]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <div className="stats">
          <p>Total Categories: {totalCategories} | Total Products: {totalProducts}</p>
          <p>Displayed Products: {displayedProducts} | Total Units: {totalUnits} | Total Value: ${totalValue.toFixed(2)}</p>
        </div>
      
        <div className="price-filter">
          <label className="price-filter-label">
            <input 
              type="checkbox" 
              checked={showExpensive} 
              onChange={() => setShowExpensive(!showExpensive)} 
            />
            Show products over $50 only
          </label>
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