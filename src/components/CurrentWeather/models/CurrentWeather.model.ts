import { Location } from "../../../models/location.model";
import { Current } from "../../../models/weather.model";

export interface DateLocationProps {
  dt: Current["dt"];
  location: Location;
}

export interface CurrentWeatherProps {
  currentData: Current | null;
  location: Location | null;
}
