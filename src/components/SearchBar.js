import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../actions/ui";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(uiOpenModal());
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    //TODO: IMplement setInputValue
  };

  return (
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
  );
};
