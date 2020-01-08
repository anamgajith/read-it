import React from "react";
import "./book-item.styles.scss";
import Button from "@material-ui/core/Button";

const BookItem = ({
  title,
  authors,
  pageCount,
  description,
  thumbnail,
  buttonText
}) => {
  return (
    <div className="card-container">
      <img src={thumbnail} alt="cover" />
      <div className="content">
        <p className="author">
          {authors.map((name,index) => (
            <span key={index}>{`${name},`}</span>
          ))}
        </p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <Button className="button" variant="outlined">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
