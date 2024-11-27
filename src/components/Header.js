import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/notesSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <header>
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilterChange}
      />
    </header>
  );
};

export default Header;
