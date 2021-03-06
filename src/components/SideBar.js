import React from "react";
import { useSelector } from "react-redux";
import "./SideBar.scss";
import MenuItem from "./MenuItem";
import { itemsData } from "../utilities/viewsData";
const SideBar = () => {
  const menuBar = useSelector((state) => state.side_menu);
  let offset = menuBar ? 0 : -240 + "px";

  return (
    <div className="sidebar_container" style={{ left: offset }}>
      {itemsData.map((item, i) => {
        if (typeof item.logo === "string") {
          return (
            <MenuItem
              key={i}
              name={item.name}
              logo={item.logo}
              link={item.link}
            />
          );
        } else return null;
      })}
    </div>
  );
};

export default SideBar;
