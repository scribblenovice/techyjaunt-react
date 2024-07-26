import { Input } from "@material-tailwind/react";
import { useState } from "react";

export function GlobalText2({
  labelTxt,
  id,
  handleChange,
  inputType,
  inputVal,
  inputName,
  errorTxt,
  isDisabled,
  placeTxt,
  isRequired,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={`w-full`}>
      <Input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`!rounded-none !border-0 !border-b-[1.5px] transition-all ease-linear duration-200 ${
          errorTxt && (focused || !focused)
            ? "!border-b-red-500"
            : !errorTxt && focused
            ? "!border-b-blue-500"
            : "!border-b-gray-800"
        } !text-gray-800 ring-0 w-full focus:shadow-none`}
        labelProps={{
          className: "hidden",
        }}
        type={inputType}
        id={id}
        label={labelTxt}
        onChange={handleChange}
        name={inputName}
        disabled={isDisabled}
        value={inputVal}
        placeholder={placeTxt}
        required={isRequired}
      />
      {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
    </div>
  );
}
export default GlobalText2;
