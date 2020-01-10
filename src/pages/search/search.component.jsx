import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import SearchBox from "../../components/search-box/search-box.component";
import BooksDisplay from "../../components/books-display/books-display.component";

import { connect } from "react-redux";
import { addItem } from "../../redux/books/books.actions";

import "./search.styles.scss";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      books: [],
      visibility: "hidden"
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ text: value });
  };

  searchMode = () => {
    // eslint-disable-next-line default-case
    switch (this.state.visibility) {
      case "hidden":
        this.setState({ visibility: "visible" });
        break;
      case "visible":
        this.setState({ visibility: "hidden" });
        break;
    }
  };

  fetchData = () => {
    this.searchMode();
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
              thumbnail,
              status: "pending"
            };

            this.setState({ books: [...this.state.books, book] });
          },
          this.searchMode()
        );
      });
  };

  render() {
    const { visibility } = this.state;
    return (
      <div className="main">
        <div className="container">
          <SearchBox
            handleChange={this.handleChange}
            handleSubmit={this.fetchData}
            value={this.state.text}
          />
          <CircularProgress style={{ visibility: `${visibility}` }} />
          <BooksDisplay
            books={this.state.books}
            buttonText="Add to wishlist"
            action={this.props.addItem}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(SearchPage);
