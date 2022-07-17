import type { MouseEventHandler } from "react";

const CloseBtn: React.FC<{ toggleSearchBar: MouseEventHandler }> = ({
  toggleSearchBar,
}) => {
  return (
    <div className="flex justify-end h-10 mb-3">
      <button
        className="material-icons p-1 hover:text-secondary"
        onClick={toggleSearchBar}
      >
        close
      </button>
    </div>
  );
};

export default CloseBtn;
