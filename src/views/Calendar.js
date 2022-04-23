import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Calendar.scss";
import ViewHeader from "../components/ViewHeader";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import { months, getCurrentMonth, getCurrentDay, renderDaysOff, daysNames } from "../utilities/viewsData";
import useEventListener from "../utilities/useEventListener";
import ContextMenu from "../components/ContextMenu";
import {
  hideContextMenu,
  toogleContextMenu,
} from "../features/calendarContextSlice";
import {
  setCurrentMonthDown,
  setCurrentMonthUp,
} from "../features/currentMonthSlice";

const calendarContextManuSettings = {
  title: "Dodaj zdarzenie",
  options: [
    "Urlop wypoczynkowy",
    "Chorobowe",
    "Urlop bezpłatny"
  ]
}

const Calendar = () => {
  const dispatch = useDispatch();
  const calendarContext = useSelector((state) => state.calendar_context);
  const currentM = useSelector((state) => state.current_month);
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

  const daysArray = new Array(months[currentM].noOfDays).fill(0);

  useEventListener("keydown", keyPressHandler);

  const previousMonth = () => {
    dispatch(hideContextMenu());
    dispatch(setCurrentMonthDown());
  };

  const nextMonth = () => {
    dispatch(hideContextMenu());
    dispatch(setCurrentMonthUp());
  };

  const showContextMenu = (e) => {
    e.preventDefault();
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let id = e.target.id;
    dispatch(toogleContextMenu({ targetID: id, cord: { x: x, y: y } }));
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
            <h2 className="month_name"> {months[currentM].name} </h2>{" "}
            <div onClick={nextMonth} className="month_right">
              <img src={arrow_right} alt="arrow_right" width={30} />{" "}
            </div>{" "}
          </div>{" "}
          <div className="calendar_grid">
            <div className="days_names">
              {daysNames.map((day,i)=> (
                <div key={i} className="grid_item">{day.fullName}</div>
              ))}
            </div>{" "}
            <div className={`days_numbers`}>
              {" "}
              {daysArray.map((item, i) => {
                let data = i + 1;
                let holidayCheck = renderDaysOff(
                  months[currentM].intialDay
                ).find((element) => element === data);

                return (
                  <div
                    onContextMenu={(e) => showContextMenu(e)}
                    key={i}
                    id={i}
                    className={`grid_item_number initial_day_${
                      months[currentM].intialDay
                    } ${
                      data === getCurrentDay(currentM, getCurrentMonth())
                        ? "today"
                        : ""
                    }  ${holidayCheck ? "dayoff_number" : ""}`}
                  >
                    {data}{" "}
                    {calendarContext.show && calendarContext.targetID === i && (
                      <ContextMenu settings={calendarContextManuSettings} />
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
