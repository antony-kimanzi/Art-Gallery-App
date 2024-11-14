// HomeSearchBar.js
import React from 'react';
import "./HomeSearchBar.css";

export default function HomeSearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <label>Search</label>
      <input
        type="text"
        className="search-input" // Add this class
        placeholder="Search for art by art name or artist..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
