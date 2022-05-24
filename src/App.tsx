import React from "react";

import Header from "./components/Header";
import Highlights from "./components/Highlights";
import CurrentWeather from "./components/CurrentWeather";
import FutureWeather from "./components/FutureWeather";

function App() {
  return (
    <>
      <Header />
      <CurrentWeather />
      <FutureWeather />
      <Highlights />
    </>
  );
}

export default App;
