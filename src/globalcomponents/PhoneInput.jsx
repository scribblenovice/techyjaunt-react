import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumberInput = ({ inputName, handleChange, inputVal, errorTxt }) => {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <PhoneInput
      
        forceDialCode={true}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        defaultCountry="ng"
        name={inputName}
        value={inputVal}
        onChange={handleChange}
        inputStyle={{
          height: "2.5rem",
          background: "transparent",
        }}
        inputClassName={`!rounded-none !border-0 !border-b-[1.5px] transition-all ease-linear duration-200 ${
          errorTxt && (focused || !focused)
            ? "!border-b-red-500"
            : !errorTxt && focused
            ? "!border-b-blue-500"
            : "!border-b-gray-800"
        } !text-gray-800 ring-0 w-full focus:shadow-none`}
        countrySelectorStyleProps={{
          buttonStyle: {
            height: "2.5rem",
          },
          buttonClassName: `!rounded-none transition-all ease-linear duration-200 !border-0 !px-2 !border-b-[1.5px] !mr-2 ${
            errorTxt && (focused || !focused)
              ? "!border-b-red-500"
              : !errorTxt && focused
              ? "!border-b-blue-500"
              : "!border-b-gray-800"
          } text-gray-900`,
          dropdownStyleProps: {
            listItemCountryNameClassName:"",
            className: "rounded-md scrollbar-none !border-none !outline-none p-2 bg-tech-blue",
            listItemClassName: "aria-selected:bg-blue-gray-50 aria-selected:text-blue-gray-900 py-1 hover:bg-opacity-80 rounded-md px-2 flex transition-all ease-linear duration-200 text-white hover:text-blue-gray-900 hover:bg-blue-gray-50 focus:text-blue-gray-50 focus:bg-blue-gray-900",
            listItemDialCodeClassName: "ml-auto !text-inherit",
          },
          dropdownArrowClassName:"ml-2"
        }}
      />
      {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
    </>
  );
};
export default PhoneNumberInput;
