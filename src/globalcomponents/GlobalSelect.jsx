import { Select, Option } from "@material-tailwind/react";
const GlobalSelect = ({options, handleChange, inputVal, inputName, errorTxt} )=>{
    return (
      <>
        <Select
          onChange={handleChange}
          value={inputVal}
          name={inputName}
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
              <Option key={el.id} value={el.value}>
                {el.courseName}
              </Option>
            );
          })}
        </Select>
        {errorTxt && <p className="text-xs text-red-500">{errorTxt}</p>}
      </>
    );
}
export default GlobalSelect