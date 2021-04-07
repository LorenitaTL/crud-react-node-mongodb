import React from "react";
import { Books } from "./components/Books";
import { Form } from "./components/Form";
import { SearchBar } from "./components/SearchBar";
import { useModal } from "./hooks/useModal";

export const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div>
      <div className="header">
        <big>
          <h1>Books</h1>
        </big>
      </div>
      <Form isShowing={isShowing} hide={toggle} />
      <SearchBar show={toggle} />
      <Books />
    </div>
  );
};
