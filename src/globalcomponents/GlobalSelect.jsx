import { Select, Option } from "@material-tailwind/react";
const GlobalSelect = ({options, handleChange, inputVal, inputName, errorTxt} )=>{
    return (
      <>
        <Select
          onChange={handleChange}
          value={inputVal}
          className={`${
            errorTxt ? "!border-red-500" : "!border-blue-gray-200"
          }`}
          name={inputName}
          aria-required
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