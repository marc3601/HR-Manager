import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./ContextMenu.scss";
import useOutsideAlerter from "../utilities/useOutsideAlerter";
import { hideContextMenu } from "../features/calendarContextSlice";
const ContextMenu = (props) => {
    const wrapperRef = useRef();
    const calendarContext = useSelector((state) => state.calendar_context);
    let { i, months, currentMonth } = props;
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
                <li>{"Zaznaczona data:"}</li>
                <li>{`${i + 1} ${months[currentMonth].name}`}</li>
                <li>Menu option no 2</li>
                <li>Menu option no 3</li>
                <li>Menu option no 4</li>
                <li>Menu option no 5</li>
            </ul>
        </div>
    );
};

export default ContextMenu;
