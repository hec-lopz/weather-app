import { Current } from "../../../models/weather.model";

enum Variants {
  HUMIDITY = "humidity",
  VISIBILITY = "visibility",
  PRESSURE = "pressure",
  WIND = "wind",
}

export interface HighlightCardProps {
  value:
    | Current[Variants.HUMIDITY]
    | Current[Variants.PRESSURE]
    | Current[Variants.VISIBILITY];
  variant:
    | Variants.HUMIDITY
    | Variants.VISIBILITY
    | Variants.PRESSURE
    | Variants.WIND;
  details?: { degrees?: Current["wind_deg"] };
}
