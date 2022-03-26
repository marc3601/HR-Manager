import React from 'react'
import { Link } from "react-router-dom";
import "./MenuItem.scss"
const MenuItem = (props) => {
    const hideSideMenu = () => {
        props.bar && props.setBar(!props.bar)
    }
    return (
        <Link onClick={hideSideMenu} className='item_link' to={props.link}>
            <div className='menu_item'>
                <div className='menu_title'><p>{props.name}</p></div>
                <div className='menu_icon'>
                    <img alt='people' width={30} src={props.logo}></img>
                </div>
            </div>
        </Link>
    )
}

export default MenuItem