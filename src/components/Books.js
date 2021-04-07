import React from "react";
import { Book } from "./Book";

export const Books = () => {
  return (
    <div className="books">
      <h2>BOOKS LIST</h2>
      <div className="list">
        <div className="header">
          <h4>ISBN</h4>
          <h4>NAME OF BOOK</h4>
          <h4>AUTHOR</h4>
          <h4>EDITORIAL</h4>
          <h4>ACTIONS</h4>
        </div>
        <div className="content">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </div>
  );
};
