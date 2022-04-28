import React from "react";
import "./ViewHeader.scss";
import MainButton from "../components/MainButton";
const ViewHeader = ({ title, buttonTitle }) => {
  return (
    <div className="view_top">
      <div className="view_title_section">
        <h2 className="view_title">{title}</h2>
      </div>
      {buttonTitle && (
        <div className="view_button_section">
          <MainButton text={buttonTitle} />
        </div>
      )}
    </div>
  );
};

export default ViewHeader;
