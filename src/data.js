import data from './data.json';

// 1.1 Using map to extract categories
const allCategories = data.map(item => item.category);

// 1.2 Filtering unique categories
const uniqueCategories = [...new Set(allCategories)];

// 1.3 Counting products per category with reduce
const categoryCounts = allCategories.reduce((acc, category) => {
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});

// 1.4 Create a list of objects with name and count
const categoryObjects = Object.keys(categoryCounts).map(name => ({
  name,
  count: categoryCounts[name]
}));

// Stretch Challenge 1: Price list
const priceList = data.map(item => ({
  name: item.name,
  price: `$${item.price.toFixed(2)}`
}));

// Stretch Challenge 2: Expensive products
const expensiveProducts = data.filter(item => item.price > 50);

// Stretch Challenge 3: Calculate total inventory value
const totalInventoryValue = data.reduce((total, item) => {
  return total + (item.price * item.units);
}, 0);

// Stretch Challenge 4: Total price of products in each category
const categoryTotals = data.reduce((acc, item) => {
  const { category, price, units } = item;
  const itemTotal = price * units;
  
  acc[category] = (acc[category] || 0) + itemTotal;
  return acc;
}, {});

// Export all the data
export { 
  data, 
  allCategories, 
  uniqueCategories, 
  categoryCounts, 
  categoryObjects,
  priceList,
  expensiveProducts,
  totalInventoryValue,
  categoryTotals
};

// Default export for backward compatibility
export default data;