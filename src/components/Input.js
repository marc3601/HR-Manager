import React from "react";
import "./Input.scss";
import PropTypes from "prop-types";
const Input = ({ type, text, placeholder, id }) => {
  return (
    <>
      {" "}
      <label className="input_lebel" htmlFor={id}>
        {text}
      </label>
      <input placeholder={placeholder} className="input" id={id} type={type} />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired || PropTypes.number.isRequired,
};

export default Input;
