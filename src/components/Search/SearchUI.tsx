import type { ReactElement } from "react";

const SearchUI: React.FC<{ children: ReactElement[] }> = ({ children }) => {
  return (
    <div className="w-full h-full bg-secondary absolute inset-0 z-10 p-5 text-primary">
      {children}
    </div>
  );
};
export default SearchUI;
