import React from "react";
import "./EmployeeDataTab.scss";
const EmployeeDataTab = () => {
  return (
    <div className="data_tab_container">
      <div className="data_tab_info">
        <h4>Pracownik:</h4>
        <p>Czaja</p>
        <p>Marcin</p>
      </div>
      <div className="data_tab_leave">
        <h4>Pozostało urlopu za 2021:</h4>
        <p className="leave_left">15</p>
      </div>
      <div className="data_tab_leave">
        <h4>Pozostało urlopu za 2022:</h4>
        <p className="leave_left">4</p>
      </div>
    </div>
  );
};

export default EmployeeDataTab;
