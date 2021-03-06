import React from "react";
import "./Employees.scss";
import Table from "../components/Table";
import { tableData } from "../utilities/viewsData";
import ViewHeader from "../components/ViewHeader";
import SearchBar from "../components/SearchBar";
import MainButton from "../components/MainButton";
const Employees = () => {
  return (
    <div className="employees_container">
      <ViewHeader title="Pracownicy">
        <MainButton text="Dodaj pracownika" link="/employes/add" />
      </ViewHeader>
      <div className="employees_main">
        <SearchBar />
      </div>
      <div className="employees_list">
        <h4 className="list_title">Wyniki wyszukiwania:</h4>
        <div className="list_table">
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default Employees;
