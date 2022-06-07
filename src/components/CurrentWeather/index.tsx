import CurrentWeatherUi from "./CurrentWeatherUi";
import DateLocation from "./DateLocation";
import Temperature from "./Temperature";
type CurrentWeatherProps = {
  currentData: null | {
    dt: number;
    temp: number;
    location: {
      lat: number;
      lon: number;
    };
  };
};

const CurrentWeather: React.FC<any> = ({ currentData, location }) => {
  if (currentData === null) {
    return <h1>Cargando</h1>;
  }

  return (
    <CurrentWeatherUi>
      <Temperature temp={currentData.temp} weather={currentData.weather[0]} />
      <DateLocation dt={currentData.dt} location={location} />
    </CurrentWeatherUi>
  );
};

export default CurrentWeather;
