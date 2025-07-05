// src/components/Card.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const Card = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={item.url}
          alt={item.name}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Rs.{item.prize}</p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
