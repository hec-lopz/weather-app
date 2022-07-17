// Las unidades de presión se muestran en mb en mx y us

import { Current } from "../../models/weather.model";
import HighlightCard from "./HighlightCard";
import HighlightsUI from "./HighlightsUI";

interface HighlightsProps {
  weatherData: Current | null;
}
const Highlights = ({ weatherData }: HighlightsProps) => {
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
