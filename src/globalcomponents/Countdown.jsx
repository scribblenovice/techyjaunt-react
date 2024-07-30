import React from "react";
import DateTimeDisplay, { CoursesCounterDispay } from "./DateTimeDisplay";
import { useCountdown } from "../hooks/UseCountdown";

export const CoursesCouter = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <div className={` grid grid-cols-2 gap-x-5 px-5 w-full lg:w-[60%] mx-auto`}>
      <CoursesCounterDispay
        value={days}
        type={`${days < 2 ? "Day" : "Days"}`}
      />
      <CoursesCounterDispay value={hours} type={`${hours < 2 ? "Hour" : "Hours"}`} />
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds, crypto }) => {
  return (
    <div
      className={`show-counter grid ${
        crypto ? "grid-cols-2 gap-x-5 px-5" : "grid-cols-4 gap-x-1"
      }   w-full md:w-[80%] mx-auto`}
    >
      {!crypto && (
        <>
          <DateTimeDisplay value={days} type={"Days"} />
          <DateTimeDisplay value={hours} type={"Hours"} />
        </>
      )}
      <DateTimeDisplay value={minutes} type={"Mins"} />
      <DateTimeDisplay value={seconds} type={"Seconds"} />
    </div>
  );
};

const CountdownTimer = ({ targetDate, crypto }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      crypto={crypto}
    />
  );
};

export default CountdownTimer;
