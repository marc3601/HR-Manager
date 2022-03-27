import React from 'react'
import "./Employees.scss"
import MainButton from '../components/MainButton'
const Employees = () => {
    return (
        <div className='employees_container'>
            <div className='employees_top'>
                <div className='employees_title_section'>
                    <h2 className='employees_title'>Pracownicy</h2>
                </div>
                <div className='employees_button_section'>
                    <MainButton text="Dodaj nowego pracownika" />
                </div>
            </div>
            <div className='employees_main'>
                <div className='searchbox_container'>
                    <input placeholder='Znajdż pracownika' className='employees_search' type="search" />
                    <MainButton text="Wyszukaj" />
                </div>
            </div>
        </div>
    )
}

export default Employees