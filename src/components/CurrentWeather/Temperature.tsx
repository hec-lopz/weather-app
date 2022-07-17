import { Current } from "../../models/weather.model";

const Temperature = ({
  temp,
  weather,
}: {
  temp: Current["temp"];
  weather: Current["weather"];
}) => {
  return (
    <>
      <img
        className="w-[150px]"
        src={`/images/${weather[0].icon}.png `}
        alt="Shower"
      />
      <div className="font-medium">
        <span className="text-9xl text-white-custom ">{Math.round(temp)}</span>
        <span className="text-secondary text-6xl ">°C</span>
      </div>
      <span className="block text-4xl text-secondary font-semibold capitalize">
        {weather[0].description}
      </span>
    </>
  );
};

export default Temperature;
