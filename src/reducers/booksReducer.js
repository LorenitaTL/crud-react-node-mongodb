import { types } from "../types/types";

const initialState = {
  books: [],
  activeBook: null,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.bookActive:
      return {
        ...state,
        activeBook: action.payload,
      };
    case types.bookListLoaded:
      return {
        ...state,
        books: [...action.payload],
      };

    case types.bookClearActive:
      return {
        ...state,
        activeBook: null,
      };
    // case types.bookAddNew:
    //   return {
    //     ...state,
    //     books: [...state.books, action.payload],
    //   };
    // case types.bookUpdated:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
