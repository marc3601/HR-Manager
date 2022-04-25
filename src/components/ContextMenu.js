import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./ContextMenu.scss";
import useOutsideAlerter from "../utilities/useOutsideAlerter";
import { hideContextMenu } from "../features/calendarContextSlice";
const ContextMenu = (props) => {
  const calendarContext = useSelector((state) => state.calendar_context);

  const wrapperRef = useRef();
  const { settings, contextPosition, setContextPosition } = props;

  useEffect(() => {
    const rect = wrapperRef.current.getBoundingClientRect();
    setContextPosition(() => {
      if (window.innerWidth <= rect.right) {
        return {
          right: `0px`,
          top: `${calendarContext.cord.y}px`,
        };
      } else if (window.innerWidth > rect.right)
        return {
          left: `${calendarContext.cord.x}px`,
          top: `${calendarContext.cord.y}px`,
        };
    });

    return () => {
      setContextPosition({
        left: `${calendarContext.cord.x}px`,
        top: `${calendarContext.cord.y}px`,
      });
    };
  }, [calendarContext.cord.x, calendarContext.cord.y, setContextPosition]);

  useOutsideAlerter(wrapperRef, hideContextMenu);
  return (
    <div ref={wrapperRef} style={contextPosition} className="context_menu">
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
