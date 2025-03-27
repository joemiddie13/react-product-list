import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the data module
jest.mock('./data.js', () => ({
  data: [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      description: "A powerful laptop",
      price: "$999.99",
      rating: 4.5,
      units: 20
    },
    {
      id: 2,
      name: "Teddy Bear",
      category: "Toys",
      description: "Soft and cuddly teddy bear",
      price: "$19.99",
      rating: 4.8,
      units: 50
    }
  ],
  uniqueCategories: ["Electronics", "Toys"]
}));

describe('App Component', () => {
  test('renders product list header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Product List/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders category buttons', () => {
    render(<App />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Toys')).toBeInTheDocument();
  });

  test('renders all products initially', () => {
    render(<App />);
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Teddy Bear')).toBeInTheDocument();
  });
  
  test('filters products when category button is clicked', () => {
    render(<App />);
    
    // Click Electronics category
    fireEvent.click(screen.getByText('Electronics'));
    
    // Should show Laptop but not Teddy Bear
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.queryByText('Teddy Bear')).not.toBeInTheDocument();
  });
  
  test('shows all products when All button is clicked', () => {
    render(<App />);
    
    // First filter to Electronics
    fireEvent.click(screen.getByText('Electronics'));
    
    // Then click All
    fireEvent.click(screen.getByText('All'));
    
    // Should show both products again
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Teddy Bear')).toBeInTheDocument();
  });
});