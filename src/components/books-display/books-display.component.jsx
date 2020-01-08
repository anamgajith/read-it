import React from "react";

import BookItem from "../book-item/book-item.component";

import "./books-display.styles.scss";

const BooksDisplay = ({ books, buttonText }) => {
  return(
    <div className="container">
      <div className="card-list">
        {books.map(book => (
          <BookItem key={book.id} {...book} buttonText={buttonText} />
        ))}
      </div>
    </div>
  );
}

export default BooksDisplay;
