import React from "react";
import { withRouter } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

import BookItem from "../book-item/book-item.component";

import "./books-display.styles.scss";

const BooksDisplay = ({ books, buttonText, action, enableAdd, history }) => {
  return (
    <div className="container">
      <div className="card-list">
        {books.map(book => (
          <BookItem
            key={book.id}
            book={book}
            buttonText={buttonText}
            action={action}
          />
        ))}
        {enableAdd ? (
          <div className="add-item" onClick={() => history.push("./search")}>
            <Icon style={{ fontSize: 75 }}>add_circle</Icon>
            <h4>ADD A BOOK</h4>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(BooksDisplay);
