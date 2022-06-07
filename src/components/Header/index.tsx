const Header = () => {
  return (
    <header className="bg-secondary  flex items-center px-3 py-4 ">
      <nav className="min-h-min w-full flex justify-between ">
        <button className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-40 h-10 bg-grayBtn text-white-custom hover:bg-zinc-600 ">
          Search for places
        </button>
        <button className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full bg-grayBtn  w-10 h-10 grid place-items-center text-white-custom hover:bg-zinc-600">
          <span className="material-icons">my_location</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
