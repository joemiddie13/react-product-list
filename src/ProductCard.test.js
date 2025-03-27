import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const testProduct = {
    id: 1,
    name: "Test Product",
    category: "Test Category",
    description: "Test description",
    price: "$99.99",
    rating: 4.0,
    units: 100
  };

  test('renders product information correctly', () => {
    render(<ProductCard product={testProduct} />);
    
    // Check if all product information is displayed
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Category: Test Category')).toBeInTheDocument();
    expect(screen.getByText('Price: $99.99')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Units Available: 100')).toBeInTheDocument();
  });
});