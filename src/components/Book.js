import React from "react";

export const Book = () => {
  return (
    <div className="book">
      <div className="data">
        <p>123456-789123</p>
      </div>
      <div className="data">
        <p>Harry Potter</p>
      </div>
      <div className="data">
        <p>JK Rowling</p>
      </div>
      <div className="data">
        <p>Bloomsbury</p>
      </div>
      <div className="data">
        <button className="edit">
          Edit <i className="fas fa-edit"></i>
        </button>
        <button className="delete">
          Delete <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
