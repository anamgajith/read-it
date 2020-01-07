import React from "react";


import BookItem from "../book-item/book-item.component";

import "./books-display.styles.scss";

const BooksDisplay = ({ books }) => (
  <div className="container">
    <div className="card-list">
      {books.map(book => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  </div>
);

export default BooksDisplay;
