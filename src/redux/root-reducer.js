import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import booksReducer from "./books/books.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer
});

export default rootReducer;
