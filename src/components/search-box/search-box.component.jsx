import React from "react";
import "./search-box.styles.scss";
import { ReactComponent as Search } from "../../assets/search.svg";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { setFetch } from "../../redux/books/books.actions";

class SearchBox extends React.Component {

  componentDidMount() {
    this.props.setFetch(true);
  }

  render() {
    const { handleChange, handleSubmit, value } = this.props;
    return (
      <div className="search-box">
        <Search className="magnifier" onClick={handleSubmit} />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Search Books"
          variant="outlined"
          value={value}
          onChange={handleChange}
          onKeyPress={event => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setFetch: fetch => dispatch(setFetch(fetch))
});

export default connect(null, mapDispatchToProps)(SearchBox);
