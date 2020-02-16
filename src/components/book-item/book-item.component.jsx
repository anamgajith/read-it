import React from "react";
import { withRouter } from "react-router-dom";
import "./book-item.styles.scss";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectBooks } from "../../redux/books/books.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { updateBooks } from "../../api/api.utils";

const BookItem = ({ user, books, book, buttonText, action, history }) => {
  const { title, authors, description, thumbnail } = book;
  return (
    <div className="card-container">
      <img src={thumbnail} alt="cover" />
      <div className="content">
        <p className="author">
          {authors?authors.map((name, index) => (
            <span key={index}>{`${name},`}</span>
          )):null}
        </p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <Button
          className="button"
          variant="outlined"
          onClick={() => {
            action(book);
            updateBooks(user, books);
            history.push("./dashboard");
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  books: selectBooks
});

export default connect(mapStateToProps)(withRouter(BookItem));
