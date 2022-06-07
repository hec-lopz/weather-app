import axios from "axios";
import { format, fromUnixTime, isToday } from "date-fns";
import { useEffect, useState } from "react";
import useFormatDate from "../../hooks/useFormatDate";

const GeocodeAPI = "https://maps.googleapis.com/maps/api/geocode/json";
const DateLocation: React.FC<any> = ({ dt, location }) => {
  const [city, setCity] = useState("");
  const date = useFormatDate(dt);

  useEffect(() => {
    axios
      .get(GeocodeAPI, {
        params: {
          latlng: `${location.lat},${location.lon}`,
          language: "en",
          result_type: "locality",
          key: process.env.REACT_APP_GEOCODE_API,
        },
      })
      .then((res) => {
        const city = res.data.results[0].formatted_address;
        setCity(city);
      });
  }, [location.lat, location.lon]);
  return (
    <>
      <div className="flex flex-col justify-evenly items-center ">
        <div className="text-lg text-terciary font-medium mb-4 flex gap-1">
          <span className="">{date}</span>
        </div>
        <div className="text-terciary flex items-center">
          <span className="material-icons">location_on</span>
          <span>{city}</span>
        </div>
      </div>
    </>
  );
};

export default DateLocation;
