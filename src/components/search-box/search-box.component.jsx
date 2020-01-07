import React from "react";
import "./search-box.styles.scss";
import { ReactComponent as Search } from "../../assets/search.svg";
import TextField from "@material-ui/core/TextField";

const SearchBox = ({handleChange,handleSubmit,value}) => {
  return (
    <div className="search-box">
      <Search className="magnifier" onClick={handleSubmit}/>
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
};

export default SearchBox;
