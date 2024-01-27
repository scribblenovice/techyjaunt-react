import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={`mx-auto countdown-box h-24 md:h-28 flex justify-center items-center flex-col w-4/5 sm:w-2.5/5 md:w-3/5 lg:w-3/5`}
    >
      <p className=" text-6xl md:text-7xl">
        {value}
      </p>
      <p className="text-xs md:text-sm text-center">{type}</p>
    </div>
  );
};

export default DateTimeDisplay;
