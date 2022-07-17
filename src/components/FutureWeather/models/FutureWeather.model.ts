import { Daily } from "../../../models/weather.model";

export type WeatherCardProps = Pick<Daily, "dt" | "temp" | "weather">;
