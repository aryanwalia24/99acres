// SearchBar.js
import React, { useState } from 'react';
import './css/SearchBar.css';
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
   // SearchBar.js
const handleSearch = () => {
    console.log('Query:', query);
    if (query.trim() !== '') {
      console.log('Searching...');
      onSearch(query);
    }
  };
  
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for properties..."
          value={query}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default SearchBar;