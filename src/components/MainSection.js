import React from 'react'
import "./MainSection.scss"
import SideBar from "./SideBar"
const MainSection = ({ bar }) => {
    return (
        <section className='main_section'>
            <SideBar bar={bar} />
            <div className='view_section'>
                <h1>Example text!</h1>
            </div>
        </section>
    )
}

export default MainSection