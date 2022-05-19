import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import MainSection from "./components/MainSection";
import Employees from "./views/Employees";
import Calendar from "./views/Calendar";
import Loader from "./components/Loader";
import "./App.css";
function App() {
  const loaderState = useSelector((state) => state.loader);
  useEffect(() => {
    loaderState
      ? document.body.classList.add("body_overflow")
      : document.body.classList.remove("body_overflow");

    if (!loaderState && document.body.hasAttribute("class")) {
      document.body.removeAttribute("class");
    }
  }, [loaderState]);
  return (
    <div className="App">
      <Header />
      <TopBar />
      <MainSection>
        <Routes>
          <Route path="/" element={<h1>Main page</h1>} />
          <Route path="employes" element={<Employees />} />
          <Route path="calendar" element={<Calendar />} />
          <Route exact path="employes/add" element={<h1>Add employee!</h1>} />
          <Route path="link2" element={<h1>Link2</h1>} />
          <Route path="link4" element={<h1>Link4</h1>} />
          <Route path="/*" element={<h1>Nothing's here yet!</h1>} />
        </Routes>
      </MainSection>
      {loaderState && <Loader />}
    </div>
  );
}

export default App;
