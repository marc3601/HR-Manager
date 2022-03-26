import React from 'react'
import "./MainSection.scss"
import SideBar from "./SideBar"
const MainSection = (props) => {
    return (
        <section className='main_section'>
            <SideBar bar={props.bar} setBar={props.setBar} />
            <div className='view_section'>
                {props.children}
            </div>
        </section>
    )
}

export default MainSection