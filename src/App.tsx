import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Highlights from "./components/Highlights";
import CurrentWeather from "./components/CurrentWeather";
import FutureWeather from "./components/FutureWeather";
import Layout from "./containers/Layout";
import Main from "./containers/MainSection";
import DetailsSection from "./containers/DetailsSection";
import Footer from "./containers/Footer";
import Search from "./components/Search";
import { WeatherAPI } from "./models/weather.model";

function App() {
  const [location, setLocation] = useState({ lat: 19.3494, lon: -99.1935 });
  const [weatherData, setWeatherData] = useState<
    WeatherAPI | { current: null; daily: null }
  >({ current: null, daily: null });
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearchBar = () => setShowSearch((prev) => !prev);
  useEffect(() => {
    const API = "https://api.openweathermap.org/data/3.0/onecall";
    axios
      .get<WeatherAPI>(API, {
        params: {
          lat: location.lat,
          lon: location.lon,
          exclude: "minutely,hourly,alerts",
          units: "metric",
          appid: process.env.REACT_APP_WEATHER_API,
        },
      })
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [location.lat, location.lon]);

  return (
    <Layout>
      <Main>
        <Header toggleSearchBar={toggleSearchBar} />
        <CurrentWeather currentData={weatherData.current} location={location} />
        {showSearch && <Search toggleSearchBar={toggleSearchBar} />}
      </Main>
      <DetailsSection>
        <FutureWeather dailyData={weatherData.daily} />
        <Highlights weatherData={weatherData.current} />
        <Footer />
      </DetailsSection>
    </Layout>
  );
}

export default App;
