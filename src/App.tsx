import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Highlights from "./components/Highlights";
import CurrentWeather from "./components/CurrentWeather";
import FutureWeather from "./components/FutureWeather";
import Layout from "./containers/Layout";
import Main from "./containers/MainSection";
import Details from "./containers/DetailsSection";
import Footer from "./containers/Footer";

type WeatherData = null | {
  lat: number;
  lon: number;
  timezone: string;
  current?: Object;
  minutely?: Object;
  hourly?: Object;
  daily?: Object;
  alerts?: Object;
};
function App() {
  const API = "https://api.openweathermap.org/data/3.0/onecall";
  const [location, setLocation] = useState({ lat: 19.3494, lon: -99.1935 });
  const [weatherData, setWeatherData] = useState({ current: null });
  useEffect(() => {
    //debugger;
    console.log("Effect");
    axios
      .get(API, {
        params: {
          lat: location.lat,
          lon: location.lon,
          exclude: "minutely,hourly,alerts",
          units: "metric",
          appid: process.env.REACT_APP_WEATHER_API,
        },
      })
      .then((res) => {
        console.log("data", res.data);
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [location.lat, location.lon]);

  return (
    <Layout>
      <Main>
        <Header />
        <CurrentWeather currentData={weatherData.current} location={location} />
      </Main>
      <Details>
        <FutureWeather />
        <Highlights />
        <Footer />
      </Details>
    </Layout>
  );
}

export default App;
