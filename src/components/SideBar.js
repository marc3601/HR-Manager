import React from 'react'
import "./SideBar.scss"
import people from "../assets/people.png"
const SideBar = ({ bar }) => {

    return (
        <div className='sidebar_container' style={{ left: bar ? 0 : -240 + "px" }}>
            <div className='menu_item'>
                <div className='menu_title'><p>Pracownicy</p></div>
                <div className='menu_icon'>
                    <img alt='people' width={30} src={people}></img>
                </div>
            </div>
            <div className='menu_item'>
                <div className='menu_title'><p>Pracownicy</p></div>
                <div className='menu_icon'>
                    <img alt='people' width={30} src={people}></img>
                </div>
            </div>
            <div className='menu_item'>
                <div className='menu_title'><p>Pracownicy</p></div>
                <div className='menu_icon'>
                    <img alt='people' width={30} src={people}></img>
                </div>
            </div>
        </div>
    )
}

export default SideBar