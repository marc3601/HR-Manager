import React from 'react'
import "./MainSection.scss"
import SideBar from "./SideBar"
const MainSection = ({ bar }) => {
    return (
        <section className='main_section'>
            <SideBar bar={bar} />
        </section>
    )
}

export default MainSection