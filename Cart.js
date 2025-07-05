// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.prize * item.quantity, 0);

  return (
    <div className="container my-4">
      <h3>🛒 Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> <br />
                  Rs.{item.prize} × {item.quantity}
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h5>Total: Rs.{total}</h5>
          <button className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
