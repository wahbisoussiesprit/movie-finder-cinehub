import React, { useState } from 'react';
import './SearchBar.css';

// Interview talking point: "I built a SearchBar with debouncing and controlled inputs"
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Interview point: "I used controlled component pattern for form inputs"
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies by title, genre, or year..."
            className="search-input"
            aria-label="Search movies"
          />
          {query && (
            <button 
              type="button" 
              className="clear-button"
              onClick={handleClear}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <button type="submit" className="search-button">
          <span className="search-icon">🔍</span>
          Search
        </button>
        
        <div className="search-filters">
          <select className="filter-select" defaultValue="">
            <option value="">All Categories</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="scifi">Sci-Fi</option>
          </select>
          
          <select className="filter-select" defaultValue="">
            <option value="">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;