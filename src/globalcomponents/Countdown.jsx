import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/UseCountdown";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter grid grid-cols-4 gap-x-6">
      <DateTimeDisplay value={days} type={"Days"} />
    
      <DateTimeDisplay value={hours} type={"Hours"} />
     
      <DateTimeDisplay value={minutes} type={"Mins"} />
      <DateTimeDisplay value={seconds} type={"Seconds"} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountdownTimer;
