import React from "react";
import "./book-item.styles.scss";
import Button from "@material-ui/core/Button";

const BookItem = ({ book, buttonText, action }) => {
  const { title, authors, description, thumbnail } = book;
  return (
    <div className="card-container">
      <img src={thumbnail} alt="cover" />
      <div className="content">
        <p className="author">
          {authors.map((name, index) => (
            <span key={index}>{`${name},`}</span>
          ))}
        </p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        {buttonText ? (
          <Button
            className="button"
            variant="outlined"
            onClick={() => {
              if (action) {
                action(book);
              }
            }}
          >
            {buttonText}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default BookItem;
