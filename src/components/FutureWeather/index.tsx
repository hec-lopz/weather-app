import WeatherCard from "./WeatherCard";

const FutureWeather: React.FC<any> = ({ dailyData }) => {
  if (dailyData === null) {
    return <></>;
  }
  return (
    <section className="py-14 ">
      <ul className="flex flex-wrap justify-center gap-7 text-white-custom text-base ">
        {dailyData.map((data: any, index: number) => {
          if (index === 0) {
            return;
          }
          return (
            <WeatherCard
              dt={data.dt}
              temp={data.temp}
              weather={data.weather[0]}
              key={data.dt}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default FutureWeather;
