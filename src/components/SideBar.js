import React from 'react'
import "./SideBar.scss"
import MenuItem from './MenuItem'
import { itemsData } from "../utilities/viewsData"
const SideBar = ({ bar, setBar }) => {
    let offset = bar ? 0 : -240 + "px"
    return (
        <div className='sidebar_container' style={{ left: offset }}>
            {itemsData.map((item, i) => <MenuItem key={i} name={item.name} logo={item.logo} link={item.link} bar={bar} setBar={setBar} />)}
        </div>
    )
}

export default SideBar
