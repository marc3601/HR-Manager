import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import MainSection from "./components/MainSection";
function App() {
  const [bar, setBar] = useState(false);
  return (
    <div className="App">
      <Header />
      <TopBar bar={bar} setBar={setBar} />
      <MainSection bar={bar} setBar={setBar}>
        <Routes>
          <Route path="/" element={<h1>Main page</h1>} />
          <Route path="employes" element={<h1>Employes view</h1>} />
          <Route path="calendar" element={<h1>Calendar view</h1>} />
          <Route path="link2" element={<h1>Link2</h1>} />
          <Route path="link4" element={<h1>Link4</h1>} />
          <Route path="/*" element={<h1>Nothing's here!</h1>} />
        </Routes>
      </MainSection>
    </div>
  );
}

export default App;
