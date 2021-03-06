import BooksActionsTypes from "./books.types";
import { addItem, updateItem } from "./books.utils";
const INITIAL_VALUE = {
  books: [],
  firstFetch: false
};

const booksReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case BooksActionsTypes.ADD_ITEM:
      return {
        ...state,
        books: addItem(state.books, action.payload)
      };

    case BooksActionsTypes.UPDATE_ITEM:
      return {
        ...state,
        books: updateItem(state.books, action.payload)
      };

    case BooksActionsTypes.SET_BOOKS:
      return {
        ...state,
        books: action.payload
      };

    case BooksActionsTypes.SET_FETCH:
      return {
        ...state,
        firstFetch: action.payload
      };

    default:
      return state;
  }
};

export default booksReducer;
