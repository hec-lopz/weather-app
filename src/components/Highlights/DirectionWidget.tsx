const DirectionWidget: React.FC<any> = ({ degrees }) => {
  const getDirection = (degrees: number): string => {
    if (degrees >= 350 || degrees <= 10) return "n";
    const directions: {} = {
      1: "nne",
      2: "ne",
      3: "ene",
      4: "e",
      5: "ese",
      6: "se",
      7: "sse",
      8: "s",
      9: "ssw",
      10: "sw",
      11: "wsw",
      12: "w",
      13: "wnw",
      14: "nw",
      15: "nnw",
    };
    const ratio = Math.floor((degrees + 11.25) / 22.5);

    return directions[`${ratio}` as keyof typeof directions];
  };
  const direction = getDirection(degrees);
  return (
    <div className="flex justify-between gap-2 mt-6">
      <span
        className="rounded-full w-5 h-5 grid place-items-center bg-grayBtn material-icons text-xs"
        style={{ transform: `rotate(${degrees}deg)` }}
      >
        navigation
      </span>
      <span className="uppercase">{direction}</span>
    </div>
  );
};

export default DirectionWidget;
