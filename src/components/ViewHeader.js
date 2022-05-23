import React from "react";
import "./ViewHeader.scss";
const ViewHeader = (props) => {
  return (
    <div className="view_top">
      <div className="view_title_section">
        <h2 className="view_title">{props.title}</h2>
      </div>
      <div className="view_secondary_section">{props.children}</div>
    </div>
  );
};

export default ViewHeader;
