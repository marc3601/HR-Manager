import React from 'react'
import { Link } from "react-router-dom";
import "../components/Header.scss"
import User from './User'
const Header = () => {
    return (
        <header className='main'>
            <div className='main_left'>
                <Link className='logo_link' to="/">
                    <div className='main_logo'>
                        <h1>Easy HR<sup>&reg;</sup></h1>
                    </div>
                </Link>
                <div className='main_title'>
                    <h2>HR Manager</h2>
                </div>
            </div>
            <div className='main_user'>
                <User />
            </div>
        </header>
    )
}

export default Header