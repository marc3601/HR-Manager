import React, { useRef } from "react";
import "./ContextMenu.scss";
import useOutsideAlerter from "../utilities/useOutsideAlerter";
const ContextMenu = (props) => {
    const wrapperRef = useRef();
    let { contextMenu, setContextMenu, i, months, currentMonth } = props;
    useOutsideAlerter(wrapperRef, setContextMenu);
    return (
        <div
            ref={wrapperRef}
            style={{
                left: `${contextMenu.cord.x}px`,
                top: `${contextMenu.cord.y}px`,
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
