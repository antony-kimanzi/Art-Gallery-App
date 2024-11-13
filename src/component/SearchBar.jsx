import React from 'react';

export default function SearchBar({query, setQuery}) {

  return (
    <div>
      <input
        type="text"
        placeholder="Search for art by title or artist"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
