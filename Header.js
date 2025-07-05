// src/components/Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/slices/cartSlice';

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h2 className="text-white">🍴 React Restaurant</h2>
      <button
        className="btn btn-outline-light"
        onClick={() => dispatch(toggleCart())}
      >
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Header;
