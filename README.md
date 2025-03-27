# React Product List

A dynamic product catalog application built with React that demonstrates functional programming concepts with arrays, React components, and state management.

## Project Overview

This application showcases how to use `map`, `filter`, and `reduce` to transform and display product data. Users can filter products by category and price, while viewing real-time statistics about the displayed items.

## Features

- **Category Filtering**: Filter products by selecting different category buttons
- **Price Filtering**: Toggle to show only products over $50
- **Dynamic Statistics**: View total count of products, units, and inventory value
- **Responsive Design**: Works on both desktop and mobile devices

## Technical Implementation

This project demonstrates:

- **Functional Programming**: Using `map`, `filter`, and `reduce` for data transformations
- **React Components**: Creating reusable components for category buttons and product cards
- **State Management**: Managing application state with React hooks
- **Component Styling**: CSS styling for a polished user interface
- **Dynamic Rendering**: Conditional rendering based on user selections

## Component Structure

- **App**: Main component that manages state and renders child components
- **CategoryButton**: Reusable button component for category filtering
- **ProductCard**: Card component to display product information

## Data Processing

The application processes product data in several ways:

- Extract unique categories from the product list
- Count products in each category
- Calculate total inventory value
- Filter products based on selected categories and price thresholds

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-product-list.git
   cd react-product-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Testing

The application includes unit tests for all components:
- App component tests
- CategoryButton component tests
- ProductCard component tests

Run tests with:
```bash
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Product data generated for educational purposes