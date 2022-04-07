import React from 'react'
import "./Calendar.scss"
import ViewHeader from "../components/ViewHeader"
import arrow_right from "../assets/arrow_right.png"
import arrow_left from "../assets/arrow_left.png"
const Calendar = () => {
    const days_off = [3, 10, 17, 24]
    const noOfDays = 30;
    const daysArray = new Array(noOfDays).fill(0);
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
                            {daysArray.map((item, i) => {
                                let data = i + 1;
                                let holidayCheck = days_off.find(element => element === data);

                                return <div onClick={() => console.log(data)} key={i} className={`grid_item_number ${holidayCheck ? "dayoff_number" : ""}`}>{data}</div>
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar