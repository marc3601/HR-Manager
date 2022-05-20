import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogle } from "../features/sideMenuSlice";
import "./TopBar.scss";
import { itemsData } from "../utilities/viewsData";
import Breadcrumb from "../utilities/Breadcrumb";
const TopBar = () => {
  const [navItems, setNavItems] = useState([]);
  const menuBar = useSelector((state) => state.side_menu);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const topNav = new Breadcrumb(location, itemsData);
    setNavItems(topNav.createItems());
  }, [location]);

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
              className="breadcrumb-link"
              onClick={() => menuBar && dispatch(toogle())}
              to="/"
              title="Strona główna"
            >
              <p className="breadcrumb-item-text">Strona główna</p>
            </Link>
          </li>
          {navItems.map((item, i) => (
            <React.Fragment key={`${i}nv`}>
              <li className="breadcrumb-arrow">
                <span>&gt;</span>
              </li>
              <li className="breadcrumb-item">
                <Link
                  className="breadcrumb-link"
                  onClick={() => menuBar && dispatch(toogle())}
                  to={item.link}
                  title={item.name}
                >
                  <p className="breadcrumb-item-text">{item.name}</p>
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
