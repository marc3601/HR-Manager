import React, { useState } from "react";
import "./Calendar.scss";
import ViewHeader from "../components/ViewHeader";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import { months, getCurrentMonth, getCurrentDay } from "../utilities/viewsData";
const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const daysArray = new Array(months[currentMonth].noOfDays).fill(0);

    const renderDaysOff = (initialDay = 1) => {
        let initialDays = [1, 2, 3, 4, 5, 6, 7];
        let reversed = [...initialDays].reverse();
        let initialDayOff = initialDays[reversed.indexOf(initialDay)];
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(initialDayOff);
            initialDayOff += 7;
        }
        return arr;
    };

    return (
        <div className="calendar_container">
            <ViewHeader title="Kalendarz" buttonTitle="Dodaj zdarzenie" />
            <div className="calendar_main">
                <div className="calendar">
                    <div className="calendar_month">
                        <div
                            onClick={() =>
                                setCurrentMonth((prev) => {
                                    if (currentMonth > 0 && currentMonth <= 11) {
                                        return (prev -= 1);
                                    } else return prev;
                                })
                            }
                            className="month_left"
                        >
                            <img src={arrow_left} alt="arrow_left" width={30} />
                        </div>
                        <h2 className="month_name">{months[currentMonth].name}</h2>
                        <div
                            onClick={() =>
                                setCurrentMonth((prev) => {
                                    if (currentMonth >= 0 && currentMonth < 11) {
                                        return (prev += 1);
                                    } else return prev;
                                })
                            }
                            className="month_right"
                        >
                            <img src={arrow_right} alt="arrow_right" width={30} />
                        </div>
                    </div>
                    <div className="calendar_grid">
                        <div className="days_names">
                            <div className="grid_item">Poniedziałek</div>
                            <div className="grid_item">Wtorek</div>
                            <div className="grid_item">Środa</div>
                            <div className="grid_item">Czwartek</div>
                            <div className="grid_item">Piątek</div>
                            <div className="grid_item dayoff">Sobota</div>
                            <div className="grid_item dayoff">Niedziela</div>
                        </div>
                        <div className={`days_numbers`}>
                            {daysArray.map((item, i) => {
                                let data = i + 1;
                                let holidayCheck = renderDaysOff(
                                    months[currentMonth].intialDay
                                ).find((element) => element === data);

                                return (
                                    <div
                                        onClick={() => console.log(data)}
                                        key={i}
                                        className={`grid_item_number initial_day_${months[currentMonth].intialDay
                                            } ${data === getCurrentDay(currentMonth, getCurrentMonth()) &&
                                            "today"
                                            }  ${holidayCheck ? "dayoff_number" : ""}`}
                                    >
                                        {data}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;