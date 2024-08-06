import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
const GlobalSelect2 = ({
  options,
  handleChange,
  inputVal,
  inputName,
  errorTxt,
  menuClass,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <Select
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
        value={inputVal}
        name={inputName}
        menuProps={{
          className: menuClass,
        }}
        className={`!rounded-none !border-0 !border-b-[1.5px] transition-all ease-linear duration-200 ${
          errorTxt && (focused || !focused)
            ? "!border-b-red-500"
            : !errorTxt && focused
            ? "!border-b-blue-500"
            : "!border-b-gray-800"
        } !text-gray-800 ring-0 w-full focus:shadow-none`}
        aria-required
        labelProps={{
          className: "hidden",
        }}
      >
        {options.map((el, index) => {
          return (
            <Option key={index} value={el.name.toLowerCase()} className="hover:!bg-white hover:!text-black transition-all ease-linear duration-200 hover:!bg-opacity-100 focus:!bg-opacity-100 aria-selected:!bg-white aria-selected:!text-black focus:!bg-white focus:!text-black">
              <div style={{ display: "flex", alignItems: "center" }}>
                {el.image && (
                  <img
                    src={el.image}
                    alt=""
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                )}
                {el.name}
              </div>
            </Option>
          );
        })}
      </Select>
      {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
    </>
  );
};
export default GlobalSelect2;
