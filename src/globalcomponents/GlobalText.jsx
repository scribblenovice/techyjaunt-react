import { Input } from "@material-tailwind/react";
 
export function GlobalText({ labelProps, labelTxt, id, handleChange, inputType, inputName, errorTxt }) {
  return (
    <div className={`w-full`}>
      <Input
        className={`${
          errorTxt ? "!border-red-500" : "!border-blue-gray-200"
        } focus:!border-black w-full`}
        labelProps={labelProps}
        type={inputType}
        id={id}
        label={labelTxt}
        onChange={handleChange}
        name={inputName}
      />
      {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
    </div>
  );
}
export default GlobalText
