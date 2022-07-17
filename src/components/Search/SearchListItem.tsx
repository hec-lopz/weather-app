const SearchListItem: React.FC<any> = () => {
  return (
    <li className="flex items-center justify-between box-border p-4 group cursor-pointer border border-transparent hover:border-gray-custom mb-3">
      <span>city</span>
      <span className="material-icons text-gray-custom opacity-0 group-hover:opacity-100">
        navigate_next
      </span>
    </li>
  );
};

export default SearchListItem;
