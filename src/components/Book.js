import React from "react";
import { useDispatch } from "react-redux";
import {
  bookActive,
  bookStartDelete,
  clearBookActive,
} from "../actions/books";
import { uiOpenModal } from "../actions/ui";
import swal from "sweetalert";

export const Book = ({ book }) => {
  const dispatch = useDispatch();
  const setActive = (b, e) => {
    dispatch(bookActive(b));
    e === "edit" ? dispatch(uiOpenModal()) : deleteBook(b._id);
  };
  const deleteBook = (id) => {
    swal({
      title: "Delete Book",
      text: "Are you sure to delete this item?",
      icon: "warning",
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(bookStartDelete(id));
        dispatch(clearBookActive());
      }
    });
  };
  return (
    <div className="book">
      <div className="data">
        <p>{book.ISBN}</p>
      </div>
      <div className="data">
        <p>{book.name}</p>
      </div>
      <div className="data">
        <p>{book.author}</p>
      </div>
      <div className="data">
        <p>{book.editorial}</p>
      </div>
      <div className="data">
        <button
          className="edit"
          onClick={() => {
            setActive(book, "edit");
          }}
        >
          Edit <i className="fas fa-edit"></i>
        </button>
        <button
          className="delete"
          onClick={() => {
            setActive(book, "delete");
          }}
        >
          Delete <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
