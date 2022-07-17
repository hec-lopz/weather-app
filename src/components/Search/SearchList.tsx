import { ReactElement } from "react";

const SearchList: React.FC<{ children: ReactElement[] | ReactElement }> = ({
  children,
}) => <ul>{children}</ul>;

export default SearchList;
