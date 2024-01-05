import { Input } from "@material-tailwind/react";
 
export function GlobalText({ labelProps,inputVal, labelTxt, id, handleChange, inputType, inputName, errorTxt }) {
  return (
    <div className={`w-full ${errorTxt!=""? "border-red-500":""}`}>
      <Input labelProps={labelProps} type={inputType} id={id} label={labelTxt} onChange={handleChange} name={inputName}/>
    {errorTxt && (<p className="text-xs text-red-500">{errorTxt}</p>)}
    </div>
  );
}
export default GlobalText
