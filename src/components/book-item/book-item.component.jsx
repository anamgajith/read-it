import React from "react";
import "./book-item.styles.scss";
import Button from "@material-ui/core/Button";

const BookItem = ({ title, authors, pageCount, description, thumbnail }) => {
  return (
    <div className="card-container">
      <img
        src={thumbnail}
        alt="cover"
      />
      <div className="content">
        <p className="author">Tripati</p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <Button className="button" variant="outlined">
          Add to wishlist
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
