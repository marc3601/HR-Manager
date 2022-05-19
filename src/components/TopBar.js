import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogle } from "../features/sideMenuSlice";
import "./TopBar.scss";
import { itemsData } from "../utilities/viewsData";
const TopBar = () => {
  const menuBar = useSelector((state) => state.side_menu);

  const dispatch = useDispatch();
  const location = useLocation();

  const viewTitleFilter = itemsData.filter(
    (item) => item.link === location.pathname
  );
  const viewTitle = viewTitleFilter[0]?.name
    ? { name: viewTitleFilter[0].name, link: viewTitleFilter[0].link }
    : "";

  // const twoURLParams = () => {
  //   const urlParamsArray = location.pathname.split("/");
  //   return urlParamsArray.slice(1, urlParamsArray.length);
  // };

  // console.log(`No of url params is ${twoURLParams().length}`);
  return (
    <div className="topbar_container">
      <div className="burger_menu">
        <div onClick={() => dispatch(toogle())} className="burger">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <nav className="breadcrumb_container">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link
              onClick={() => menuBar && dispatch(toogle())}
              to="/"
              title="Strona główna"
            >
              <p className="breadcrumb-item-text">Strona główna</p>
            </Link>
          </li>
          <li className="breadcrumb-arrow">
            {" "}
            {viewTitle && viewTitle.name !== "Strona główna" && (
              <span>&gt;</span>
            )}
          </li>
          <li className="breadcrumb-item">
            <Link
              onClick={() => menuBar && dispatch(toogle())}
              to={viewTitle.link !== "/" && viewTitle.link}
              title={viewTitle.name}
            >
              <p className="breadcrumb-item-text">
                {viewTitle.name !== "Strona główna" && viewTitle.name}
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
