import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  bookStartAddNew,
  bookStartUpdate,
  clearBookActive,
} from "../actions/books";
import { uiCloseModal } from "../actions/ui";

const initData = {
  name: "",
  author: "",
  editorial: "",
  ISBN: "",
};
export const Form = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeBook } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initData);
  const { name, author, editorial, ISBN } = formValues;

  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(clearBookActive());
  };

  useEffect(() => {
    setFormValues(activeBook ?? initData);
  }, [activeBook, setFormValues]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("DATA BOOK", formValues);

    activeBook
      ? dispatch(bookStartUpdate(formValues))
      : dispatch(bookStartAddNew(formValues));

    closeModal();
  };
  return modalOpen
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="new-book">
            <form onSubmit={handleSubmitForm}>
              <div className="form">
                <h2>Add New Book</h2>

                <div className="input-form">
                  <label>Name of book:</label>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="input-form">
                  <label>Author:</label>
                  <div>
                    <input
                      type="text"
                      name="author"
                      value={author}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="input-form">
                  <label>ISBN:</label>
                  <div>
                    <input
                      type="text"
                      name="ISBN"
                      value={ISBN}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="input-form">
                  <label>Editorial:</label>
                  <div>
                    <input
                      type="text"
                      name="editorial"
                      value={editorial}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="options">
                  <button id="cancel" onClick={closeModal}>
                    <h3>
                      <i className="fa fa-times" aria-hidden="true"></i> Cancel
                    </h3>
                  </button>
                  <button type="submit" id="save">
                    <h3>
                      <i className="fa fa-check" aria-hidden="true"></i> Save
                    </h3>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
