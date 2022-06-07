const Search = () => {
  return (
    <div className="w-full h-full bg-secondary absolute inset-0 z-10 p-5 text-primary">
      {/* Close btn */}
      <div className="flex justify-end h-10 mb-3">
        <button className="material-icons">close</button>
      </div>
      {/* Search input */}
      <div className="flex items-stretch justify-between gap-3 mb-10">
        <div className="flex items-center flex-grow w-full px-2 gap-x-2 border-white-custom border border-solid">
          <i className="material-icons text-gray-custom ">search</i>
          <input
            className="outline-none bg-transparent w-full placeholder:text-gray-custom self-stretch"
            type="text"
            name="location"
            placeholder="Search location"
          />
        </div>
        <button className="bg-searchBtn w-20 h-12 flex-shrink-0">Search</button>
      </div>
      {/* Cities list */}
      <ul>
        <li className="flex items-center justify-between box-border p-4 group cursor-pointer border border-transparent hover:border-gray-custom mb-3">
          <span>city</span>
          <span className="material-icons text-gray-custom opacity-0 group-hover:opacity-100">
            navigate_next
          </span>
        </li>
        <li>city</li>
        <li>city</li>
      </ul>
    </div>
  );
};

export default Search;
