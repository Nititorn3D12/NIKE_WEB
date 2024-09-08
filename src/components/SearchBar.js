// src/components/SearchBar.js
import React, { useState } from 'react';
import '../styles/SearchBar.css'; // ใช้เส้นทางที่ตรงกับตำแหน่งใหม่

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log(`Searching for ${query}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
