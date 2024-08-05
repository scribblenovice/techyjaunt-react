import { Select, Option } from "@material-tailwind/react";
const GlobalSelect = ({
  options,
  handleChange,
  inputVal,
  inputName,
  errorTxt,
  menuClass,
}) => {
  return (
    <>
      <Select
      id="select"
        onChange={handleChange}
        value={inputVal}
        name={inputName}
        menuProps={{
          className: menuClass,
        }}
        className={`!border ${
          errorTxt ? "!border-red-500" : "!border-gray-400"
        } text-gray-900 focus:!border-black focus:!border-2 focus:!outline-0 focus:!shadow-none`}
        aria-required
        labelProps={{
          className: "hidden",
        }}
      >
        {options.map((el, index) => {
          return (
            <Option key={index} value={el.name.toLowerCase()}>
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
export default GlobalSelect;
