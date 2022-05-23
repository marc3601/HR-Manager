import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Calendar.scss";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import ViewHeader from "../components/ViewHeader";
import SearchBar from "../components/SearchBar";
import EmployeeDataTab from "../components/EmployeeDataTab";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import {
  months,
  getCurrentMonth,
  getCurrentDay,
  renderDaysOff,
  daysNames,
  calendarContextManuSettings,
} from "../utilities/viewsData";
import useEventListener from "../utilities/useEventListener";
import {
  setCurrentMonthDown,
  setCurrentMonthUp,
} from "../features/currentMonthSlice";
import { toogleContextMenu } from "../features/calendarContextSlice";
import MainButton from "../components/MainButton";

const Calendar = () => {
  const calendarContext = useSelector((state) => state.calendar_context);
  const currentM = useSelector((state) => state.current_month);
  const dispatch = useDispatch();
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
    dispatch(setCurrentMonthDown());
    dispatch(toogleContextMenu());
    setTimeout(() => {
      dispatch(toogleContextMenu());
    }, 20);
  };

  const nextMonth = () => {
    dispatch(setCurrentMonthUp());
    dispatch(toogleContextMenu());
    setTimeout(() => {
      dispatch(toogleContextMenu());
    }, 20);
  };

  return (
    <div className="calendar_container">
      <ViewHeader title="Kalendarz">
        <MainButton text="Dodaj zdarzenie" />
      </ViewHeader>
      <div className="calendar_search">
        <SearchBar />
      </div>
      <div className="calendar_data_tab">
        <EmployeeDataTab />
      </div>
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
              {daysNames.map((day, i) => (
                <div
                  key={i}
                  className={`grid_item ${i === 5 || i === 6 ? "dayoff" : ""}`}
                >
                  {day.fullName}
                </div>
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
                  <React.Fragment key={`${i}frm`}>
                    <ContextMenuTrigger
                      key={`id${i}`}
                      id={`id${i}`}
                      attributes={{
                        className: `grid_item_number initial_day_${
                          months[currentM].intialDay
                        } ${
                          data === getCurrentDay(currentM, getCurrentMonth())
                            ? "today"
                            : ""
                        } ${holidayCheck ? "dayoff_number" : ""}`,
                      }}
                    >
                      {data}{" "}
                    </ContextMenuTrigger>
                    {!calendarContext && (
                      <ContextMenu key={`id${i}a`} id={`id${i}`}>
                        <MenuItem
                          key={"a1"}
                        >{`${data} ${months[currentM].name}`}</MenuItem>
                        {calendarContextManuSettings.options.map((item, i) => (
                          <MenuItem key={"a2" + i}>{item}</MenuItem>
                        ))}
                      </ContextMenu>
                    )}
                  </React.Fragment>
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
