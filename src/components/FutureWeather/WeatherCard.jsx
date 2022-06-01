const WeatherCard = () => {
  return (
    <li className="w-32 h-44 bg-secondary flex flex-col justify-between items-center py-4">
      <span className="inline-block">Tomorrow</span>
      <img className="w-14" src="/Shower.png" alt="" />
      <div className="flex justify-around w-full">
        <span className="">16°C</span>
        <span className="text-secondary">11°C</span>
      </div>
    </li>
  );
};

export default WeatherCard;
