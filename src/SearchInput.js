import React from 'react';
import './SearchInput.css';

const SearchInput = ({ textChange }) => (
  <div className="search-input">
    <input type="text" onChange={textChange} />
  </div>
);

export default SearchInput;
