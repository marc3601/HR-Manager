import React from "react";
import { useSelector } from "react-redux";
import "./EmployeeDataTab.scss";
const EmployeeDataTab = () => {
  const tabState = useSelector((state) => state.calendar_employee);
  return (
    <div className="data_tab_container">
      <div className="data_tab_info">
        <h4>Pracownik:</h4>
        <p>{tabState[0] ? tabState[0].surname : "-"}</p>
        <p>{tabState[0] ? tabState[0].name : "-"}</p>
      </div>
      <div className="data_tab_leave">
        <h4>Pozostało urlopu za 2021:</h4>
        <p className="leave_left">
          {tabState[0] ? tabState[0].daysOffLastYear : "-"}
        </p>
      </div>
      <div className="data_tab_leave">
        <h4>Pozostało urlopu za 2022:</h4>
        <p className="leave_left">
          {tabState[0] ? tabState[0].daysOffThisYear : "-"}
        </p>
      </div>
    </div>
  );
};

export default EmployeeDataTab;
