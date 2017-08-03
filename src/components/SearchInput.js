import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

const SearchInput = ({ textChange }) => (
  <div className="search-input">
    <input type="text" onChange={textChange} />
  </div>
);

SearchInput.propTypes = {
  textChange: PropTypes.func,
};

export default SearchInput;
