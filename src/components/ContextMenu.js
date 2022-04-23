import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./ContextMenu.scss";
import useOutsideAlerter from "../utilities/useOutsideAlerter";
import { hideContextMenu } from "../features/calendarContextSlice";
const ContextMenu = (props) => {
  const wrapperRef = useRef();
  const calendarContext = useSelector((state) => state.calendar_context);

  let { settings } = props;
  useOutsideAlerter(wrapperRef, hideContextMenu);

  return (
    <div
      ref={wrapperRef}
      style={{
        left: `${calendarContext.cord.x}px`,
        top: `${calendarContext.cord.y}px`,
      }}
      className="context_menu"
    >
      <ul className="context_menu_list">
        <li>{settings.title}</li>
        {settings.options.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
