// HomeSearchBar.js
import React from 'react';
import "./CollectionSearchBar.css";

export default function CollectionSearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <label>Search</label>
      <input
        type="text"
        className="search-input"
        placeholder="Search for art by art name or artist..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
