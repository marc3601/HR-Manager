import React from 'react'
import "./Calendar.scss"
import ViewHeader from "../components/ViewHeader"
import arrow_right from "../assets/arrow_right.png"
import arrow_left from "../assets/arrow_left.png"
const Calendar = () => {
    const april_days = ["", "", "", "", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const days_off = [3, 10, 17, 24]
    return (
        <div className='calendar_container'>
            <ViewHeader title="Kalendarz" buttonTitle="Dodaj zdarzenie" />
            <div className='calendar_main'>
                <div className='calendar'>
                    <div className='calendar_month'>
                        <div className='month_left'>
                            <img src={arrow_left} alt='arrow_left' width={30} />
                        </div>
                        <h2 className='month_name'>Kwiecień 2022</h2>
                        <div className='month_right'>
                            <img src={arrow_right} alt='arrow_right' width={30} />
                        </div>
                    </div>
                    <div className='calendar_grid'>
                        <div className='days_names'>
                            <div className='grid_item'>Poniedziałek</div>
                            <div className='grid_item'>Wtorek</div>
                            <div className='grid_item'>Środa</div>
                            <div className='grid_item'>Czwartek</div>
                            <div className='grid_item'>Piątek</div>
                            <div className='grid_item dayoff'>Sobota</div>
                            <div className='grid_item dayoff'>Niedziela</div>
                        </div>
                        <div className='days_numbers'>
                            {april_days.map((item, i) => {
                                let holidayCheck = days_off.find(element => element === item);

                                return <div key={i} className={`grid_item_number ${holidayCheck ? "dayoff_number" : ""}`}>{item}</div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar