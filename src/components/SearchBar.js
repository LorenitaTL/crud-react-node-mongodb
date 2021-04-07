import React from "react";

export const SearchBar = ({ show }) => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />

      <button onClick={show}>
        <h2>
          <i className="fas fa-book-open"></i> New Book
        </h2>
      </button>
    </div>
  );
};
