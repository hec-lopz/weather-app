const ProgressBar: React.FC<any> = ({ percentage }) => {
  return (
    <div className="relative w-3/4 text-secondary py-5">
      <span className="absolute left-0 top-0">0</span>
      <span className="absolute left-1/2 top-0 translate-x-[-50%]">50</span>
      <span className="absolute right-0 top-0">100</span>
      <span className="absolute right-0 bottom-0">%</span>
      <div className="relative bg-white-custom rounded h-2 w-full overflow-hidden my-1 mb-2">
        <div
          className="bg-yellow-custom h-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
