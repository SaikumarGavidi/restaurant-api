import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../redux/slices/itemSlice';
import Card from './Card';

const Menu = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('https://saikumargavidi.github.io/restaurant-api/restaurantMenuFull.json')
      .then(res => res.json())
      .then(data => dispatch(setItems(data.items)))
      .catch(err => console.error('Error fetching items:', err));
  }, [dispatch]);

  // Extract unique categories
  const categories = ['All', ...new Set(items.map(item => item.category))];

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter(item => item.category === selectedCategory);

  return (
    <div className="container">
      <h2 className="text-center my-3">Menu</h2>

      {/* Category Dropdown */}
      <div className="mb-4 text-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-select w-50 mx-auto"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Items Display */}
      <div className="row">
        {filteredItems.map(item => (
          <Card key={item.id} item={item} />
        ))}
        {filteredItems.length === 0 && (
          <p className="text-center">No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
