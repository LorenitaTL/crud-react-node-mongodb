import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookStartLoadList } from "../actions/books";
import { Book } from "./Book";

export const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  console.log(books.length);

  useEffect(() => {
    dispatch(bookStartLoadList());
  }, [dispatch]);
  return (
    <div className="books">
      <div className="list">
        <div className="header">
          <big className="item">
            <h3>ISBN</h3>
          </big>
          <big className="item">
            <h3>NAME OF BOOK</h3>
          </big>
          <big className="item">
            <h3>AUTHOR</h3>
          </big>
          <big className="item">
            <h3>EDITORIAL</h3>
          </big>
          <big className="item">
            <h3>ACTIONS</h3>
          </big>
        </div>
        <div className="content">
          {books.length === 0 ? (
            <div>GETTING DATA</div>
          ) : (
            books.map((book, index) => {
              return <Book book={book} key={index} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};
