import React from 'react'
import { useLocation, Link } from "react-router-dom";
import "./TopBar.scss"
import { itemsData } from "../utilities/viewsData";
const TopBar = ({ bar, setBar }) => {
    const location = useLocation();

    const viewTitleFilter = itemsData.filter(item => item.link === location.pathname)
    const viewTitle = viewTitleFilter[0]?.name ? viewTitleFilter[0].name : "";

    return (
        <div className='topbar_container'>
            <div className='burger_menu'>
                <div onClick={() => setBar(!bar)} className='burger'>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
            </div>
            <nav className='breadcrumb_container'>
                <ul className="breadcrumb">
                    <Link onClick={() => bar && setBar(!bar)} className='main_page_return' to="/">
                        <li className="breadcrumb-item">Strona główna</li>
                    </Link>
                    <li className="breadcrumb-item-secondary">
                        {viewTitle && viewTitle !== "Strona główna" && <span className='breadcrumb-arrow'>&gt;</span>}
                        <p className='breadcrumb-item-text'>{viewTitle !== "Strona główna" && viewTitle}</p>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default TopBar