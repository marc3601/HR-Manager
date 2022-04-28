import React from "react";
import "./MainButton.scss";
const MainButton = ({ text }) => {
  return (
    <button className="main_button">
      <span className="plus_sign">+ </span>
      <span className="button_text">{text}</span>
    </button>
  );
};

export default MainButton;
