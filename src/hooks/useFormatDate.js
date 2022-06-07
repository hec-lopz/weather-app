import { useEffect, useState } from "react";
import { isTomorrow, fromUnixTime, format, isToday } from "date-fns";
const useFormatDate = (unixDate) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const convertedDate = fromUnixTime(unixDate);
    if (isToday(convertedDate)) {
      setDate(`Today • ${format(convertedDate, "E, LLL do")}`);
    } else if (isTomorrow(convertedDate)) {
      setDate("Tomorrow");
    } else {
      setDate(format(convertedDate, "E, LLL do"));
    }
  }, [unixDate]);

  return date;
};

export default useFormatDate;
