import React from "react";
import ViewHeader from "../components/ViewHeader";
import "./AddEmployee.scss";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import { twoRowInputs } from "../utilities/viewsData";
const AddEmployee = () => {
  const rows = twoRowInputs();
  return (
    <div className="addemployee_container">
      <ViewHeader title="Dodaj pracownika" />
      <div className="addemployee_mandatory">
        <div className="addemployee_mandatory_flex">
          <div className="mandatory_right">
            {rows["first"].map((item, i) => (
              <Input
                key={`${i}i`}
                type={item.type}
                text={item.text}
                id={item.id}
                placeholder={item.placeholder}
              />
            ))}
          </div>
          <div className="mandatory_left">
            {rows["second"].map((item, i) => (
              <Input
                key={`${i}i`}
                type={item.type}
                text={item.text}
                id={item.id}
                placeholder={item.placeholder}
              />
            ))}
          </div>
        </div>
        <center>
          <MainButton text="Zapisz dane" />
        </center>
      </div>
    </div>
  );
};

export default AddEmployee;
