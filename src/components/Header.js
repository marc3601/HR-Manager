import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogle } from "../features/sideMenuSlice";
import "../components/Header.scss";
import User from "./User";
const Header = () => {
  const menuBar = useSelector((state) => state.side_menu);
  const dispatch = useDispatch();
  return (
    <header className="main">
      <div className="main_left">
        <Link
          className="logo_link"
          to="/"
          onClick={() => menuBar && dispatch(toogle())}
        >
          <div className="main_logo">
            <h1>
              Easy HR<sup>&reg;</sup>
            </h1>
          </div>
        </Link>
        <div className="main_title">
          <h2>HR Manager</h2>
        </div>
      </div>
      <div className="main_user">
        <User />
      </div>
    </header>
  );
};

export default Header;
