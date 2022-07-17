import type { MouseEventHandler } from "react";
import CloseBtn from "./CloseBtn";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import SearchListItem from "./SearchListItem";
import SearchUI from "./SearchUI";

interface SearchProps {
  toggleSearchBar: MouseEventHandler;
}

const Search = ({ toggleSearchBar }: SearchProps) => {
  return (
    <SearchUI>
      <CloseBtn toggleSearchBar={toggleSearchBar} />
      <SearchInput />
      <SearchList>
        <SearchListItem />
      </SearchList>
    </SearchUI>
  );
};

export default Search;
