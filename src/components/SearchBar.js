import React from "react";
import "./SearchBar.scss";
import MainButton from "./MainButton";
const SearchBar = () => {
  return (
    <div className="searchbox_container">
      <input
        placeholder="Znajdż pracownika"
        className="search_box"
        type="search"
      />
      <MainButton text="Wyszukaj" />
    </div>
  );
};

export default SearchBar;
