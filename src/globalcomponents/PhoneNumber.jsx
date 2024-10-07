import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumber = ({ inputName, handleChange, inputVal, errorTxt, bg }) => {
  return (
    <>
      <PhoneInput
        forceDialCode={true}
        defaultCountry="ng"
        name={inputName}
        value={inputVal}
        onChange={handleChange}
        inputStyle={{
          height: "2.5rem",
          background: bg || "transparent",
        }}
        inputClassName={`!border ${
          errorTxt ? "!border-red-500" : "!border-gray-400"
        } text-gray-900 focus:!border-black focus:!border-2 ring-0 w-full focus:shadow-none`}
        countrySelectorStyleProps={{
          buttonStyle: {
            height: "2.5rem",
          },
          buttonClassName: `!border ${
            errorTxt ? "!border-red-500" : "!border-gray-400"
          } text-gray-900`,
        }}
      />
      {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
    </>
  );
};
export default PhoneNumber;
