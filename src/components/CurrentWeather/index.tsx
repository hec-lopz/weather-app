import CurrentWeatherUi from "./CurrentWeatherUi";
import DateLocation from "./DateLocation";
import { CurrentWeatherProps } from "./models/CurrentWeather.model";
import Temperature from "./Temperature";

const CurrentWeather = ({ currentData, location }: CurrentWeatherProps) => {
  if (currentData === null || location === null) {
    return <h1>Cargando</h1>;
  }

  return (
    <CurrentWeatherUi>
      <Temperature temp={currentData.temp} weather={currentData.weather} />
      <DateLocation dt={currentData.dt} location={location} />
    </CurrentWeatherUi>
  );
};

export default CurrentWeather;
