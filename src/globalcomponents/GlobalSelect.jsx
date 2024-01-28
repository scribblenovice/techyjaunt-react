import { Select, Option } from "@material-tailwind/react";
const GlobalSelect = ({options, handleChange, inputVal, inputName, errorTxt, menuClass} )=>{
    return (
      <>
        <Select
          onChange={handleChange}
          value={inputVal}
          name={inputName}
          menuProps={{
            className: menuClass
          }}
          className={`!border ${
            errorTxt ? "!border-red-500" : "!border-gray-400"
          } text-gray-900 focus:!border-black focus:!border-2 focus:!outline-0 focus:!shadow-none`}
          aria-required
          labelProps={{
            className: "hidden",
          }}
        >
          {options.map((el) => {
            return (
              <Option key={el.id || el.lat} value={el.name.toLowerCase()}>
                {el.name}
              </Option>
            );
          })}
        </Select>
        {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
      </>
    );
}
export default GlobalSelect