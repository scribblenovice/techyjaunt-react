import { Input } from "@material-tailwind/react";
 
export function GlobalText({
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
 handleBlur,handleFocus
}) {
  return (
    <div className={`w-full`}>
      <Input
        className={`!border ${
          errorTxt ? "!border-red-500" : "!border-gray-400"
        } text-gray-900 focus:!border-black focus:!border-2 ring-0 focus:shadow-none`}
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
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
    </div>
  );
}
export default GlobalText
