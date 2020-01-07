import React from "react";

import SearchBox from "../../components/search-box/search-box.component";
import BookItem from "../../components/book-item/book-item.component";

import "./search.styles.scss";

class SearchPage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
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
      .then(result => console.log(result.items));
  };

  render() {
    return (
      <div className="container">
        <SearchBox
          handleChange={this.handleChange}
          handleSubmit={this.fetchData}
          value={this.state.text}
        />
        <BookItem/>
      </div>
    );
  }
}

export default SearchPage;
