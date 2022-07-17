const SearchInput = () => {
  return (
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
  );
};

export default SearchInput;
