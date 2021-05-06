import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookStartLoadList } from "../actions/books";
import { uiOpenModal } from "../actions/ui";
import { Book } from "./Book";

export const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  console.log(books.length);
  const [inputValue, setInputValue] = useState("");

  const showModal = () => {
    dispatch(uiOpenModal());
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    //TODO: IMplement setInputValue
  };
  useEffect(() => {
    dispatch(bookStartLoadList());
  }, [dispatch]);
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />

        <button onClick={showModal}>
          <h2>
            <i className="fas fa-book-open"></i> New Book
          </h2>
        </button>
      </div>
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
              books
                .filter((book) => {
                  if (!inputValue) return true;
                  if (
                    book.name
                      .toUpperCase()
                      .includes(inputValue.toUpperCase()) ||
                    book.author
                      .toUpperCase()
                      .includes(inputValue.toUpperCase()) ||
                    book.ISBN.toUpperCase().includes(
                      inputValue.toUpperCase()
                    ) ||
                    book.editorial
                      .toUpperCase()
                      .includes(inputValue.toUpperCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((book, index) => {
                  return <Book book={book} key={index} />;
                })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
