// Las unidades de presión se muestran en mb en mx y us

import HighlightCard from "./HighlightCard";
import HighlightsUI from "./HighlightsUI";

const Highlights: React.FC<any> = ({ weatherData }) => {
  if (!weatherData) return <></>;
  return (
    <HighlightsUI>
      <HighlightCard
        value={weatherData.wind_speed}
        variant="wind"
        details={{ degrees: weatherData.wind_deg }}
      />
      <HighlightCard value={weatherData.humidity} variant="humidity" />
      <HighlightCard value={weatherData.visibility} variant="visibility" />
      <HighlightCard value={weatherData.pressure} variant="pressure" />
    </HighlightsUI>
  );
};

export default Highlights;
