import BooksActionTypes from "./books.types";

export const addItem = item => ({
  type: BooksActionTypes.ADD_ITEM,
  payload: item
});

export const updateItem = item => ({
  type: BooksActionTypes.UPDATE_ITEM,
  payload: item
});

export const setBooks = books => ({
  type: BooksActionTypes.SET_BOOKS,
  payload: books
});