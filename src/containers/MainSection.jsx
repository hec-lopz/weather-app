const Main = ({ children }) => {
  return (
    <div className="lg:basis-1/3 lg:flex lg:items-stretch lg:flex-col">
      {children}
    </div>
  );
};

export default Main;
