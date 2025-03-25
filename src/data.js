import data from './data.json';

// 1.1 Using map to extract categories
const allCategories = data.map(item => item.category);