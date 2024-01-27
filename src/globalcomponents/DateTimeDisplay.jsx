import React from "react";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className={`countdown-box py-5 px-4 flex flex-col justify-center`}>
      <p className="font-bold text-4xl text-center">{value}</p>
      <span className="text-[0.65rem] md:text-sm text-center">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
