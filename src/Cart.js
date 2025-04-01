import React from 'react';
import './Cart.css';

function Cart({ cartItems }) {
  // Group items by id to show quantity
  const groupedItems = cartItems.reduce((acc, item) => {
    // Check if we already have this item in our accumulator
    const existingItem = acc.find(i => i.id === item.id);
    
    if (existingItem) {
      // Item exists, increase its quantity
      existingItem.quantity += 1;
      // Update the total for this item
      existingItem.total = existingItem.quantity * existingItem.numericPrice;
    } else {
      // Item doesn't exist, add it with quantity 1
      acc.push({
        ...item,
        quantity: 1,
        total: item.numericPrice
      });
    }
    
    return acc;
  }, []);
  
  // Calculate overall cart total
  const cartTotal = groupedItems.reduce((sum, item) => sum + item.total, 0);
  
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      
      {groupedItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {groupedItems.map(item => (
              <div key={item.id} className="cart-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
                <span className="item-quantity">qty: {item.quantity}</span>
                <span className="item-total">total: ${item.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="cart-footer">
            <p className="cart-total">Cart Total: ${cartTotal.toFixed(2)}</p>
            <button className="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;