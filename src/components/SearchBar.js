import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCalendarEmployee } from "../features/calendarEmployeeSlice";
import "./SearchBar.scss";
import MainButton from "./MainButton";
import { daysOffData } from "../utilities/viewsData";
import { findEmployee } from "../utilities/searchEngine";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  let result;
  return (
    <div className="searchbox_container">
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Znajdż pracownika"
        className="search_box"
        type="search"
      />
      <MainButton
        text="Wyszukaj"
        onClick={() => {
          result = findEmployee(query, daysOffData);
          dispatch(setCalendarEmployee(result));
        }}
      />
    </div>
  );
};

export default SearchBar;
