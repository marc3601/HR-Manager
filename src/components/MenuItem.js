import React from 'react'
import "./MenuItem.scss"
const MenuItem = ({ name, logo }) => {
    return (
        <div className='menu_item'>
            <div className='menu_title'><p>{name}</p></div>
            <div className='menu_icon'>
                <img alt='people' width={30} src={logo}></img>
            </div>
        </div>
    )
}

export default MenuItem