// src/App.js
import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';

function App() {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  return (
    <>
      <Header />
      {isCartOpen && <Cart />}
      <Menu />
    </>
  );
}

export default App;
