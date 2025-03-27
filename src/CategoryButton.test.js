import { render, screen, fireEvent } from '@testing-library/react';
import CategoryButton from './CategoryButton';

describe('CategoryButton Component', () => {
  test('renders with category name', () => {
    render(<CategoryButton category="Electronics" onClick={() => {}} isSelected={false} />);
    expect(screen.getByText('Electronics')).toBeInTheDocument();
  });

  test('has selected class when isSelected is true', () => {
    render(<CategoryButton category="Electronics" onClick={() => {}} isSelected={true} />);
    const button = screen.getByText('Electronics');
    expect(button).toHaveClass('selected');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<CategoryButton category="Electronics" onClick={handleClick} isSelected={false} />);
    
    fireEvent.click(screen.getByText('Electronics'));
    expect(handleClick).toHaveBeenCalled();
  });
});