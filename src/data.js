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