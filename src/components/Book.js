import React from "react";

export const Book = () => {
  return (
    <div className="book">
      <p>123456-789123</p>
      <p>Harry Potter</p>
      <p>JK Rowling</p>
      <p>Bloomsbury</p>
      <div>
        <button className="edit">E</button>
        <button className="delete">D</button>
      </div>
    </div>
  );
};
