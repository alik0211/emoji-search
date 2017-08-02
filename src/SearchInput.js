import React from 'react';
import './SearchInput.css';

const SearchInput = ({ textChange }) => (
  <div className="search-input">
    <div>
      <input type="text" onChange={textChange} />
    </div>
  </div>
);

export default SearchInput;
