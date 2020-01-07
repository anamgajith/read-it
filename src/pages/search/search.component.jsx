import React from "react";

import SearchBox from "../../components/search-box/search-box.component";
import BooksDisplay from "../../components/books-display/books-display.component";

import "./search.styles.scss";

class SearchPage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      books: []
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ text: value });
  };

  fetchData = () => {
    this.setState({ text: "" });
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.text}`)
      .then(result => result.json())
      .then(result => {
        this.setState({ books: [] });
        result.items.forEach(
          ({
            id,
            volumeInfo: { title, authors, pageCount, description, imageLinks }
          }) => {
            const thumbnail = imageLinks
              ? imageLinks.thumbnail
              : "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg";
            const book = {
              id,
              title,
              authors,
              pageCount,
              description,
              thumbnail
            };

            this.setState({ books: [...this.state.books, book] });
          }
        );
      });
  };

  render() {
    return (
      <div className="container">
        <SearchBox
          handleChange={this.handleChange}
          handleSubmit={this.fetchData}
          value={this.state.text}
        />
        <BooksDisplay books={this.state.books} />
      </div>
    );
  }
}

export default SearchPage;
