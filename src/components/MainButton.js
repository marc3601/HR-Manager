import React from "react";
import "./MainButton.scss";
import { Link } from "react-router-dom";
const MainButton = ({ text, onClick, link }) => {
  if (!link) {
    return (
      <button onClick={onClick} className="main_button">
        <span className="plus_sign">+ </span>
        <span className="button_text">{text}</span>
      </button>
    );
  } else {
    return (
      <Link to={link}>
        <button onClick={onClick} className="main_button">
          <span className="plus_sign">+ </span>
          <span className="button_text">{text}</span>
        </button>
      </Link>
    );
  }
};

export default MainButton;
