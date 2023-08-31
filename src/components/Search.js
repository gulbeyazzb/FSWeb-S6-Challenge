import { Input } from "reactstrap";
import React from "react";

const Search = (props) => {
  const { searchText, changeHandler } = props;
  return (
    <div className="inputDiv">
      <Input
        type="text"
        placeholder="Arama"
        value={searchText}
        onChange={changeHandler}
      />
    </div>
  );
};
export default Search;
