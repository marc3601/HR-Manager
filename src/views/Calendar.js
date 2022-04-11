import React, { useState } from "react";
import "./Calendar.scss";
import ViewHeader from "../components/ViewHeader";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import { months, getCurrentMonth, getCurrentDay } from "../utilities/viewsData";
import useEventListener from "../utilities/useEventListener";
const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [contextMenu, setContextMenu] = useState({
        show: false,
        targetID: 0,
        cord: { x: 0, y: 0 },
    });

    const Arrows = ["39", "ArrowRight", "37", "ArrowLeft"];

    const keyPressHandler = ({ key }) => {
        if (Arrows.includes(String(key))) {
            if (key === "ArrowRight") {
                nextMonth();
            } else {
                previousMonth();
            }
        }
    };

    const daysArray = new Array(months[currentMonth].noOfDays).fill(0);

    useEventListener("keydown", keyPressHandler);

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

    const previousMonth = () => {
        setCurrentMonth((prev) => {
            if (currentMonth > 0 && currentMonth <= 11) {
                return (prev -= 1);
            } else return prev;
        });
    };

    const nextMonth = () => {
        setCurrentMonth((prev) => {
            if (currentMonth >= 0 && currentMonth < 11) {
                return (prev += 1);
            } else return prev;
        });
    };

    return (
        <div className="calendar_container" onKeyDown={() => console.log("ello")}>
            <ViewHeader title="Kalendarz" buttonTitle="Dodaj zdarzenie" />
            <div className="calendar_main">
                <div className="calendar">
                    <div className="calendar_month">
                        <div onClick={previousMonth} className="month_left">
                            <img src={arrow_left} alt="arrow_left" width={30} />{" "}
                        </div>{" "}
                        <h2 className="month_name"> {months[currentMonth].name} </h2>{" "}
                        <div onClick={nextMonth} className="month_right">
                            <img src={arrow_right} alt="arrow_right" width={30} />{" "}
                        </div>{" "}
                    </div>{" "}
                    <div className="calendar_grid">
                        <div className="days_names">
                            <div className="grid_item"> Poniedziałek </div>{" "}
                            <div className="grid_item"> Wtorek </div>{" "}
                            <div className="grid_item"> Środa </div>{" "}
                            <div className="grid_item"> Czwartek </div>{" "}
                            <div className="grid_item"> Piątek </div>{" "}
                            <div className="grid_item dayoff"> Sobota </div>{" "}
                            <div className="grid_item dayoff"> Niedziela </div>{" "}
                        </div>{" "}
                        <div className={`days_numbers`}>
                            {" "}
                            {daysArray.map((item, i) => {
                                let data = i + 1;
                                let holidayCheck = renderDaysOff(
                                    months[currentMonth].intialDay
                                ).find((element) => element === data);

                                return (
                                    <div
                                        onContextMenu={(e) => {
                                            e.preventDefault();
                                            let rect = e.target.getBoundingClientRect();
                                            let x = e.clientX - rect.left;
                                            let y = e.clientY - rect.top;
                                            setContextMenu((prev) => {
                                                return {
                                                    show: !prev.show,
                                                    targetID: e.target.id ? parseInt(e.target.id) : 0,
                                                    cord: { x, y },
                                                };
                                            });
                                        }}
                                        onClick={(e) => console.log(e.currentTarget.id)}
                                        key={i}
                                        id={i}
                                        className={`grid_item_number initial_day_${months[currentMonth].intialDay
                                            } ${data === getCurrentDay(currentMonth, getCurrentMonth())
                                                ? "today"
                                                : ""
                                            }  ${holidayCheck ? "dayoff_number" : ""}`}
                                    >
                                        {data}{" "}
                                        {contextMenu.show && contextMenu.targetID === i && (
                                            <div
                                                style={{
                                                    left: `${contextMenu.cord.x}px`,
                                                    top: `${contextMenu.cord.y}px`,
                                                }}
                                                className="context_menu"
                                            >
                                                <ul className="context_menu_list">
                                                    <li>{`Day of month: ${i + 1}`}</li>
                                                    <li>{months[currentMonth].name}</li>
                                                    <li>Menu option no 2</li>
                                                    <li>Menu option no 3</li>
                                                    <li>Menu option no 4</li>
                                                    <li>Menu option no 5</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default Calendar;
