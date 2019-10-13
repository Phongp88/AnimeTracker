import React from 'react';

function searchbar() {
  return (
    <div className="searchBar">
        <input placeholder="Search for an anime, e.g Naruto" className="searchInput"></input><button className="searchGo">Go</button>
    </div>
  );
}

export default searchbar;