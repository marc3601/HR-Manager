import React from 'react'
import "./TopBar.scss"
const TopBar = ({ bar, setBar }) => {
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
                    <li className="breadcrumb-item">Strona główna</li>
                    <li className="breadcrumb-item-secondary">
                        <span className='breadcrumb-arrow'>&gt;</span>
                        <p className='breadcrumb-item-text'>Pracownicy</p>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default TopBar