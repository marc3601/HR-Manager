import React, { useState } from 'react'
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import MainSection from "./components/MainSection";
function App() {
  const [bar, setBar] = useState(!false)
  return (
    <div className="App">
      <Header />
      <TopBar bar={bar} setBar={setBar} />
      <MainSection bar={bar} />
    </div>
  );
}

export default App;
