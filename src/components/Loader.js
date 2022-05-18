import React from "react";
import { useDispatch } from "react-redux";
import { toogleLoader } from "../features/loaderSlice";
import "./Loader.scss";
const Loader = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(toogleLoader())} className="background">
      <div className="loader_container">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
