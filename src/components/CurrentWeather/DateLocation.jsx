import axios from "axios";
import { format, fromUnixTime, isToday } from "date-fns";
import { useEffect } from "react";

const GeocodeAPI = "https://maps.googleapis.com/maps/api/geocode/json";
const DateLocation: React.FC<any> = ({ date, location }) => {
  const convertedDate = fromUnixTime(date);

  useEffect(() => {
    const query = `${GeocodeAPI}?latlng=${location.lat},${location.lon}&result_type=locality&key=AIzaSyBWHFsI6gIuGpAXlnBblbyatfrWgzOq-tA`;
    axios.get(query).then((res) => {
      const city = res.data.results[0].formatted_address;
      console.log(city);
    });
  }, [location.lat, location.lon]);
  return (
    <>
      <div className="flex flex-col justify-evenly items-center ">
        <div className="text-lg text-terciary font-medium mb-4 flex gap-1">
          <span className="">
            {isToday(convertedDate) ? "Today" : format(convertedDate, "EEEE")}
          </span>
          <span className="">•</span>
          <span className="">{format(convertedDate, "E, LLL do")}</span>
        </div>
        <div className="text-terciary flex items-center">
          <span className="material-icons">location_on</span>
          <span>Helsink</span>
        </div>
      </div>
    </>
  );
};

export default DateLocation;
