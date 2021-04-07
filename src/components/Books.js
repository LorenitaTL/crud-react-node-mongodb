import React from "react";
import { Book } from "./Book";

export const Books = () => {
  return (
    <div className="books">
      <div className="list">
        <div className="header">
          <big className="item"><h3>ISBN</h3></big>
          <big className="item"><h3>NAME OF BOOK</h3></big>
          <big className="item"><h3>AUTHOR</h3></big>
          <big className="item"><h3>EDITORIAL</h3></big>
          <big className="item"><h3>ACTIONS</h3></big>
          
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
