import { Input } from "@material-tailwind/react";
 
export function GlobalText({ inputVal, labelTxt, id, handleChange, inputType, inputName, errorTxt }) {
  return (
    <div className="w-full">
      <Input type={inputType} id={id} label={labelTxt} onChange={handleChange} name={inputName}/>
    {errorTxt && (<p className="text-xs text-red-500">{errorTxt}</p>)}
    </div>
  );
}
export default GlobalText
