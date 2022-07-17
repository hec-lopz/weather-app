import { WeatherAPI } from "../../models/weather.model";
import WeatherCard from "./WeatherCard";

interface FutureWeatherProps {
  dailyData: WeatherAPI["daily"] | null;
}
const FutureWeather = ({ dailyData }: FutureWeatherProps) => {
  if (dailyData === null) {
    return <></>;
  }
  return (
    <section className="py-14 ">
      <ul className="flex flex-wrap justify-center gap-7 text-white-custom text-base ">
        {dailyData.map((data: any, index: number) => {
          if (index === 0) {
            // eslint-disable-next-line array-callback-return
            return;
          }
          return (
            <WeatherCard
              dt={data.dt}
              temp={data.temp}
              weather={data.weather}
              key={data.dt}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default FutureWeather;
