import React from 'react'
import "./SideBar.scss"
import MenuItem from './MenuItem'
import { itemsData } from "../utilities/viewsData"
const SideBar = ({ bar }) => {
    let offset = bar ? 0 : -240 + "px"
    return (
        <div className='sidebar_container' style={{ left: offset }}>
            {itemsData.map(item => <MenuItem name={item.name} logo={item.logo} />)}
        </div>
    )
}

export default SideBar