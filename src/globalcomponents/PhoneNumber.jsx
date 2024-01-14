// import { useCountries } from "use-react-countries";
// import {
//   Input,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Button,
// } from "@material-tailwind/react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumber = ({
  id,
  inputName,
  handleChange,
  inputVal,
  errorTxt,
  classes,
}) => {
  return (
    <>
      <PhoneInput
        defaultCountry="ng"
        name={inputName}
        value={inputVal}
        onChange={handleChange}
        // inputStyle={{
        //   borderColor: errorTxt ? "red" : "rgb(156 163 175)",
        //   width: "100%",
        //   borderTopRightRadius: "7px",
        //   borderBottomRightRadius: "7px",
        //   outline: "none",
        // }}
        inputClassName={`!border ${
          errorTxt ? "!border-red-500" : "!border-gray-400"
        } text-gray-900 focus:!border-black focus:!border-2 ring-0 w-full focus:shadow-none`}
        countrySelectorStyleProps={{
          buttonStyle: {
            borderColor: errorTxt ? "red" : "rgb(156 163 175)",
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
