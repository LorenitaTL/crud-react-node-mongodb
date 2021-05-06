import React from "react";
import { Books } from "../components/Books";
import { Form } from "../components/Form";

export const HomePage = () => {
  return (
    <div>
      <div className="header">
        <big>
          <h1>Books</h1>
        </big>
      </div>
      <Form />
      <Books />
    </div>
  );
};
