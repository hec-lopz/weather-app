import HighlightCardUI from "./HighlightCardUI";
import ProgressBar from "./ProgressBar";
import DirectionWidget from "./DirectionWidget";

const HighlightCard: React.FC<any> = ({ value, variant, details = {} }) => {
  let showProgress, showDirection, title, units;
  const { degrees } = details;
  switch (variant) {
    case "humidity":
      showProgress = true;
      title = "humidity";
      units = "%";
      break;
    case "wind":
      showDirection = true;
      title = "wind status";
      units = "m/s";
      break;
    case "visibility":
      title = "visibility";
      units = "km";
      value = (value / 1000).toFixed(1);
      break;
    case "pressure":
      title = "air pressure";
      units = "mb";
      break;
  }
  return (
    <HighlightCardUI title={title} value={value} units={units}>
      {showDirection && <DirectionWidget degrees={degrees} />}
      {showProgress && <ProgressBar percentage={value} />}
    </HighlightCardUI>
  );
};

export default HighlightCard;
