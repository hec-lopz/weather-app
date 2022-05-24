const CurrentWeather = () => {
  return (
    <main className="overflow-hidden relative w-screen h-[810px] bg-secondary flex flex-col gap-y-16 items-center py-20">
      <div className="absolute bg-clouds opacity-10 bg-no-repeat bg-top bg-contain -left-16 -right-16 top-0 bottom-1/2"></div>
      <img className="w-[150px]" src="/Shower.png" alt="Shower" />
      <div className="font-medium">
        <span className="text-9xl text-white-custom ">15</span>
        <span className="text-secondary text-6xl ">°C</span>
      </div>
      <span className="block text-4xl text-secondary font-semibold ">
        Shower
      </span>
      <div className="flex flex-col justify-evenly items-center ">
        <div className="text-lg text-terciary font-medium mb-4">
          <span className="inline-block">Today</span>
          <span className="inline-block">•</span>
          <span className="inline-block">Fri, 5 Jun</span>
        </div>
        <div className="text-terciary flex items-center">
          <span className="material-icons">location_on</span>
          <span>Helsinki</span>
        </div>
      </div>
    </main>
  );
};

export default CurrentWeather;
