import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { uiReducer } from "./uiReducer";
export const rootReducer = combineReducers({
  books: booksReducer,
  ui: uiReducer,
});
