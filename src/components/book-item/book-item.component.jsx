import React from "react";
import { withRouter } from "react-router-dom";
import "./book-item.styles.scss";
import Button from "@material-ui/core/Button";

const BookItem = ({ book, buttonText, action, history }) => {
  const { title, authors, description, thumbnail } = book;
  return (
    <div className="card-container">
      <img src={thumbnail} alt="cover" />
      <div className="content">
        <p className="author">
          {authors
            ? authors.map((name, index) => (
                <span key={index}>{`${name},`}</span>
              ))
            : null}
        </p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <Button
          className="button"
          variant="outlined"
          onClick={() => {
            action(book);
            history.push("./dashboard");
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default withRouter(BookItem);
