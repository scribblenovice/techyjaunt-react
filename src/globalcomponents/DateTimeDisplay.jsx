import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={`countdown-box py-5 px-4`}>
      <p className="font-bold text-4xl">{value}</p>
      <span className="text-xs md:text-sm">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
