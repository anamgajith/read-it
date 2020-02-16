import { createSelector } from "reselect";

const selectBooksState = state => state.books;

export const selectBooks = createSelector([selectBooksState], books => books.books);

export const selectPending = createSelector([selectBooks], books =>
  books.filter(book => book.status === "pending")
);

export const selectReading = createSelector([selectBooks], books =>
  books.filter(book => book.status === "reading")
);

export const selectCompleted = createSelector([selectBooks], books =>
  books.filter(book => book.status === "completed")
);
