import React from "react";

import BookItem from "../book-item/book-item.component";

import "./books-display.styles.scss";

const BooksDisplay = ({ books }) => (
    <div className="card-list">
        {
            books.map(book => (
                <BookItem {...book}/>
            ))
        }
    </div>
);

export default BooksDisplay;
