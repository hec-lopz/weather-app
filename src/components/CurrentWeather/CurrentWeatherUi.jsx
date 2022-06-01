const CurrentWeatherUi = ({ children }) => {
  return (
    <main className="overflow-hidden relative h-[810px] bg-secondary flex flex-col gap-y-16 items-center py-20  lg:justify-evenly lg:min-h-0 lg:flex-grow">
      <div className="absolute bg-clouds opacity-10 bg-no-repeat bg-top bg-contain -left-16 -right-16 top-0 bottom-1/2"></div>
      {children}
    </main>
  );
};

export default CurrentWeatherUi;
