import { WeatherCardProps } from "./models/FutureWeather.model";
import useFormatDate from "../../hooks/useFormatDate";
const WeatherCard = ({ dt, temp, weather }: WeatherCardProps) => {
  const date = useFormatDate(dt);

  return (
    <li className="w-32 h-44 bg-secondary flex flex-col justify-between items-center py-4">
      <span className="inline-block">{date}</span>
      <img className="w-14" src={`/images/${weather[0].icon}.png`} alt="" />
      <div className="flex justify-around w-full">
        <span className="">{Math.round(temp.max)}°C</span>
        <span className="text-secondary">{Math.round(temp.min)}°C</span>
      </div>
    </li>
  );
};

export default WeatherCard;
