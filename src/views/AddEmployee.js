import React from "react";
import ViewHeader from "../components/ViewHeader";
import "./AddEmployee.scss";
const AddEmployee = () => {
  return (
    <div className="addemployee_container">
      <ViewHeader title="Dodaj pracownika" />
      <div className="addemployee_mandatory">
        <div className="mandatory_right">
          {/* Imię */}
          <label className="addemployee_input_lebel" htmlFor="add_name">
            Imię
          </label>
          <input
            placeholder="Podaj imię"
            className="addemployee_imput"
            id="add_name"
            type="text"
          />
          {/* PESEL */}
          <label className="addemployee_input_lebel" htmlFor="add_pesel">
            PESEL
          </label>
          <input
            placeholder="Podaj PESEL"
            className="addemployee_imput"
            id="add_pesel"
            type="number"
            maxLength={11}
            minLength={11}
          />
        </div>
        <div className="mandatory_left">
          {/* Nazwisko */}
          <label className="addemployee_input_lebel" htmlFor="add_surname">
            Nazwisko
          </label>
          <input
            placeholder="Podaj nazwisko"
            className="addemployee_imput"
            id="add_surname"
          />
          {/* Data urodzenia */}
          <label className="addemployee_input_lebel" htmlFor="add_birth">
            Data urodzenia
          </label>
          <input
            placeholder="Podaj datę urodzenia"
            className="addemployee_imput"
            id="add_birth"
            type="date"
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
