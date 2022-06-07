const HighlightCardUI: React.FC<any> = ({ children, title, value, units }) => {
  return (
    <li className="min-h-[159px] bg-secondary min-w-0 flex flex-col gap-2 justify-center items-center p-5">
      <span className="inline-block font-medium text-base capitalize">
        {title}
      </span>
      <div className="flex gap-2 items-center">
        <span className="text-6xl font-bold">{value}</span>
        <span className="text-4xl font-medium">{units}</span>
      </div>
      {children}
    </li>
  );
};

export default HighlightCardUI;
